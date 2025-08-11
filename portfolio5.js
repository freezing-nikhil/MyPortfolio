
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;
        
        const currentTheme = localStorage.getItem('theme') || 'dark';
        body.setAttribute('data-theme', currentTheme);
        
        updateThemeIcon(currentTheme);
        
        themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        let newTheme;

        if (currentTheme === 'dark') {
        newTheme = 'light';
        } else {
        newTheme = 'dark';
        }

       body.setAttribute('data-theme', newTheme);
       localStorage.setItem('theme', newTheme);
       updateThemeIcon(newTheme);
});

        
        function updateThemeIcon(theme) {
            const icon = themeToggle.querySelector('i');
            if (theme === 'dark') {
                icon.className = 'fas fa-sun';
            } else {
                icon.className = 'fas fa-moon';
            }
        }
        

        const mobileMenu = document.getElementById('mobile-menu');
        const navMenu = document.getElementById('nav-menu');
        
        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileMenu.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
        
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenu.querySelector('i').className = 'fas fa-bars';
            });
        });
        

        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = item.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
        
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'var(--bg-secondary)';
                header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'var(--bg-secondary)';
                header.style.boxShadow = 'none';
            }
        });
        
        window.addEventListener('load', () => {
            document.body.style.opacity = '1';
        });