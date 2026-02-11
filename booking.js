// ==================== Fortune Tellers Data ====================
const fortuneTellers = [
    {
        id: 1,
        name: 'อาจารย์ศิริ',
        specialty: 'ไพ่ทาโรต์',
        rating: 4.9,
        reviews: 156,
        price: 500,
        experience: '15 ปี',
        description: 'ผู้เชี่ยวชาญด้านไพ่ทาโรต์ มีประสบการณ์กว่า 15 ปี ให้คำปรึกษาด้านความรัก การงาน และการเงิน',
        avatar: '👨‍🦳',
        available: true
    },
    {
        id: 2,
        name: 'หมอดูแม่นางนวล',
        specialty: 'โหราศาสตร์ไทย',
        rating: 4.8,
        reviews: 203,
        price: 450,
        experience: '20 ปี',
        description: 'ถ่ายทอดภูมิปัญญาไทย ดูดวงแบบดั้งเดิม แม่นยำสูง เชี่ยวชาญด้านโหราศาสตร์',
        avatar: '👵',
        available: true
    },
    {
        id: 3,
        name: 'อาจารย์วิชัย',
        specialty: 'ฮวงจุ้ย',
        rating: 4.7,
        reviews: 98,
        price: 600,
        experience: '12 ปี',
        description: 'ผู้เชี่ยวชาญด้านฮวงจุ้ยและดูบ้านดูที่ ให้คำแนะนำการจัดบ้านเพื่อโชคลาภ',
        avatar: '👨‍💼',
        available: true
    },
    {
        id: 4,
        name: 'อาจารย์พรทิพย์',
        specialty: 'ไพ่ยิปซี',
        rating: 4.9,
        reviews: 187,
        price: 550,
        experience: '18 ปี',
        description: 'เชี่ยวชาญไพ่ยิปซีและพรีดิกชันอนาคต คำทำนายแม่นยำและละเอียดลึกซึ้ง',
        avatar: '👩‍🦰',
        available: true
    },
    {
        id: 5,
        name: 'หมอดูเก๋สมชาย',
        specialty: 'ดูดวงทั่วไป',
        rating: 4.6,
        reviews: 142,
        price: 400,
        experience: '25 ปี',
        description: 'ประสบการณ์ยาวนาน ดูดวงหลากหลายแขนง ให้คำปรึกษาทุกเรื่องที่คุณกังวล',
        avatar: '👴',
        available: true
    },
    {
        id: 6,
        name: 'อาจารย์จันทร์',
        specialty: 'ดาราศาสตร์',
        rating: 4.8,
        reviews: 164,
        price: 500,
        experience: '10 ปี',
        description: 'ผสมผสานศาสตร์ดาราศาสตร์กับโหราศาสตร์ วิเคราะห์ดวงชะตาจากดวงดาว',
        avatar: '🧑‍🔬',
        available: true
    },
    {
        id: 7,
        name: 'อาจารย์สมหญิง',
        specialty: 'ดูลายมือ',
        rating: 4.7,
        reviews: 215,
        price: 480,
        experience: '22 ปี',
        description: 'ผู้เชี่ยวชาญด้านการดูลายมือ บอกชะตาชีวิตจากฝ่ามือของคุณได้อย่างแม่นยำ',
        avatar: '👩‍🦱',
        available: true
    },
    {
        id: 8,
        name: 'อาจารย์ประสิทธิ์',
        specialty: 'เลขศาสตร์',
        rating: 4.9,
        reviews: 178,
        price: 520,
        experience: '16 ปี',
        description: 'นักเลขศาสตร์ผู้เชี่ยวชาญ วิเคราะห์ชีวิตและโชคชะตาจากตัวเลข ให้คำแนะนำเลขมงคล',
        avatar: '👨‍🏫',
        available: true
    },
    {
        id: 9,
        name: 'หมอดูแม่ประนอม',
        specialty: 'ดูหน้า',
        rating: 4.6,
        reviews: 192,
        price: 450,
        experience: '30 ปี',
        description: 'ถ่ายทอดภูมิปัญญาการดูใบหน้า บอกนิสัยและชะตาชีวิตจากรูปหน้า',
        avatar: '👵🏻',
        available: true
    },
    {
        id: 10,
        name: 'อาจารย์เกษม',
        specialty: 'หยี่กี๋',
        rating: 4.8,
        reviews: 134,
        price: 580,
        experience: '14 ปี',
        description: 'ผู้เชี่ยวชาญไม้หยี่กี๋จีน ทำนายเหตุการณ์และแนะแนวทางแก้ไขปัญหา',
        avatar: '👨‍🦲',
        available: true
    },
    {
        id: 11,
        name: 'อาจารย์กัญญา',
        specialty: 'ทำนายฝัน',
        rating: 4.7,
        reviews: 167,
        price: 420,
        experience: '13 ปี',
        description: 'ผู้เชี่ยวชาญด้านการแปลความหมายของฝัน บอกสัญญาณและเตือนล่วงหน้า',
        avatar: '👩‍💼',
        available: true
    },
    {
        id: 12,
        name: 'อาจารย์วีระ',
        specialty: 'ดูออร่า',
        rating: 4.9,
        reviews: 201,
        price: 600,
        experience: '11 ปี',
        description: 'นักพลังงานที่สามารถมองเห็นและอ่านออร่าของคุณได้ ให้คำแนะนำชีวิตและการเยียวยา',
        avatar: '🧙‍♂️',
        available: true
    }
];

