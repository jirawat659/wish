// ==================== Chatbot Data ====================
const chatbotData = {
    greetings: [
        'สวัสดีค่ะ ฉันคือ AI ผู้ช่วยดูดวง 🔮',
        'ยินดีต้อนรับค่ะ มีอะไรให้ช่วยเหลือไหมคะ?'
    ],
    quickQuestions: [
        { text: 'ดวงความรักวันนี้', category: 'love' },
        { text: 'ดวงการงานของฉัน', category: 'career' },
        { text: 'เลขมงคลวันนี้', category: 'lucky' },
        { text: 'สีมงคลของฉัน', category: 'lucky' },
        { text: 'ทิศมงคลวันนี้', category: 'lucky' }
    ],
    responses: {
        love: [
            'ดวงความรักของคุณในวันนี้ค่อนข้างดี มีโอกาสพบเจอคนที่ใช่ หากคุณโสด ลองเปิดใจรับคนใหม่ หากมีคู่แล้ว วันนี้เหมาะกับการใช้เวลาร่วมกัน 💗',
            'ช่วงนี้ความรักของคุณกำลังอยู่ในช่วงทดสอบ อย่ารีบร้อนตัดสินใจ ใช้เวลาทำความเข้าใจกัน การสื่อสารที่ดีจะช่วยให้ความสัมพันธ์แน่นแฟ้นขึ้น 💕',
            'ดาวดวงความรักส่องสว่าง! ถ้าคุณกำลังรอคอยใครบางคน เร็วๆ นี้เธออาจจะแสดงความในใจออกมา จงมั่นใจในเสน่ห์ของตัวเอง 💖'
        ],
        career: [
            'ดวงการงานของคุณกำลังขึ้น มีโอกาสได้รับมอบหมายงานสำคัญ อย่ากลัวที่จะรับความท้าทาย เพราะนี่คือโอกาสที่จะพิสูจน์ตัวเอง 💼',
            'ช่วงนี้ต้องใช้ความอดทนในการทำงาน อาจมีอุปสรรคบ้าง แต่อย่าท้อแท้ เพราะหลังฝนย่อมมีรุ้ง ความสำเร็จกำลังรอคุณอยู่ 🌟',
            'การงานราบรื่น คนรอบข้างให้ความร่วมมือดี เหมาะกับการเริ่มโปรเจกต์ใหม่หรือขยายธุรกิจ โชคลาภด้านการเงินจากการทำงานกำลังมา 💰'
        ],
        lucky: [
            'เลขมงคลของคุณวันนี้คือ 3, 7, 9 ลองใช้เลขเหล่านี้ในการตัดสินใจสำคัญดูนะคะ 🎲',
            'สีมงคลของคุณวันนี้คือสีม่วงและสีทอง สวมใส่หรือใช้สีเหล่านี้จะช่วยเสริมดวง ✨',
            'ทิศมงคลของคุณวันนี้คือทิศตะวันออก การเดินทางหรือนั่งหันไปทิศนี้จะนำโชคมาให้ 🧭',
            'วันนี้เป็นวันมงคลของคุณ เหมาะกับการทำธุระสำคัญ ลงทุน หรือเริ่มต้นสิ่งใหม่ๆ 🍀',
            'หินมงคลของคุณคือคริสตัลสีม่วง (Amethyst) ช่วยเสริมความสงบและปัญญา 💎'
        ],
        general: [
            'วันนี้เป็นวันที่ดีของคุณ พลังงานบวกล้อมรอบ เชื่อมั่นในตัวเองและก้าวไปข้างหน้า 🌈',
            'ดวงดาวบอกว่าคุณควรฟังเสียงจากหัวใจ สิ่งที่คุณรู้สึกอยู่ในใจนั้นมักจะถูกต้อง 🔮',
            'ช่วงนี้เหมาะกับการพักผ่อนและชาร์จพลัง อย่าลืมดูแลสุขภาพกายและใจของคุณ 🧘',
            'โอกาสดีกำลังจะมาถึง เตรียมตัวให้พร้อมและจับโอกาสเมื่อมันมาถึง ⭐'
        ],
        help: [
            'ฉันสามารถช่วยคุณเรื่องดวงความรัก การงาน การเงิน และให้เลข สี ทิศมงคลได้ค่ะ ลองคลิกคำถามด่วนด้านล่างได้เลย! 😊',
            'คุณสามารถถามฉันเกี่ยวกับ:<br>• ดวงความรัก<br>• ดวงการงาน<br>• การเงิน<br>• เลข สี ทิศมงคล<br>หรือคลิกปุ่มคำถามด่วนได้เลยค่ะ 💫'
        ]
    }
};

