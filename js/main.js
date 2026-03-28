/**
 * 智医科技官网 - 交互脚本
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // 导航栏滚动效果
    // ========================================
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
        }
        
        lastScroll = currentScroll;
    });
    
    // ========================================
    // 移动端菜单切换
    // ========================================
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // ========================================
    // 客户案例标签切换
    // ========================================
    const caseTabs = document.querySelectorAll('.case-tab');
    const caseItems = document.querySelectorAll('.case-item');
    
    caseTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // 切换标签激活状态
            caseTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // 切换案例内容
            caseItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('data-category') === category) {
                    item.classList.add('active');
                }
            });
        });
    });
    
    // ========================================
    // 平滑滚动
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // ========================================
    // 表单提交处理
    // ========================================
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // 这里可以添加实际的提交逻辑
            // 目前显示成功提示
            alert('感谢您的咨询！我们的工作人员将尽快与您联系。');
            
            // 重置表单
            this.reset();
            
            // TODO: 实际部署时替换为 API 调用
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(data)
            // });
        });
    }
    
    // ========================================
    // 滚动动画 - 元素淡入效果
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 观察需要动画的元素
    const animateElements = document.querySelectorAll('.solution-card, .ecosystem-card, .insight-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // ========================================
    // 悬浮联系按钮点击
    // ========================================
    const floatBtn = document.querySelector('.float-contact-btn');
    if (floatBtn) {
        floatBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('#contact').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    
    // ========================================
    // 导航菜单高亮当前区块
    // ========================================
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
    
});

// ========================================
// 控制台信息
// ========================================
console.log('%c智医科技官网 ', 'font-size: 20px; font-weight: bold; color: #35ADF3;');
console.log('%c为患者解忧，让医院更智慧', 'font-size: 14px; color: #666;');