// ==================== Create Fortune Tellers Page ====================
window.createFortuneTellersPage = function (pageElement) {
    pageElement.innerHTML = `
        <div class="container" style="padding: 3rem 1.5rem;">
            <h1 class="section-title">หมอดูมืออาชีพ</h1>
            <p style="text-align: center; color: var(--text-secondary); margin-bottom: 2rem;">เลือกหมอดูที่ใช่สำหรับคุณ</p>
            
            <!-- Search and Filter -->
            <div style="max-width: 600px; margin: 0 auto 3rem;">
                <div class="form-group">
                    <input type="text" class="form-input" id="searchFortuneTeller" placeholder="ค้นหาหมอดู...">
                </div>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center;">
                    <button class="btn-secondary" onclick="filterBySpecialty('all')">ทั้งหมด</button>
                    <button class="btn-secondary" onclick="filterBySpecialty('ไพ่ทาโรต์')">ไพ่ทาโรต์</button>
                    <button class="btn-secondary" onclick="filterBySpecialty('โหราศาสตร์ไทย')">โหราศาสตร์</button>
                    <button class="btn-secondary" onclick="filterBySpecialty('ฮวงจุ้ย')">ฮวงจุ้ย</button>
                </div>
            </div>
            
            <!-- Fortune Tellers Grid -->
            <div id="fortuneTellersGrid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 2rem;">
                ${fortuneTellers.map(ft => createFortuneTellerCard(ft)).join('')}
            </div>
        </div>
    `;

    // Add search functionality
    document.getElementById('searchFortuneTeller').addEventListener('input', (e) => {
        filterFortuneTellers(e.target.value);
    });
};