let chatHistory = [];
let chatbotOpen = false;

// ==================== Create Chatbot Page ====================
window.createChatbotPage = function (pageElement) {
    pageElement.innerHTML = `
        <div class="container" style="padding: 3rem 1.5rem;">
            <h1 class="section-title">ปรึกษา AI ดูดวง</h1>
            <p style="text-align: center; color: var(--text-secondary); margin-bottom: 3rem;">AI ผู้ช่วยให้คำปรึกษาด้วงฟรี 24/7</p>
            
            <div style="max-width: 800px; margin: 0 auto;">
                <div style="background: var(--bg-glass); backdrop-filter: blur(10px); border: 1px solid var(--border-color); border-radius: var(--radius-lg); overflow: hidden;">
                    <!-- Chat Header -->
                    <div style="padding: 1.5rem; background: linear-gradient(135deg, var(--primary), var(--primary-dark)); display: flex; align-items: center; gap: 1rem;">
                        <div style="font-size: 3rem;">🤖</div>
                        <div>
                            <h3 style="color: white; margin-bottom: 0.25rem;">AI ผู้ช่วยดูดวง</h3>
                            <p style="color: rgba(255,255,255,0.8); font-size: 0.875rem; margin: 0;">ออนไลน์ตลอด 24 ชั่วโมง</p>
                        </div>
                    </div>
                    
                    <!-- Chat Messages -->
                    <div id="chatbotMessages" style="height: 400px; overflow-y: auto; padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
                        <div style="display: flex; justify-content: flex-start;">
                            <div style="background: var(--bg-secondary); padding: 1rem; border-radius: var(--radius-md); max-width: 80%;">
                                <p style="color: var(--text-primary); margin: 0;">${chatbotData.greetings[0]}</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Quick Questions -->
                    <div style="padding: 1rem 1.5rem; border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color);">
                        <p style="color: var(--text-muted); font-size: 0.875rem; margin-bottom: 0.75rem;">คำถามด่วน:</p>
                        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                            ${chatbotData.quickQuestions.map(q => `
                                <button class="btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.875rem;" onclick="askQuickQuestion('${q.text}', '${q.category}')">
                                    ${q.text}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                    
                    <!-- Chat Input -->
                    <div style="padding: 1.5rem;">
                        <form id="chatbotForm" style="display: flex; gap: 0.75rem;">
                            <input type="text" id="chatbotInput" class="form-input" placeholder="พิมพ์คำถามของคุณ..." style="flex: 1;" required>
                            <button type="submit" class="btn-primary">ส่ง</button>
                        </form>
                    </div>
                </div>
                
                <!-- Features -->
                <div style="margin-top: 3rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;">
                    <div style="text-align: center; padding: 1.5rem;">
                        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🌟</div>
                        <h4 style="color: var(--primary-light); margin-bottom: 0.5rem;">ฟรีไม่มีค่าใช้จ่าย</h4>
                        <p style="color: var(--text-secondary); font-size: 0.875rem;">ใช้งานได้ไม่จำกัด</p>
                    </div>
                    <div style="text-align: center; padding: 1.5rem;">
                        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">⚡</div>
                        <h4 style="color: var(--primary-light); margin-bottom: 0.5rem;">ตอบรวดเร็ว</h4>
                        <p style="color: var(--text-secondary); font-size: 0.875rem;">ไม่ต้องรอนาน ตอบทันที</p>
                    </div>
                    <div style="text-align: center; padding: 1.5rem;">
                        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔮</div>
                        <h4 style="color: var(--primary-light); margin-bottom: 0.5rem;">หลากหลายคำถาม</h4>
                        <p style="color: var(--text-secondary); font-size: 0.875rem;">ถามได้ทุกเรื่องที่สงสัย</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('chatbotForm')?.addEventListener('submit', handleChatbotMessage);
};

