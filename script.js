// JavaScript for SevaUtsav Landing Page

// Add smooth scrolling to navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Handle form submission in the footer
document.querySelector('.footer-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const message = document.getElementById('user-message').value.trim();

    if (message) {
        alert('Thank you for your message: ' + message);
        this.reset(); // Clear the form
    } else {
        alert('Please enter a message before submitting.');
    }
});


document.addEventListener('DOMContentLoaded', function() {
            const galleries = document.querySelectorAll('.gallery-container');
            
            galleries.forEach(gallery => {
                const track = gallery.querySelector('.gallery-track');
                const items = gallery.querySelectorAll('.gallery-item');
                const prev = gallery.querySelector('.prev');
                const next = gallery.querySelector('.next');
                
                let currentIndex = 0;
                const itemWidth = 100; // 100% of container width

                prev.addEventListener('click', () => {
                    currentIndex = (currentIndex - 1 + items.length/2) % (items.length/2);
                    track.style.transform = `translateX(-${currentIndex * itemWidth}%)`;
                    track.style.animation = 'none';
                });

                next.addEventListener('click', () => {
                    currentIndex = (currentIndex + 1) % (items.length/2);
                    track.style.transform = `translateX(-${currentIndex * itemWidth}%)`;
                    track.style.animation = 'none';
                });

                track.addEventListener('mouseleave', () => {
                    track.style.animation = 'scroll 25s linear infinite';
                    track.style.transform = ''; // Reset transform to allow animation to work
                });
            });
        });