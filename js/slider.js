const slides = document.querySelectorAll('.slides__image')
const prevBtn = document.querySelector('.slides__prev')
const nextBtn = document.querySelector('.slides__next')
const dotsContainer = document.querySelector('.dots')
let currentIndex = 0

const dots = document.querySelectorAll('.dot')

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex)
    })
}

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'previous', 'next');
        if (i === index) {
            slide.classList.add('active')
        } else if (i === (index - 1 + slides.length) % slides.length) {
            slide.classList.add('previous')
        } else if (i === (index + 1) % slides.length) {
            slide.classList.add('next')
        }
    })
    updateDots()
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index
        showSlide(currentIndex)
    });
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex)
})

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex)
})

showSlide(currentIndex)