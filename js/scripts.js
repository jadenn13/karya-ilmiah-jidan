document.addEventListener('DOMContentLoaded', (event) => {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        if(index === 0) slide.classList.add('active');
        slide.addEventListener('click', function() {
            slides.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