// ==================== Chatbot Widget Toggle ====================
window.toggleChatbot = function () {
    chatbotOpen = !chatbotOpen;

    if (chatbotOpen) {
        showChatbotWidget();
    } else {
        closeChatbotWidget();
    }
};

function showChatbotWidget() {
    const widget = document.getElementById('chatbotWidget');
    widget.innerHTML = `
        <div style="position: fixed; bottom: 30px; right: 30px; width: 350px; max-width: 90vw; box-shadow: var(--shadow-lg); border-radius: var(--radius-lg); overflow: hidden; background: var(--bg-secondary); border: 1px solid var(--border-color); z-index: 999;">
            <!-- Header -->
            <div style="padding: 1rem; background: linear-gradient(135deg, var(--primary), var(--primary-dark)); display: flex; align-items: center; justify-content: space-between;">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <div style="font-size: 2rem;">🤖</div>
                    <div>
                        <div style="color: white; font-weight: 600; font-size: 0.875rem;">AI ผู้ช่วยดูดวง</div>
                        <div style="color: rgba(255,255,255,0.8); font-size: 0.75rem;">ออนไลน์</div>
                    </div>
                </div>
                <button onclick="toggleChatbot()" style="background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer; padding: 0;">✕</button>
            </div>
            
            <!-- Messages -->
            <div id="widgetChatMessages" style="height: 300px; overflow-y: auto; padding: 1rem; display: flex; flex-direction: column; gap: 0.75rem;">
                <div style="display: flex; justify-content: flex-start;">
                    <div style="background: var(--bg-glass); padding: 0.75rem; border-radius: var(--radius-md); max-width: 80%; font-size: 0.875rem;">
                        <p style="color: var(--text-primary); margin: 0;">${chatbotData.greetings[1]}</p>
                    </div>
                </div>
            </div>
            
            <!-- Quick Questions -->
            <div style="padding: 0.75rem; border-top: 1px solid var(--border-color); max-height: 120px; overflow-y: auto;">
                <p style="color: var(--text-muted); font-size: 0.75rem; margin-bottom: 0.5rem;">คำถามด่วน:</p>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    ${chatbotData.quickQuestions.slice(0, 3).map(q => `
                        <button onclick="askQuickQuestionWidget('${q.text}', '${q.category}')" style="padding: 0.5rem 0.75rem; font-size: 0.75rem; background: var(--bg-glass); border: 1px solid var(--border-color); border-radius: var(--radius-sm); color: var(--text-primary); cursor: pointer; transition: var(--transition);">
                            ${q.text}
                        </button>
                    `).join('')}
                </div>
            </div>
            
            <!-- Input -->
            <div style="padding: 0.75rem; border-top: 1px solid var(--border-color);">
                <form id="widgetChatForm" style="display: flex; gap: 0.5rem;">
                    <input type="text" id="widgetChatInput" placeholder="พิมพ์คำถาม..." style="flex: 1; padding: 0.5rem; background: var(--bg-dark); border: 1px solid var(--border-color); border-radius: var(--radius-sm); color: var(--text-primary); font-family: 'Sarabun', sans-serif; font-size: 0.875rem;" required>
                    <button type="submit" style="padding: 0.5rem 1rem; background: linear-gradient(135deg, var(--primary), var(--primary-dark)); color: white; border: none; border-radius: var(--radius-sm); cursor: pointer; font-family: 'Sarabun', sans-serif; font-size: 0.875rem; font-weight: 600;">ส่ง</button>
                </form>
            </div>
        </div>
        <button class="chatbot-toggle" onclick="toggleChatbot()" style="width: 60px; height: 60px; border-radius: 50%; background: linear-gradient(135deg, var(--primary), var(--accent)); border: none; font-size: 2rem; cursor: pointer; box-shadow: var(--shadow-lg); transition: var(--transition); position: fixed; bottom: 30px; right: 30px; z-index: 998;">
            💬
        </button>
    `;

    document.getElementById('widgetChatForm')?.addEventListener('submit', handleWidgetMessage);
}

