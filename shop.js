// ==================== Products Data ====================
const products = [
    {
        id: 1,
        name: 'พระขุนแผน',
        category: 'พระเครื่อง',
        price: 3500,
        description: 'พระเครื่องศักดิ์สิทธิ์ เสริมเสน่ห์ มีเมตตามหานิยม',
        image: '📿',
        rating: 4.8,
        reviews: 45,
        partner: 'ร้านพระมงคล'
    },
    {
        id: 2,
        name: 'พระนาคปรก',
        category: 'พระเครื่อง',
        price: 4200,
        description: 'ป้องกันอันตราย คุ้มครองภัยทั้งปวง',
        image: '🙏',
        rating: 4.9,
        reviews: 67,
        partner: 'ร้านพระมงคล'
    },
    {
        id: 3,
        name: 'นางกวัก',
        category: 'ของขลัง',
        price: 1500,
        description: 'เสริมดวงการค้าขาย เรียกทรัพย์เรียกลาภ',
        image: '🪆',
        rating: 4.7,
        reviews: 89,
        partner: 'ร้านของขลังดี'
    },
    {
        id: 4,
        name: 'พญาเต่าเรือน',
        category: 'ของขลัง',
        price: 2800,
        description: 'เสริมมั่นคงบ้านเรือน ยืนหยัดมั่นคง',
        image: '🐢',
        rating: 4.6,
        reviews: 34,
        partner: 'ร้านของขลังดี'
    },
    {
        id: 5,
        name: 'สายมู 9 สี',
        category: 'สายมู',
        price: 299,
        description: 'สายมูศักดิ์สิทธิ์ คุ้มครองป้องกันภัย',
        image: '🧵',
        rating: 4.5,
        reviews: 123,
        partner: 'ร้านสายมูมงคล'
    },
    {
        id: 6,
        name: 'แหวนนพเก้า',
        category: 'เครื่องประดับ',
        price: 5500,
        description: 'แหวนนพเก้าแท้ เสริมดวงครบองค์',
        image: '💍',
        rating: 4.9,
        reviews: 78,
        partner: 'ร้านทองมงคล'
    },
    {
        id: 7,
        name: 'กำไลถมนคร',
        category: 'เครื่องประดับ',
        price: 4800,
        description: 'เสริมเสน่ห์ ป้องกันภัย งามสง่า',
        image: '⚡',
        rating: 4.7,
        reviews: 56,
        partner: 'ร้านทองมงคล'
    },
    {
        id: 8,
        name: 'เหรียญปู่ทวด',
        category: 'เหรียญ',
        price: 2500,
        description: 'เหรียญศักดิ์สิทธิ์ มีเมตตา เสริมโชคลาภ',
        image: '🪙',
        rating: 4.8,
        reviews: 92,
        partner: 'ร้านพระเหรียญดี  '
    },
    {
        id: 9,
        name: 'น้ำมันเสน่ห์นาง',
        category: 'น้ำมันมนต์',
        price: 599,
        description: 'น้ำมันมนต์เสน่ห์ ทาแล้วมีเสน่ห์น่าหลงใหล',
        image: '🧴',
        rating: 4.6,
        reviews: 145,
        partner: 'ร้านน้ำมันมนต์'
    },
    {
        id: 10,
        name: 'ตะกรุดมหาเสน่ห์',
        category: 'ตะกรุด',
        price: 899,
        description: 'ตะกรุดเสน่ห์มหานิยม ดึงดูดคนรอบข้าง',
        image: '📜',
        rating: 4.7,
        reviews: 67,
        partner: 'ร้านตะกรุดดี'
    },
    {
        id: 11,
        name: 'ผ้ายันต์',
        category: 'ผ้ายันต์',
        price: 1200,
        description: 'ผ้ายันต์คุ้มครอง ป้องกันภยันตราย',
        image: '🧣',
        rating: 4.5,
        reviews: 43,
        partner: 'ร้านผ้ายันต์มงคล'
    },
    {
        id: 12,
        name: 'หนังสือคาถา',
        category: 'คาถา',
        price: 450,
        description: 'คาถามงคล สวดแล้วมีพลัง',
        image: '📖',
        rating: 4.4,
        reviews: 89,
        partner: 'ร้านหนังสือมงคล'
    }
];

const categories = ['ทั้งหมด', 'พระเครื่อง', 'ของขลัง', 'สายมู', 'เครื่องประดับ', 'เหรียญ', 'น้ำมันมนต์', 'ตะกรุด', 'ผ้ายันต์', 'คาถา'];

