
        function setRole(role) {
            const buttons = document.querySelectorAll('.role-btn');
            const submitBtn = document.getElementById('submit-btn');
            const form = document.getElementById('login-form');

            buttons.forEach(btn => btn.classList.remove('active'));

            if (role === 'student') {
                buttons[0].classList.add('active');
                submitBtn.textContent = 'Sign In as Student';
                form.action = 'profile.html';
            } else {
                buttons[1].classList.add('active');
                submitBtn.textContent = 'Sign In as DSO Officer';
                form.action = 'verification.html';
            }
        }