function closeChatbotWidget() {
    const widget = document.getElementById('chatbotWidget');
    widget.innerHTML = `
        <button class="chatbot-toggle" id="chatbotToggle" onclick="toggleChatbot()">
            💬
        </button>
    `;
}

// ==================== Chatbot Logic ====================
function handleChatbotMessage(e) {
    e.preventDefault();
    const input = document.getElementById('chatbotInput');
    const message = input.value.trim();
    if (!message) return;

    addChatMessage('user', message, 'chatbotMessages');
    input.value = '';

    setTimeout(() => {
        const response = generateChatbotResponse(message);
        addChatMessage('bot', response, 'chatbotMessages');
    }, 1000);
}

function handleWidgetMessage(e) {
    e.preventDefault();
    const input = document.getElementById('widgetChatInput');
    const message = input.value.trim();
    if (!message) return;

    addChatMessage('user', message, 'widgetChatMessages');
    input.value = '';

    setTimeout(() => {
        const response = generateChatbotResponse(message);
        addChatMessage('bot', response, 'widgetChatMessages');
    }, 1000);
}

function addChatMessage(sender, message, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const messageDiv = document.createElement('div');
    messageDiv.style.display = 'flex';
    messageDiv.style.justifyContent = sender === 'user' ? 'flex-end' : 'flex-start';

    messageDiv.innerHTML = `
        <div style="background: ${sender === 'user' ? 'var(--primary)' : 'var(--bg-glass)'}; padding: 0.75rem; border-radius: var(--radius-md); max-width: 80%; font-size: ${containerId.includes('widget') ? '0.875rem' : '1rem'};">
            <p style="color: var(--text-primary); margin: 0;">${message}</p>
        </div>
    `;

    container.appendChild(messageDiv);
    container.scrollTop = container.scrollHeight;
}

window.askQuickQuestion = function (question, category) {
    addChatMessage('user', question, 'chatbotMessages');
    setTimeout(() => {
        const response = getResponseByCategory(category);
        addChatMessage('bot', response, 'chatbotMessages');
    }, 1000);
};

window.askQuickQuestionWidget = function (question, category) {
    addChatMessage('user', question, 'widgetChatMessages');
    setTimeout(() => {
        const response = getResponseByCategory(category);
        addChatMessage('bot', response, 'widgetChatMessages');
    }, 1000);
};

function generateChatbotResponse(message) {
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('รัก') || lowerMessage.includes('แฟน') || lowerMessage.includes('หนุ่ม') || lowerMessage.includes('สาว')) {
        return getResponseByCategory('love');
    } else if (lowerMessage.includes('งาน') || lowerMessage.includes('เงินเดือน') || lowerMessage.includes('ธุรกิจ')) {
        return getResponseByCategory('career');
    } else if (lowerMessage.includes('เลข') || lowerMessage.includes('สี') || lowerMessage.includes('ทิศ')) {
        return getResponseByCategory('lucky');
    } else if (lowerMessage.includes('ช่วย') || lowerMessage.includes('ทำไง') || lowerMessage.includes('อะไร')) {
        return getResponseByCategory('help');
    } else {
        return getResponseByCategory('general');
    }
}

function getResponseByCategory(category) {
    const responses = chatbotData.responses[category] || chatbotData.responses.general;
    return responses[Math.floor(Math.random() * responses.length)];
}
