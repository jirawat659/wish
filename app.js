// ==================== State Management ====================
const AppState = {
    currentUser: null,
    cart: [],
    bookings: [],
    fortuneHistory: [],
    
    init() {
        this.loadFromLocalStorage();
    },
    
    loadFromLocalStorage() {
        const user = localStorage.getItem('currentUser');
        if (user) {
            this.currentUser = JSON.parse(user);
        }
        
        const cart = localStorage.getItem('cart');
        if (cart) {
            this.cart = JSON.parse(cart);
        }
        
        const bookings = localStorage.getItem('bookings');
        if (bookings) {
            this.bookings = JSON.parse(bookings);
        }
        
        const history = localStorage.getItem('fortuneHistory');
        if (history) {
            this.fortuneHistory = JSON.parse(history);
        }
    },
    
    saveToLocalStorage() {
        if (this.currentUser) {
            localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        } else {
            localStorage.removeItem('currentUser');
        }
        localStorage.setItem('cart', JSON.stringify(this.cart));
        localStorage.setItem('bookings', JSON.stringify(this.bookings));
        localStorage.setItem('fortuneHistory', JSON.stringify(this.fortuneHistory));
    },
    
    login(user) {
        this.currentUser = user;
        this.saveToLocalStorage();
        updateUIAfterAuth();
    },
    
    logout() {
        this.currentUser = null;
        this.saveToLocalStorage();
        updateUIAfterAuth();
        navigateToPage('home');
    },
    
    updateUserPremium(isPremium) {
        if (this.currentUser) {
            this.currentUser.isPremium = isPremium;
            this.saveToLocalStorage();
            updateUIAfterAuth();
        }
    }
};

// ==================== Navigation ====================
function navigateToPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageName) {
            link.classList.add('active');
        }
    });
    
    // Show requested page
    let pageElement = document.getElementById(pageName + 'Page');
    
    // If page doesn't exist, create it dynamically
    if (!pageElement) {
        pageElement = createPageElement(pageName);
        if (pageElement) {
            document.getElementById('mainContent').appendChild(pageElement);
        }
    }
    
    if (pageElement) {
        pageElement.classList.add('active');
        window.scrollTo(0, 0);
    }
}

function createPageElement(pageName) {
    const page = document.createElement('div');
    page.id = pageName + 'Page';
    page.className = 'page';
    
    // Each module will populate its own content
    switch(pageName) {
        case 'fortune':
            if (window.createFortunePage) window.createFortunePage(page);
            break;
        case 'fortune-tellers':
            if (window.createFortuneTellersPage) window.createFortuneTellersPage(page);
            break;
        case 'shop':
            if (window.createShopPage) window.createShopPage(page);
            break;
        case 'chatbot':
            if (window.createChatbotPage) window.createChatbotPage(page);
            break;
        case 'profile':
            if (window.createProfilePage) window.createProfilePage(page);
            break;
        default:
            return null;
    }
    
    return page;
}

// ==================== Authentication Modals ====================
function showLoginModal() {
    const modal = createModal('เข้าสู่ระบบ', `
        <form id="loginForm">
            <div class="form-group">
                <label class="form-label">ประเภทบัญชี</label>
                <select class="form-select" name="userType">
                    <option value="user">ผู้ใช้ทั่วไป</option>
                    <option value="fortuneTeller">หมอดู</option>
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">อีเมล</label>
                <input type="email" class="form-input" name="email" required placeholder="your@email.com">
            </div>
            <div class="form-group">
                <label class="form-label">รหัสผ่าน</label>
                <input type="password" class="form-input" name="password" required placeholder="••••••••">
            </div>
            <button type="submit" class="btn-primary" style="width: 100%;">เข้าสู่ระบบ</button>
            <p class="text-center text-muted mt-1">ยังไม่มีบัญชี? <a href="#" id="switchToRegister" style="color: var(--primary-light);">สมัครสมาชิก</a></p>
        </form>
    `);
    
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('switchToRegister').addEventListener('click', (e) => {
        e.preventDefault();
        closeModal();
        showRegisterModal();
    });
}

