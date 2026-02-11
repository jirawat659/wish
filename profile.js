// ==================== Create Profile Page ====================
window.createProfilePage = function (pageElement) {
    if (!AppState.currentUser) {
        pageElement.innerHTML = `
            <div class="container" style="padding: 3rem 1.5rem; text-align: center;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">🔒</div>
                <h2 style="color: var(--primary-light); margin-bottom: 1rem;">กรุณาเข้าสู่ระบบ</h2>
                <p style="color: var(--text-secondary); margin-bottom: 2rem;">คุณต้องเข้าสู่ระบบก่อนเพื่อดูโปรไฟล์</p>
                <button class="btn-primary" onclick="showLoginModal()">เข้าสู่ระบบ</button>
            </div>
        `;
        return;
    }

    if (AppState.currentUser.userType === 'fortuneTeller') {
        createFortuneTellerDashboard(pageElement);
    } else {
        createUserProfile(pageElement);
    }
};

function createUserProfile(pageElement) {
    const user = AppState.currentUser;
    const bookings = AppState.bookings;
    const history = AppState.fortuneHistory.slice(0, 5);

    pageElement.innerHTML = `
        <div class="container" style="padding: 3rem 1.5rem;">
            <h1 class="section-title">โปรไฟล์</h1>
            
            <!-- User Info Card -->
            <div style="background: var(--bg-glass); backdrop-filter: blur(10px); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 2rem; margin-bottom: 2rem; max-width: 800px; margin-left: auto; margin-right: auto;">
                <div style="display: flex; align-items: center; gap: 1.5rem; margin-bottom: 1.5rem;">
                    <div style="font-size: 4rem;">👤</div>
                    <div style="flex: 1;">
                        <h2 style="color: var(--primary-light); margin-bottom: 0.5rem;">${user.name}</h2>
                        <p style="color: var(--text-secondary); margin-bottom: 0.5rem;">${user.email}</p>
                        ${user.isPremium ? '<span class="premium-badge">PREMIUM</span>' : '<span style="color: var(--text-muted);">สมาชิกทั่วไป</span>'}
                    </div>
                </div>
                
                ${!user.isPremium ? `
                    <div style="background: linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2)); border: 1px solid var(--primary); border-radius: var(--radius-md); padding: 1.5rem; margin-bottom: 1rem;">
                        <h3 style="color: var(--primary-light); margin-bottom: 0.5rem; font-size: 1.125rem;">อัพเกรดเป็นพรีเมียม</h3>
                        <p style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 1rem;">รับสิทธิพิเศษและดูดวงแบบละเอียดทุกวัน</p>
                        <button class="btn-primary" style="background: linear-gradient(135deg, var(--secondary), var(--secondary-dark));" onclick="upgradeToPremium()">อัพเกรดเลย 299 บาท/เดือน</button>
                    </div>
                ` : ''}
            </div>
            
            <!-- Bookings Section -->
            <div style="max-width: 800px; margin-left: auto; margin-right: auto; margin-bottom: 2rem;">
                <h2 style="color: var(--primary-light); margin-bottom: 1.5rem;">การจองของคุณ</h2>
                ${bookings.length === 0 ? `
                    <div style="background: var(--bg-glass); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 2rem; text-align: center;">
                        <div style="font-size: 3rem; margin-bottom: 0.5rem;">📅</div>
                        <p style="color: var(--text-secondary);">ยังไม่มีการจอง</p>
                    </div>
                ` : `
                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        ${bookings.map(booking => `
                            <div style="background: var(--bg-glass); backdrop-filter: blur(10px); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 1.5rem;">
                                <div style="display: flex; gap: 1rem; align-items: start;">
                                    <div style="font-size: 3rem;">${booking.fortuneTellerAvatar}</div>
                                    <div style="flex: 1;">
                                        <h3 style="color: var(--primary-light); margin-bottom: 0.25rem;">${booking.fortuneTellerName}</h3>
                                        <p style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 0.5rem;">
                                            📅 ${new Date(booking.date).toLocaleDateString('th-TH', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                        </p>
                                        <p style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 0.5rem;">
                                            🕐 ${booking.time} น. | ${booking.type === 'chat' ? '💬 แชท' : '📹 วิดีโอคอล'}
                                        </p>
                                        <p style="color: var(--secondary); font-weight: 600;">${booking.price.toLocaleString()} บาท</p>
                                    </div>
                                    <button class="btn-primary" onclick="joinConsultation(${booking.id})">เข้าห้องปรึกษา</button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `}
            </div>
            
            <!-- Fortune History Section -->
            ${user.isPremium ? `
                <div style="max-width: 800px; margin-left: auto; margin-right: auto;">
                    <h2 style="color: var(--primary-light); margin-bottom: 1.5rem;">ประวัติการดูดวง</h2>
                    ${history.length === 0 ? `
                        <div style="background: var(--bg-glass); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 2rem; text-align: center;">
                            <div style="font-size: 3rem; margin-bottom: 0.5rem;">🔮</div>
                            <p style="color: var(--text-secondary);">ยังไม่มีประวัติการดูดวง</p>
                        </div>
                    ` : `
                        <div style="display: flex; flex-direction: column; gap: 1rem;">
                            ${history.map(item => `
                                <div style="background: var(--bg-glass); backdrop-filter: blur(10px); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 1.5rem;">
                                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                                        <div>
                                            <h4 style="color: var(--primary-light); margin-bottom: 0.25rem;">${item.category}</h4>
                                            <p style="color: var(--text-muted); font-size: 0.875rem;">${new Date(item.date).toLocaleDateString('th-TH')}</p>
                                        </div>
                                        <span style="background: var(--bg-secondary); padding: 0.25rem 0.75rem; border-radius: var(--radius-sm); font-size: 0.75rem; color: var(--text-secondary);">${item.type === 'premium' ? 'PREMIUM' : 'FREE'}</span>
                                    </div>
                                    <p style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 0.5rem; font-weight: 500;">${item.question}</p>
                                    <p style="color: var(--text-secondary); font-size: 0.875rem; line-height: 1.6;">${item.prediction}</p>
                                </div>
                            `).join('')}
                        </div>
                    `}
                </div>
            ` : ''}
        </div>
    `;
}

function createFortuneTellerDashboard(pageElement) {
    const user = AppState.currentUser;
    const myProfile = fortuneTellers.find(ft => ft.name === user.name) || fortuneTellers[0];

    // Get bookings for this fortune teller
    const myBookings = AppState.bookings.filter(b => b.fortuneTellerId === myProfile.id);
    const todayBookings = myBookings.filter(b => {
        const bookingDate = new Date(b.date);
        const today = new Date();
        return bookingDate.toDateString() === today.toDateString();
    });

    const monthlyEarnings = myBookings.reduce((sum, b) => sum + b.price, 0);

    pageElement.innerHTML = `
        <div class="container" style="padding: 3rem 1.5rem;">
            <h1 class="section-title">แดชบอร์ดหมอดู</h1>
            
            <!-- Profile Card -->
            <div style="background: var(--bg-glass); backdrop-filter: blur(10px); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 2rem; margin-bottom: 2rem; max-width: 800px; margin-left: auto; margin-right: auto;">
                <div style="display: flex; align-items: center; gap: 1.5rem; margin-bottom: 1.5rem;">
                    <div style="font-size: 4rem;">${myProfile.avatar}</div>
                    <div style="flex: 1;">
                        <h2 style="color: var(--primary-light); margin-bottom: 0.5rem;">${user.name}</h2>
                        <p style="color: var(--text-secondary); margin-bottom: 0.5rem;">${myProfile.specialty}</p>
                        <div style="display: flex; gap: 1rem; align-items: center;">
                            <span style="color: var(--secondary);">⭐ ${myProfile.rating}</span>
                            <span style="color: var(--text-muted);">${myProfile.reviews} รีวิว</span>
                        </div>
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem;">
                    <div style="background: var(--bg-secondary); border-radius: var(--radius-md); padding: 1rem; text-align: center;">
                        <div style="color: var(--secondary); font-size: 2rem; font-weight: 700;">${todayBookings.length}</div>
                        <div style="color: var(--text-muted); font-size: 0.875rem;">นัดวันนี้</div>
                    </div>
                    <div style="background: var(--bg-secondary); border-radius: var(--radius-md); padding: 1rem; text-align: center;">
                        <div style="color: var(--secondary); font-size: 2rem; font-weight: 700;">${myBookings.length}</div>
                        <div style="color: var(--text-muted); font-size: 0.875rem;">นัดทั้งหมด</div>
                    </div>
                    <div style="background: var(--bg-secondary); border-radius: var(--radius-md); padding: 1rem; text-align: center;">
                        <div style="color: var(--secondary); font-size: 1.5rem; font-weight: 700;">${monthlyEarnings.toLocaleString()}</div>
                        <div style="color: var(--text-muted); font-size: 0.875rem;">รายได้ (บาท)</div>
                    </div>
                </div>
            </div>
            
            <!-- Upcoming Appointments -->
            <div style="max-width: 800px; margin-left: auto; margin-right: auto;">
                <h2 style="color: var(--primary-light); margin-bottom: 1.5rem;">นัดหมายที่กำลังจะมาถึง</h2>
                ${myBookings.length === 0 ? `
                    <div style="background: var(--bg-glass); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 2rem; text-align: center;">
                        <div style="font-size: 3rem; margin-bottom: 0.5rem;">📅</div>
                        <p style="color: var(--text-secondary);">ยังไม่มีนัดหมาย</p>
                    </div>
                ` : `
                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        ${myBookings.map(booking => {
        const userData = { name: 'ลูกค้า' }; // In real app, would fetch from user data
        return `
                                <div style="background: var(--bg-glass); backdrop-filter: blur(10px); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 1.5rem;">
                                    <div style="display: flex; gap: 1rem; justify-content: space-between; align-items: start;">
                                        <div style="flex: 1;">
                                            <h3 style="color: var(--primary-light); margin-bottom: 0.25rem;">นัดกับลูกค้า</h3>
                                            <p style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 0.5rem;">
                                                📅 ${new Date(booking.date).toLocaleDateString('th-TH', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                            </p>
                                            <p style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 0.5rem;">
                                                🕐 ${booking.time} น. | ${booking.type === 'chat' ? '💬 แชท' : '📹 วิดีโอคอล'}
                                            </p>
                                            <p style="color: var(--secondary); font-weight: 600;">${booking.price.toLocaleString()} บาท</p>
                                        </div>
                                        <span style="background: #10b981; color: white; padding: 0.5rem 1rem; border-radius: var(--radius-sm); font-size: 0.875rem; font-weight: 600;">ยืนยันแล้ว</span>
                                    </div>
                                </div>
                            `;
    }).join('')}
                    </div>
                `}
            </div>
        </div>
    `;
}
