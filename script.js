// Mobile Menu Toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Close mobile menu if open
        document.querySelector('nav ul').classList.remove('show');
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Animate Skill Bars on Scroll
window.addEventListener('scroll', function() {
    const skillsSection = document.querySelector('.skills');
    const skillBars = document.querySelectorAll('.skill-level');
    
    if (isInViewport(skillsSection)) {
        skillBars.forEach(bar => {
            bar.style.width = bar.style.width || bar.classList.contains('html') ? '90%' : 
                              bar.classList.contains('js') ? '80%' :
                              bar.classList.contains('react') ? '75%' : '70%';
        });
    }
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Initialize skill bars with 0 width and then animate
document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-level');
    skillBars.forEach(bar => {
        bar.style.width = '0';
        bar.setAttribute('data-level', bar.textContent);
        bar.textContent = '';
    });
    
    // Trigger animation after a short delay
    setTimeout(() => {
        if (isInViewport(document.querySelector('.skills'))) {
            skillBars.forEach(bar => {
                bar.style.width = bar.classList.contains('html') ? '90%' : 
                                  bar.classList.contains('js') ? '80%' :
                                  bar.classList.contains('react') ? '75%' : '70%';
            });
        }
    }, 500);
});

// Print Biodata
function printBiodata() {
    window.print();
}