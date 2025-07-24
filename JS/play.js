document.addEventListener('DOMContentLoaded', function() {
    // عناصر DOM
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    
    // التحقق من وضع الداكن المحفوظ في localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }
    
    // تبديل وضع الداكن
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark');
        
        // تحديث الأيقونات
        if (document.body.classList.contains('dark')) {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
            localStorage.setItem('theme', 'dark');
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
            localStorage.setItem('theme', 'light');
        }
    });
    
    // تبديل القائمة الجانبية على الشاشات الصغيرة
    mobileMenuBtn.addEventListener('click', function() {
        mobileNav.classList.toggle('open');
    });
    
    // إغلاق القائمة عند النقر على رابط
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('open');
        });
    });
});