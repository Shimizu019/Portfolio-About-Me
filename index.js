document.addEventListener('DOMContentLoaded', () => {
    
    // --- Scroll Animation Observer ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));

    // --- Form Handling (Prevent Refresh) ---
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = 'Message Sent!';
        btn.style.backgroundColor = '#22c55e'; // Green success color
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.backgroundColor = ''; // Reset to CSS default
            form.reset();
        }, 3000);
    });
});