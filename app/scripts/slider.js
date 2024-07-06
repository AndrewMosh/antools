class ReviewsSlider {
    constructor(selector) {
        this.slider = document.querySelector(selector);
        this.slides = this.slider.querySelectorAll(".reviews-slider__slide");
        this.prevBtn = this.slider.querySelector(".reviews-slider__btn--prev");
        this.nextBtn = this.slider.querySelector(".reviews-slider__btn--next");
        this.dots = this.slider.querySelectorAll(".reviews-slider__dot");
        this.currentSlide = 0;
        this.init();
    }

    init() {
        this.showSlide(this.currentSlide);
        this.addEventListeners();
    }

    showSlide(index) {
        this.currentSlide = index;
        this.slides.forEach((slide, i) => {
            slide.style.display = i === index ? "flex" : "none";
        });
        this.dots.forEach((dot, i) => {
            dot.classList.toggle("reviews-slider__dot--active", i === index);
        });
        this.updateControls();
    }

    updateControls() {
        this.prevBtn.disabled = this.currentSlide === 0;
        this.nextBtn.disabled = this.currentSlide === this.slides.length - 1;
    }

    prevSlide() {
        this.showSlide(this.currentSlide - 1);
    }

    nextSlide() {
        this.showSlide(this.currentSlide + 1);
    }

    addEventListeners() {
        this.prevBtn.addEventListener("click", () => this.prevSlide());
        this.nextBtn.addEventListener("click", () => this.nextSlide());
        this.dots.forEach((dot, index) => {
            dot.addEventListener("click", () => this.showSlide(index));
        });
    }
}

new ReviewsSlider(".reviews-slider");
