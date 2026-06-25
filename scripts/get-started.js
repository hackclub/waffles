import { marked } from 'marked';

fetch('docs/get-started.md')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Could not load guide.');
        }
        return response.text();
    })
    .then((markdown) => {
        document.getElementById('markdown-content').innerHTML = marked.parse(markdown);
    })
    .catch(() => {
        document.getElementById('markdown-content').textContent = 'Could not load the guide.';
    });
