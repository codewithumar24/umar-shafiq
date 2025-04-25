// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 0);
});

//-------Navbar js End -----

//---------Skill Section js Start------

// Skills Section Animation
document.addEventListener('DOMContentLoaded', function() {
    const skillSection = document.querySelector('.skills');
    const progressBars = document.querySelectorAll('.progress');
    
    // Reset all progress bars to 0 initially
    progressBars.forEach(bar => {
      bar.style.width = '0';
    });
    
    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate each progress bar with staggered delay
          progressBars.forEach((bar, index) => {
            setTimeout(() => {
              const targetWidth = getComputedStyle(bar).getPropertyValue('--target-width');
              bar.style.width = targetWidth;
            }, index * 150); // 150ms delay between each animation
          });
          
          // Unobserve after animation to prevent retriggering
          skillsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 }); // Trigger when 20% of section is visible
    
    skillsObserver.observe(skillSection);
  });
//---------Skill Section js End------



//--------Project section js Start------
// Project Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        projectItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
//---------Project section js End


//---------Testimonil Section js start------
// Testimonial Animation
const testimonialItems = document.querySelectorAll('.testimonial-item');
const testimonialObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('show');
            }, index * 200);
        }
    });
}, { threshold: 0.1 });

testimonialItems.forEach(item => {
    testimonialObserver.observe(item);
});

// Update year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// --- Loader js Start----
// Loader
// window.addEventListener('load', () => {
//     const loader = document.querySelector('.loader');
//     setTimeout(() => {
//         loader.classList.add('fade-out');
//     }, 1000);
// });
// --- Loader js End----

// Back to Top Button js ----
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// Back to Top Button js End ----