// ==================== Create Shop Page ====================
window.createShopPage = function (pageElement) {
    pageElement.innerHTML = `
        <div class="container" style="padding: 3rem 1.5rem;">
            <h1 class="section-title">ร้านค้า</h1>
            <p style="text-align: center; color: var(--text-secondary); margin-bottom: 3rem;">สินค้าของขลังและเครื่องรางของดี</p>
            
            <!-- Categories Filter -->
            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; justify-content: center; margin-bottom: 3rem;">
                ${categories.map(cat => `
                    <button class="btn-secondary category-filter ${cat === 'ทั้งหมด' ? 'active' : ''}" onclick="filterProducts('${cat}')" style="padding: 0.5rem 1rem; font-size: 0.875rem;">
                        ${cat}
                    </button>
                `).join('')}
            </div>
            
            <!-- Products Grid -->
            <div id="productsGrid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 2rem;">
                ${products.map(p => createProductCard(p)).join('')}
            </div>
        </div>
    `;
};

function createProductCard(product) {
    return `
        <div class="product-card" data-category="${product.category}" style="background: var(--bg-glass); backdrop-filter: blur(10px); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 1.5rem; transition: var(--transition); cursor: pointer;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='var(--shadow-glow)'" onmouseout="this.style.transform=''; this.style.boxShadow=''" onclick="showProductDetail(${product.id})">
            <div style="font-size: 4rem; text-align: center; margin-bottom: 1rem;">${product.image}</div>
            <h3 style="color: var(--primary-light); margin-bottom: 0.5rem; font-size: 1.125rem;">${product.name}</h3>
            <p style="color: var(--text-muted); font-size: 0.875rem; margin-bottom: 0.5rem;">${product.category}</p>
            <p style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 1rem; line-height: 1.5;">${product.description}</p>
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
                <span style="color: var(--secondary);">⭐ ${product.rating}</span>
                <span style="color: var(--text-muted); font-size: 0.875rem;">(${product.reviews})</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="color: var(--secondary); font-size: 1.25rem; font-weight: 700;">${product.price.toLocaleString()} ฿</span>
                <button class="btn-primary" onclick="event.stopPropagation(); addToCart(${product.id})" style="padding: 0.5rem 1rem; font-size: 0.875rem;">เพิ่มลงตะกร้า</button>
            </div>
        </div>
    `;
}

window.filterProducts = function (category) {
    // Update button states
    document.querySelectorAll('.category-filter').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.trim() === category) {
            btn.classList.add('active');
        }
    });

    // Filter products
    document.querySelectorAll('.product-card').forEach(card => {
        if (category === 'ทั้งหมด' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
};

// ==================== Product Detail ====================
window.showProductDetail = function (productId) {
    const product = products.find(p => p.id === productId);

    const content = `
        <div style="text-align: center;">
            <div style="font-size: 6rem; margin-bottom: 1rem;">${product.image}</div>
            <h2 style="color: var(--primary-light); margin-bottom: 0.5rem;">${product.name}</h2>
            <p style="color: var(--text-muted); margin-bottom: 1rem;">${product.category}</p>
            <div style="display: flex; align-items: center; justify-content: center; gap: 1rem; margin-bottom: 2rem;">
                <span style="color: var(--secondary);">⭐ ${product.rating}</span>
                <span style="color: var(--text-muted);">${product.reviews} รีวิว</span>
            </div>
        </div>
        
        <div style="background: var(--bg-glass); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; margin-bottom: 1.5rem;">
            <h4 style="color: var(--primary-light); margin-bottom: 0.5rem;">รายละเอียดสินค้า</h4>
            <p style="color: var(--text-secondary); line-height: 1.6;">${product.description}</p>
        </div>
        
        <div style="background: var(--bg-glass); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; margin-bottom: 2rem;">
            <h4 style="color: var(--primary-light); margin-bottom: 0.5rem;">ร้านพาร์ทเนอร์</h4>
            <p style="color: var(--text-secondary);">🏪 ${product.partner}</p>
        </div>
        
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; padding: 1rem; background: var(--bg-glass); border-radius: var(--radius-md);">
            <span style="color: var(--text-muted);">ราคา:</span>
            <span style="color: var(--secondary); font-size: 1.75rem; font-weight: 700;">${product.price.toLocaleString()} ฿</span>
        </div>
        
        <button class="btn-primary" style="width: 100%;" onclick="addToCart(${product.id}); closeModal();">เพิ่มลงตะกร้า</button>
    `;

    createModal(product.name, content);
};

// ==================== Cart Functions ====================
window.addToCart = function (productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = AppState.cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        AppState.cart.push({
            ...product,
            quantity: 1
        });
    }

    AppState.saveToLocalStorage();
    updateCartBadge();
    showNotification(`เพิ่ม ${product.name} ลงตะกร้าแล้ว`, 'success');
};

window.showCartModal = function () {
    if (AppState.cart.length === 0) {
        createModal('ตะกร้าสินค้า', `
            <div style="text-align: center; padding: 2rem;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">🛒</div>
                <p style="color: var(--text-secondary);">ตะกร้าของคุณว่างเปล่า</p>
            </div>
        `);
        return;
    }

    const total = AppState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const content = `
        <div>
            ${AppState.cart.map(item => `
                <div style="display: flex; gap: 1rem; padding: 1rem; background: var(--bg-glass); border-radius: var(--radius-md); margin-bottom: 1rem; align-items: center;">
                    <div style="font-size: 3rem;">${item.image}</div>
                    <div style="flex: 1;">
                        <h4 style="color: var(--primary-light); margin-bottom: 0.25rem;">${item.name}</h4>
                        <p style="color: var(--text-muted); font-size: 0.875rem;">${item.price.toLocaleString()} ฿</p>
                    </div>
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <button onclick="updateCartQuantity(${item.id}, -1)" style="width: 30px; height: 30px; background: var(--bg-dark); border: 1px solid var(--border-color); border-radius: var(--radius-sm); color: var(--text-primary); cursor: pointer;">-</button>
                        <span style="color: var(--text-primary); min-width: 30px; text-align: center;">${item.quantity}</span>
                        <button onclick="updateCartQuantity(${item.id}, 1)" style="width: 30px; height: 30px; background: var(--bg-dark); border: 1px solid var(--border-color); border-radius: var(--radius-sm); color: var(--text-primary); cursor: pointer;">+</button>
                    </div>
                    <button onclick="removeFromCart(${item.id})" style="color: #ef4444; background: none; border: none; cursor: pointer; font-size: 1.25rem;">🗑️</button>
                </div>
            `).join('')}
            
            <div style="border-top: 1px solid var(--border-color); padding-top: 1.5rem; margin-top: 1.5rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                    <span style="color: var(--text-primary); font-size: 1.25rem; font-weight: 600;">ยอดรวม:</span>
                    <span style="color: var(--secondary); font-size: 1.75rem; font-weight: 700;">${total.toLocaleString()} ฿</span>
                </div>
                <button class="btn-primary" style="width: 100%;" onclick="checkout()">ชำระเงิน</button>
            </div>
        </div>
    `;

    createModal('ตะกร้าสินค้า', content);
};

window.updateCartQuantity = function (productId, change) {
    const item = AppState.cart.find(i => i.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            AppState.saveToLocalStorage();
            updateCartBadge();
            closeModal();
            setTimeout(showCartModal, 100);
        }
    }
};