function createFortuneTellerCard(fortuneTeller) {
    return `
        <div class="fortune-teller-card" data-specialty="${fortuneTeller.specialty}" style="background: var(--bg-glass); backdrop-filter: blur(10px); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 1.5rem; transition: var(--transition); cursor: pointer;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='var(--shadow-glow)'" onmouseout="this.style.transform=''; this.style.boxShadow=''">
            <div style="text-align: center; margin-bottom: 1rem;">
                <div style="font-size: 4rem; margin-bottom: 0.5rem;">${fortuneTeller.avatar}</div>
                <h3 style="color: var(--primary-light); margin-bottom: 0.25rem;">${fortuneTeller.name}</h3>
                <p style="color: var(--text-muted); font-size: 0.875rem; margin-bottom: 0.5rem;">${fortuneTeller.specialty}</p>
                <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                    <span style="color: var(--secondary);">⭐ ${fortuneTeller.rating}</span>
                    <span style="color: var(--text-muted); font-size: 0.875rem;">(${fortuneTeller.reviews} รีวิว)</span>
                </div>
                <p style="color: var(--text-secondary); font-size: 0.875rem;">ประสบการณ์ ${fortuneTeller.experience}</p>
            </div>
            <p style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 1rem; line-height: 1.6;">${fortuneTeller.description}</p>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <span style="color: var(--secondary); font-size: 1.25rem; font-weight: 700;">${fortuneTeller.price} บาท</span>
                ${fortuneTeller.available ? '<span style="color: #10b981; font-size: 0.875rem;">● ว่าง</span>' : '<span style="color: #ef4444; font-size: 0.875rem;">● ไม่ว่าง</span>'}
            </div>
            <button class="btn-primary" style="width: 100%;" onclick="showFortuneTellerDetail(${fortuneTeller.id})">ดูรายละเอียด & จอง</button>
        </div>
    `;
}

function filterFortuneTellers(searchTerm) {
    const cards = document.querySelectorAll('.fortune-teller-card');
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(searchTerm.toLowerCase())) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