function showRegisterModal() {
    const modal = createModal('สมัครสมาชิก', `
        <form id="registerForm">
            <div class="form-group">
                <label class="form-label">ประเภทบัญชี</label>
                <select class="form-select" name="userType">
                    <option value="user">ผู้ใช้ทั่วไป</option>
                    <option value="fortuneTeller">หมอดู</option>
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">ชื่อ-นามสกุล</label>
                <input type="text" class="form-input" name="name" required placeholder="ชื่อของคุณ">
            </div>
            <div class="form-group">
                <label class="form-label">อีเมล</label>
                <input type="email" class="form-input" name="email" required placeholder="your@email.com">
            </div>
            <div class="form-group">
                <label class="form-label">รหัสผ่าน</label>
                <input type="password" class="form-input" name="password" required placeholder="••••••••">
            </div>
            <button type="submit" class="btn-primary" style="width: 100%;">สมัครสมาชิก</button>
            <p class="text-center text-muted mt-1">มีบัญชีแล้ว? <a href="#" id="switchToLogin" style="color: var(--primary-light);">เข้าสู่ระบบ</a></p>
        </form>
    `);
    
    document.getElementById('registerForm').addEventListener('submit', handleRegister);
    document.getElementById('switchToLogin').addEventListener('click', (e) => {
        e.preventDefault();
        closeModal();
        showLoginModal();
    });
}

function handleLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const userType = formData.get('userType');
    
    // Demo authentication - check localStorage for users
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password && u.userType === userType);
    
    if (user) {
        AppState.login(user);
        closeModal();
        showNotification('เข้าสู่ระบบสำเร็จ!', 'success');
    } else {
        showNotification('อีเมลหรือรหัสผ่านไม่ถูกต้อง', 'error');
    }
}

function handleRegister(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const userType = formData.get('userType');
    
    // Check if email already exists
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some(u => u.email === email)) {
        showNotification('อีเมลนี้ถูกใช้งานแล้ว', 'error');
        return;
    }
    
    // Create new user
    const newUser = {
        id: Date.now(),
        name,
        email,
        password,
        userType,
        isPremium: false,
        registeredAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    AppState.login(newUser);
    closeModal();
    showNotification('สมัครสมาชิกสำเร็จ!', 'success');
}

function updateUIAfterAuth() {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const userMenu = document.getElementById('userMenu');
    const userName = document.getElementById('userName');
    const premiumBadge = document.getElementById('premiumBadge');
    
    if (AppState.currentUser) {
        loginBtn.style.display = 'none';
        registerBtn.style.display = 'none';
        userMenu.style.display = 'block';
        userName.textContent = AppState.currentUser.name;
        
        if (AppState.currentUser.isPremium) {
            premiumBadge.style.display = 'inline-block';
        } else {
            premiumBadge.style.display = 'none';
        }
    } else {
        loginBtn.style.display = 'block';
        registerBtn.style.display = 'block';
        userMenu.style.display = 'none';
    }
    
    updateCartBadge();
}

function updateCartBadge() {
    const cartBadge = document.getElementById('cartBadge');
    cartBadge.textContent = AppState.cart.length;
}

// ==================== Modal Utilities ====================
function createModal(title, content) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
        <div class="modal">
            <div class="modal-header">
                <h2 class="modal-title">${title}</h2>
                <button class="modal-close" onclick="closeModal()">✕</button>
            </div>
            <div class="modal-body">
                ${content}
            </div>
        </div>
    `;
    
    document.getElementById('modalsContainer').appendChild(overlay);
    
    // Close on overlay click
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeModal();
        }
    });
    
    return overlay;
}

function closeModal() {
    const modalsContainer = document.getElementById('modalsContainer');
    modalsContainer.innerHTML = '';
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #10b981, #059669)' : type === 'error' ? 'linear-gradient(135deg, #ef4444, #dc2626)' : 'linear-gradient(135deg, var(--primary), var(--primary-dark))'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-lg);
        z-index: 9999;
        animation: slideInRight 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==================== Event Listeners ====================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize app state
    AppState.init();
    updateUIAfterAuth();
    
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Navigation links
    document.querySelectorAll('[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            navigateToPage(page);
            navMenu.classList.remove('active'); // Close mobile menu
        });
    });
    
    // Auth buttons
    document.getElementById('loginBtn').addEventListener('click', showLoginModal);
    document.getElementById('registerBtn').addEventListener('click', showRegisterModal);
    document.getElementById('logoutBtn').addEventListener('click', () => {
        AppState.logout();
        showNotification('ออกจากระบบสำเร็จ', 'success');
    });
    
    // Cart button
    document.getElementById('cartBtn').addEventListener('click', () => {
        if (window.showCartModal) {
            window.showCartModal();
        }
    });
    
    // Chatbot toggle
    document.getElementById('chatbotToggle').addEventListener('click', () => {
        if (window.toggleChatbot) {
            window.toggleChatbot();
        }
    });
    
    // Logo click - go home
    document.querySelector('.nav-logo').addEventListener('click', () => {
        navigateToPage('home');
    });
});

// Make functions available globally
window.AppState = AppState;
window.navigateToPage = navigateToPage;
window.createModal = createModal;
window.closeModal = closeModal;
window.showNotification = showNotification;
window.showLoginModal = showLoginModal;
