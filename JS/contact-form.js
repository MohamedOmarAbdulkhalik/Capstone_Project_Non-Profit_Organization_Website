/**
 * Contact Form Validation
 */
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;

            // Reset error messages
            document.querySelectorAll('.error-message').forEach(el => {
                el.style.display = 'none';
            });

            // Validate Name
            const nameInput = document.getElementById('name');
            const nameError = document.getElementById('name-error');
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Please enter your name';
                nameError.style.display = 'block';
                isValid = false;
            }

            // Validate Email
            const emailInput = document.getElementById('email');
            const emailError = document.getElementById('email-error');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Please enter your email';
                emailError.style.display = 'block';
                isValid = false;
            } else if (!emailRegex.test(emailInput.value)) {
                emailError.textContent = 'Please enter a valid email';
                emailError.style.display = 'block';
                isValid = false;
            }

            // Validate Subject
            const subjectInput = document.getElementById('subject');
            const subjectError = document.getElementById('subject-error');
            if (subjectInput.value.trim() === '') {
                subjectError.textContent = 'Please enter a subject';
                subjectError.style.display = 'block';
                isValid = false;
            }

            // Validate Message
            const messageInput = document.getElementById('message');
            const messageError = document.getElementById('message-error');
            if (messageInput.value.trim() === '') {
                messageError.textContent = 'Please enter your message';
                messageError.style.display = 'block';
                isValid = false;
            }

            // If form is valid
            if (isValid) {
                // Here you would typically send the form data to a server
                // For demonstration, we'll show a success message
                
                // Hide form and show success message
                contactForm.style.display = 'none';
                formSuccess.classList.add('show');
                
                // Scroll to success message
                setTimeout(() => {
                    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
                
                // Reset form (optional)
                // contactForm.reset();
            }
        });
    }
});