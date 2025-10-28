setTimeout(() => {
    const loader = document.getElementById('loader');
    loader.classList.add('fade-out');
    document.getElementById('content').classList.add('visible');

    setTimeout(() => {
        loader.classList.add('hidden');
        initAnimations();
    }, 800);
}, 2100);

function initAnimations() {
    const heroTitle = document.querySelector('.hero-title');
    const text = heroTitle.textContent.trim();

    heroTitle.style.visibility = 'visible';
    heroTitle.innerHTML = '';
    const words = text.split(' ');

    words.forEach((word, wordIndex) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'word';

        word.split('').forEach((char) => {
            const charSpan = document.createElement('span');
            charSpan.className = 'char';
            charSpan.textContent = char;
            wordSpan.appendChild(charSpan);
        });

        heroTitle.appendChild(wordSpan);
        if (wordIndex < words.length - 1) {
            heroTitle.appendChild(document.createTextNode(' '));
        }
    });

    gsap.to('.hero-title .char', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.03,
        delay: 0.3,
        ease: 'power4.out'
    });

    gsap.to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        delay: 1.1,
        duration: 0.6,
        ease: 'power2.out'
    });

    gsap.to('.halloween-info', {
        opacity: 1,
        y: 0,
        delay: 1.2,
        duration: 0.6,
        ease: 'power2.out'
    });

    gsap.to('.hero-buttons', {
        opacity: 1,
        y: 0,
        delay: 1.3,
        duration: 0.6,
        ease: 'power2.out'
    });

    gsap.to('.quick-actions', {
        opacity: 1,
        y: 0,
        delay: 1.6,
        duration: 0.6,
        ease: 'power2.out'
    });

    const infoCards = document.querySelectorAll('.info-card');

    infoCards.forEach((card, index) => {
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'top 20%',
                toggleActions: 'play none none none'
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power3.out'
        });
    });
}