window.removeFromCart = function (productId) {
    AppState.cart = AppState.cart.filter(item => item.id !== productId);
    AppState.saveToLocalStorage();
    updateCartBadge();
    closeModal();
    if (AppState.cart.length > 0) {
        setTimeout(showCartModal, 100);
    }
    showNotification('ลบสินค้าออกจากตะกร้าแล้ว', 'success');
};

window.checkout = function () {
    if (!AppState.currentUser) {
        closeModal();
        setTimeout(() => {
            showNotification('กรุณาเข้าสู่ระบบก่อนชำระเงิน', 'error');
            showLoginModal();
        }, 300);
        return;
    }

    const total = AppState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const content = `
        <div>
            <h3 style="color: var(--primary-light); text-align: center; margin-bottom: 1.5rem;">ยืนยันการสั่งซื้อ</h3>
            
            <div class="form-group">
                <label class="form-label">ชื่อ-นามสกุล</label>
                <input type="text" class="form-input" value="${AppState.currentUser.name}" readonly>
            </div>
            
            <div class="form-group">
                <label class="form-label">ที่อยู่จัดส่ง</label>
                <textarea class="form-textarea" placeholder="กรอกที่อยู่จัดส่ง..."></textarea>
            </div>
            
            <div class="form-group">
                <label class="form-label">เบอร์โทรศัพท์</label>
                <input type="tel" class="form-input" placeholder="0812345678">
            </div>
            
            <div style="background: var(--bg-glass); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.5rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span style="color: var(--text-muted);">ยอดรวมสินค้า:</span>
                    <span style="color: var(--text-primary);">${total.toLocaleString()} ฿</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span style="color: var(--text-muted);">ค่าจัดส่ง:</span>
                    <span style="color: var(--text-primary);">ฟรี</span>
                </div>
                <div style="border-top: 1px solid var(--border-color); padding-top: 0.5rem; margin-top: 0.5rem; display: flex; justify-content: space-between;">
                    <span style="color: var(--text-primary); font-weight: 600;">ยอดชำระทั้งหมด:</span>
                    <span style="color: var(--secondary); font-size: 1.5rem; font-weight: 700;">${total.toLocaleString()} ฿</span>
                </div>
            </div>
            
            <button class="btn-primary" style="width: 100%;" onclick="confirmCheckout()">ยืนยันการสั่งซื้อ</button>
        </div>
    `;

    createModal('ชำระเงิน', content);
};

window.confirmCheckout = function () {
    // Clear cart
    AppState.cart = [];
    AppState.saveToLocalStorage();
    updateCartBadge();

    closeModal();
    showNotification('สั่งซื้อสำเร็จ! ขอบคุณที่ใช้บริการ', 'success');
};
