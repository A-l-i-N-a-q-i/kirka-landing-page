        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        const animateOnScroll = function() {
            const elements = document.querySelectorAll('.fade-in, .slide-up');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementPosition < windowHeight - 100) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };
        
        window.addEventListener('scroll', animateOnScroll);
        document.addEventListener('DOMContentLoaded', function() {
            const animatedElements = document.querySelectorAll('.fade-in, .slide-up');
            
            animatedElements.forEach((element, index) => {
                if (element.classList.contains('fade-in')) {
                    element.style.opacity = '0';
                } else if (element.classList.contains('slide-up')) {
                    element.style.opacity = '0';
                    element.style.transform = 'translateY(20px)';
                }
                
                element.style.transition = 'all 0.8s cubic-bezier(0.39, 0.575, 0.565, 1)';
                element.style.transitionDelay = (index * 0.1) + 's';
            });
            setTimeout(() => {
                animateOnScroll();
            }, 100);
        });