window.filterBySpecialty = function (specialty) {
    const cards = document.querySelectorAll('.fortune-teller-card');
    cards.forEach(card => {
        if (specialty === 'all' || card.dataset.specialty === specialty) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
};

// ==================== Fortune Teller Detail & Booking ====================
window.showFortuneTellerDetail = function (id) {
    const ft = fortuneTellers.find(f => f.id === id);

    const content = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <div style="font-size: 5rem; margin-bottom: 1rem;">${ft.avatar}</div>
            <h2 style="color: var(--primary-light); margin-bottom: 0.5rem;">${ft.name}</h2>
            <p style="color: var(--text-secondary);">${ft.specialty}</p>
            <div style="display: flex; align-items: center; justify-content: center; gap: 1rem; margin: 1rem 0;">
                <span style="color: var(--secondary);">⭐ ${ft.rating}</span>
                <span style="color: var(--text-muted);">${ft.reviews} รีวิว</span>
                <span style="color: var(--secondary); font-size: 1.25rem; font-weight: 700;">${ft.price} บาท</span>
            </div>
        </div>
        
        <div style="background: var(--bg-glass); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; margin-bottom: 1.5rem;">
            <h4 style="color: var(--primary-light); margin-bottom: 0.5rem;">เกี่ยวกับ</h4>
            <p style="color: var(--text-secondary); line-height: 1.6;">${ft.description}</p>
            <p style="color: var(--text-muted); margin-top: 0.5rem;">ประสบการณ์: ${ft.experience}</p>
        </div>
        
        <div style="background: var(--bg-glass); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; margin-bottom: 2rem;">
            <h4 style="color: var(--primary-light); margin-bottom: 1rem;">รีวิวจากลูกค้า</h4>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
                <div style="padding: 0.75rem; background: var(--bg-dark); border-radius: var(--radius-sm);">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                        <span style="color: var(--text-primary); font-weight: 600;">คุณสมชาย</span>
                        <span style="color: var(--secondary);">⭐⭐⭐⭐⭐</span>
                    </div>
                    <p style="color: var(--text-secondary); font-size: 0.875rem;">แม่นมากครับ คำทำนายตรงกับชีวิตจริง ให้คำแนะนำดีมาก</p>
                </div>
                <div style="padding: 0.75rem; background: var(--bg-dark); border-radius: var(--radius-sm);">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                        <span style="color: var(--text-primary); font-weight: 600;">คุณนิดา</span>
                        <span style="color: var(--secondary);">⭐⭐⭐⭐⭐</span>
                    </div>
                    <p style="color: var(--text-secondary); font-size: 0.875rem;">บริการดีมาก ให้คำปรึกษาอย่างละเอียดและใส่ใจ แนะนำเลยค่ะ</p>
                </div>
            </div>
        </div>
        
        <button class="btn-primary" style="width: 100%;" onclick="startBooking(${ft.id})">จองเลย</button>
    `;

    createModal(`${ft.name}`, content);
};

// ==================== Booking Process ====================
window.startBooking = function (fortuneTellerId) {
    if (!AppState.currentUser) {
        closeModal();
        setTimeout(() => {
            showNotification('กรุณาเข้าสู่ระบบก่อนจองนัดหมาย', 'error');
            showLoginModal();
        }, 300);
        return;
    }

    const ft = fortuneTellers.find(f => f.id === fortuneTellerId);

    // Generate available dates (next 14 days)
    const dates = [];
    for (let i = 1; i <= 14; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        dates.push(date);
    }

    const content = `
        <div id="bookingStep1">
            <h3 style="color: var(--primary-light); text-align: center; margin-bottom: 1.5rem;">เลือกวันที่และเวลา</h3>
            
            <div class="form-group">
                <label class="form-label">วันที่</label>
                <select class="form-select" id="bookingDate">
                    ${dates.map(d => `
                        <option value="${d.toISOString()}">${d.toLocaleDateString('th-TH', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</option>
                    `).join('')}
                </select>
            </div>
            
            <div class="form-group">
                <label class="form-label">เวลา</label>
                <select class="form-select" id="bookingTime">
                    <option value="09:00">09:00 น.</option>
                    <option value="10:00">10:00 น.</option>
                    <option value="11:00">11:00 น.</option>
                    <option value="13:00">13:00 น.</option>
                    <option value="14:00">14:00 น.</option>
                    <option value="15:00">15:00 น.</option>
                    <option value="16:00">16:00 น.</option>
                    <option value="17:00">17:00 น.</option>
                    <option value="18:00">18:00 น.</option>
                    <option value="19:00">19:00 น.</option>
                    <option value="20:00">20:00 น.</option>
                </select>
            </div>
            
            <div class="form-group">
                <label class="form-label">ประเภทการปรึกษา</label>
                <select class="form-select" id="consultationType">
                    <option value="chat">💬 แชท</option>
                    <option value="video">📹 วิดีโอคอล</option>
                </select>
            </div>
            
            <button class="btn-primary" style="width: 100%;" onclick="confirmBooking(${fortuneTellerId})">ยืนยันการจอง</button>
        </div>
    `;

    createModal(`จอง${ft.name}`, content);
};

window.confirmBooking = function (fortuneTellerId) {
    const ft = fortuneTellers.find(f => f.id === fortuneTellerId);
    const date = document.getElementById('bookingDate').value;
    const time = document.getElementById('bookingTime').value;
    const type = document.getElementById('consultationType').value;

    const discount = AppState.currentUser.isPremium ? 0.1 : 0;
    const finalPrice = ft.price * (1 - discount);

    const booking = {
        id: Date.now(),
        fortuneTellerId: ft.id,
        fortuneTellerName: ft.name,
        fortuneTellerAvatar: ft.avatar,
        date: new Date(date),
        time: time,
        type: type,
        price: finalPrice,
        status: 'confirmed',
        createdAt: new Date().toISOString()
    };

    AppState.bookings.push(booking);
    AppState.saveToLocalStorage();

    closeModal();
    showNotification('จองนัดหมายสำเร็จ!', 'success');

    // Show booking summary
    setTimeout(() => {
        const content = `
            <div style="text-align: center;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">✅</div>
                <h3 style="color: var(--primary-light); margin-bottom: 1.5rem;">จองสำเร็จ!</h3>
                
                <div style="background: var(--bg-glass); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; text-align: left; margin-bottom: 1.5rem;">
                    <div style="margin-bottom: 1rem;">
                        <span style="color: var(--text-muted);">หมอดู:</span>
                        <span style="color: var(--text-primary); font-weight: 600; margin-left: 0.5rem;">${ft.name}</span>
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <span style="color: var(--text-muted);">วันที่:</span>
                        <span style="color: var(--text-primary); margin-left: 0.5rem;">${new Date(date).toLocaleDateString('th-TH', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <span style="color: var(--text-muted);">เวลา:</span>
                        <span style="color: var(--text-primary); margin-left: 0.5rem;">${time} น.</span>
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <span style="color: var(--text-muted);">ประเภท:</span>
                        <span style="color: var(--text-primary); margin-left: 0.5rem;">${type === 'chat' ? '💬 แชท' : '📹 วิดีโอคอล'}</span>
                    </div>
                    ${discount > 0 ? `
                        <div style="margin-bottom: 1rem;">
                            <span style="color: var(--text-muted);">ส่วนลดสมาชิก:</span>
                            <span style="color: var(--secondary); margin-left: 0.5rem;">-${discount * 100}%</span>
                        </div>
                    ` : ''}
                    <div style="border-top: 1px solid var(--border-color); padding-top: 1rem; margin-top: 1rem;">
                        <span style="color: var(--text-muted);">ราคารวม:</span>
                        <span style="color: var(--secondary); font-size: 1.5rem; font-weight: 700; margin-left: 0.5rem;">${finalPrice} บาท</span>
                    </div>
                </div>
                
                <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">คุณสามารถเข้าห้องปรึกษาได้จากหน้าโปรไฟล์</p>
                
                <button class="btn-primary" style="width: 100%;" onclick="closeModal(); navigateToPage('profile')">ไปที่โปรไฟล์</button>
            </div>
        `;
        createModal('ยืนยันการจอง', content);
    }, 500);
};

// ==================== Consultation Room ====================
window.joinConsultation = function (bookingId) {
    const booking = AppState.bookings.find(b => b.id === bookingId);
    if (!booking) return;

    if (booking.type === 'chat') {
        showChatRoom(booking);
    } else {
        showVideoRoom(booking);
    }
};

function showChatRoom(booking) {
    const messages = JSON.parse(localStorage.getItem(`chat_${booking.id}`) || '[]');

    const content = `
        <div style="display: flex; flex-direction: column; height: 500px;">
            <div style="padding: 1rem; background: var(--bg-glass); border-bottom: 1px solid var(--border-color); display: flex; align-items: center; gap: 1rem;">
                <div style="font-size: 2rem;">${booking.fortuneTellerAvatar}</div>
                <div>
                    <div style="color: var(--text-primary); font-weight: 600;">${booking.fortuneTellerName}</div>
                    <div style="color: #10b981; font-size: 0.875rem;">● ออนไลน์</div>
                </div>
            </div>
            
            <div id="chatMessages" style="flex: 1; overflow-y: auto; padding: 1rem; display: flex; flex-direction: column; gap: 1rem;">
                ${messages.map(m => `
                    <div style="display: flex; justify-content: ${m.sender === 'user' ? 'flex-end' : 'flex-start'};">
                        <div style="background: ${m.sender === 'user' ? 'var(--primary)' : 'var(--bg-glass)'}; padding: 0.75rem 1rem; border-radius: var(--radius-md); max-width: 70%;">
                            <p style="color: var(--text-primary); margin: 0;">${m.message}</p>
                            <span style="color: var(--text-muted); font-size: 0.75rem;">${new Date(m.timestamp).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div style="padding: 1rem; background: var(--bg-glass); border-top: 1px solid var(--border-color);">
                <form id="chatForm" style="display: flex; gap: 0.5rem;">
                    <input type="text" id="chatInput" class="form-input" placeholder="พิมพ์ข้อความ..." style="flex: 1;" required>
                    <button type="submit" class="btn-primary">ส่ง</button>
                </form>
            </div>
        </div>
    `;

    const modal = createModal(`แชทกับ ${booking.fortuneTellerName}`, content);

    document.getElementById('chatForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('chatInput');
        const message = input.value.trim();
        if (!message) return;

        const newMessage = {
            sender: 'user',
            message: message,
            timestamp: new Date().toISOString()
        };

        messages.push(newMessage);
        localStorage.setItem(`chat_${booking.id}`, JSON.stringify(messages));

        // Add message to UI
        const messagesContainer = document.getElementById('chatMessages');
        messagesContainer.innerHTML += `
            <div style="display: flex; justify-content: flex-end;">
                <div style="background: var(--primary); padding: 0.75rem 1rem; border-radius: var(--radius-md); max-width: 70%;">
                    <p style="color: var(--text-primary); margin: 0;">${message}</p>
                    <span style="color: var(--text-muted); font-size: 0.75rem;">${new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
            </div>
        `;

        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        input.value = '';

        // Simulate fortune teller response
        setTimeout(() => {
            const responses = [
                'ขอบคุณที่เล่าให้ฟังนะคะ ให้ฉันดูดวงให้สักครู่',
                'จากที่คุณบอกมา ฉันเห็นว่าคุณกำลังเผชิญกับความท้าทาย แต่อย่ากังวลไป',
                'ดวงดาวบอกว่าช่วงนี้คุณต้องใจเย็นๆ และใช้สติปัญญาในการตัดสินใจ',
                'คำทำนายของคุณค่อนข้างชัดเจน ให้ฉันอธิบายให้ฟังนะคะ'
            ];
            const ftMessage = {
                sender: 'fortuneTeller',
                message: responses[Math.floor(Math.random() * responses.length)],
                timestamp: new Date().toISOString()
            };

            messages.push(ftMessage);
            localStorage.setItem(`chat_${booking.id}`, JSON.stringify(messages));

            messagesContainer.innerHTML += `
                <div style="display: flex; justify-content: flex-start;">
                    <div style="background: var(--bg-glass); padding: 0.75rem 1rem; border-radius: var(--radius-md); max-width: 70%;">
                        <p style="color: var(--text-primary); margin: 0;">${ftMessage.message}</p>
                        <span style="color: var(--text-muted); font-size: 0.75rem;">${new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                </div>
            `;
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 2000);
    });
}

function showVideoRoom(booking) {
    const content = `
        <div style="text-align: center;">
            <div style="background: var(--bg-dark); border-radius: var(--radius-md); padding: 3rem 2rem; margin-bottom: 1.5rem; position: relative;">
                <div style="font-size: 6rem; margin-bottom: 1rem;">${booking.fortuneTellerAvatar}</div>
                <h3 style="color: var(--primary-light); margin-bottom: 0.5rem;">${booking.fortuneTellerName}</h3>
                <div style="color: #10b981; font-size: 0.875rem; margin-bottom: 1rem;">● กำลังเชื่อมต่อ...</div>
                <div style="position: absolute; top: 1rem; right: 1rem; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0.5rem; width: 150px; height: 100px; display: flex; align-items: center; justify-content: center;">
                    <span style="color: var(--text-muted); font-size: 0.875rem;">คุณ (กล้องปิด)</span>
                </div>
            </div>
            
            <div style="display: flex; gap: 1rem; justify-content: center; margin-bottom: 1rem;">
                <button class="btn-icon" title="ปิด/เปิดไมค์" style="font-size: 1.5rem;">🎤</button>
                <button class="btn-icon" title="ปิด/เปิดกล้อง" style="font-size: 1.5rem;">📹</button>
                <button class="btn-icon" style="background: #ef4444; font-size: 1.5rem;" onclick="closeModal()" title="วางสาย">📞</button>
            </div>
            
            <p style="color: var(--text-muted); font-size: 0.875rem;">นี่คือ UI สาธิต สำหรับการใช้งานจริงต้องผสานระบบ WebRTC</p>
        </div>
    `;

    createModal(`วิดีโอคอลกับ ${booking.fortuneTellerName}`, content);
}
