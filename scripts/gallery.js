function formatRepoName(repo) {
    return repo.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

async function loadProjects() {
    const grid = document.getElementById('projects-grid');

    try {
        const res = await fetch("https://otter.shymike.dev/api/v1/query", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                filters: [{ field: "ysws", op: "eq", value: "Waffles" }],
                limit: 50,
                page: 1
            })
        });

        if (!res.ok) throw new Error("Request failed");

        const data = await res.json();
        const projects = data.data ?? [];

        if (!projects.length) {
            grid.innerHTML = '<p class="projects-empty">No submissions yet — be the first!</p>';
            return;
        }

        grid.innerHTML = projects.map(p => {
            const name = formatRepoName(p.inferred_repo ?? p.github_username ?? "Project");
            const author = p.github_username ?? p.inferred_username ?? "";
            const url = p.demo_url ?? "";

            return `<div class="project-card">
                <div class="project-card-name">${name}</div>
                <div class="project-card-meta">
                    ${author ? `<span class="project-card-author">Made by: @${author}</span>` : ""}
                </div>
                ${url ? `<a class="project-card-link" href="${url}" target="_blank" rel="noopener">
                    Visit site <i class="ph-bold ph-arrow-up-right"></i>
                </a>` : ""}
            </div>`;
        }).join("");

        const cards = grid.querySelectorAll('.project-card');
        cards.forEach((card, i) => {
            setTimeout(() => card.classList.add('visible'), i * 60);
        });

    } catch (err) {
        grid.innerHTML = '<p class="projects-error">Could not load projects right now. Try again later.</p>';
    }
}

document.addEventListener('DOMContentLoaded', loadProjects);
