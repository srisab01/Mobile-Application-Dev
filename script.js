$(document).ready(function() {
    // Testimonial slider functionality
    let currentSlide = 0;
    const testimonials = [
        {
            text: "This app saved my trip to Nepal! I could communicate with locals effortlessly and discover places I would have missed otherwise.",
            author: "Sarah T., Travel Blogger"
        },
        {
            text: "As a business traveler, LingoBridge has been invaluable. I can negotiate and close deals in multiple countries without language barriers.",
            author: "Michael R., Business Executive"
        },
        {
            text: "The offline mode is a game-changer! I was able to use it in remote areas with no internet connection and still communicate perfectly.",
            author: "Elena K., Adventure Traveler"
        }
    ];

    // Initialize the testimonial slider
    function updateTestimonials() {
        // Create testimonial slides
        let sliderHTML = '';
        testimonials.forEach(testimonial => {
            sliderHTML += `
                <div class="testimonial">
                    <div class="testimonial-avatar">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                    </div>
                    <p class="testimonial-text">"${testimonial.text}"</p>
                    <p class="testimonial-author">${testimonial.author}</p>
                </div>
            `;
        });
        
        $('.testimonial-slider').html(sliderHTML);
        goToSlide(currentSlide);
        
        // Create slider dots
        let dotsHTML = '';
        for (let i = 0; i < testimonials.length; i++) {
            dotsHTML += `<div class="slider-dot${i === 0 ? ' active' : ''}"></div>`;
        }
        $('.slider-controls').html(dotsHTML);
        
        // Add click events to dots
        $('.slider-dot').on('click', function() {
            const index = $(this).index();
            goToSlide(index);
        });
    }
    
    // Change slide
    function goToSlide(index) {
        currentSlide = index;
        $('.testimonial-slider').css('transform', `translateX(-${index * 100}%)`);
        $('.slider-dot').removeClass('active');
        $('.slider-dot').eq(index).addClass('active');
    }
    
    // Auto-rotate testimonials
    function autoRotateTestimonials() {
        setInterval(() => {
            currentSlide = (currentSlide + 1) % testimonials.length;
            goToSlide(currentSlide);
        }, 5000);
    }
    
    // Initialize testimonials
    updateTestimonials();
    autoRotateTestimonials();
    
    // Demo chat interaction
    $('.send-btn').click(function() {
        const message = $('.demo-input input').val().trim();
        if (message) {
            const newMessage = `
                <div class="message sent">
                    ${message}
                    <div class="translation">Translation will appear here...</div>
                </div>
            `;
            $('.demo-chat').append(newMessage);
            $('.demo-input input').val('');
            
            // Scroll to bottom of chat
            $('.demo-chat').scrollTop($('.demo-chat')[0].scrollHeight);
        }
    });
});
