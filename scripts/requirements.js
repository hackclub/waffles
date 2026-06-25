function highlightOnScroll() {
    const blocks = document.querySelectorAll('.requirement-block');

    blocks.forEach(block => {
        const blockTop = block.getBoundingClientRect().top;
        const blockBottom = block.getBoundingClientRect().bottom;

        if (blockTop < window.innerHeight * 0.7 && blockBottom > 100) {
            block.style.opacity = '1';
            block.style.transform = 'translateY(0)';
        }
    });
}

function animateRequirementItems() {
    const items = document.querySelectorAll('.req-item, .note-item');

    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 100 * index);
    });
}

window.addEventListener('load', function() {
    const blocks = document.querySelectorAll('.requirement-block');
    blocks.forEach(block => {
        block.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        block.style.opacity = '0';
        block.style.transform = 'translateY(30px)';
    });

    animateRequirementItems();
    highlightOnScroll();
});

window.addEventListener('scroll', highlightOnScroll);
