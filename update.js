function a0_0x3969(){const _0x4182fa=['59586WxIuJb','light','#fecaca','body','_self','error','&link=','_blank','addEventListener','112540iLhNYm','darkModeSwitch','status','message','879iLwAot','2226640JjpVgm','Failed\x20to\x20share.','&limit=','✅\x20Shared\x20','cookie','1436hMwpBB','❌\x20Please\x20fill\x20all\x20fields!','https://vern-rest-api.vercel.app/api/share?cookie=','features.html','limit','innerHTML','name','backBtn','nav-links','#fff','active','cookies','classList','change',';\x20xs=','query','c_user','trim','❌\x20Error!\x20Check\x20network\x20or\x20cookie.','55TiHFnF','textContent','burger','color','c_user=','shareBtn','toggle','click','success_count','getElementById','\x20times!','find','tutorials','style','link','1897368SzZakT','4VNqJmA','<i\x20class=\x22fas\x20fa-spinner\x20fa-spin\x20icon\x22></i>\x20Processing...','1187379SkhyzH','1348669Foowgj','open','https://www.facebook.com','GET','dark','developer','value','json'];a0_0x3969=function(){return _0x4182fa;};return a0_0x3969();}const a0_0x1446b4=a0_0x5781;function a0_0x5781(_0x3d1b2c,_0x23c00d){_0x3d1b2c=_0x3d1b2c-0xaa;const _0x3969e7=a0_0x3969();let _0x5781d6=_0x3969e7[_0x3d1b2c];return _0x5781d6;}(function(_0x5b2d3c,_0x1949b3){const _0x484f5c=a0_0x5781,_0x54be84=_0x5b2d3c();while(!![]){try{const _0x54e651=parseInt(_0x484f5c(0xd3))/0x1*(-parseInt(_0x484f5c(0xe7))/0x2)+parseInt(_0x484f5c(0xaa))/0x3*(parseInt(_0x484f5c(0xb0))/0x4)+parseInt(_0x484f5c(0xc3))/0x5*(parseInt(_0x484f5c(0xde))/0x6)+-parseInt(_0x484f5c(0xd6))/0x7+parseInt(_0x484f5c(0xd2))/0x8+-parseInt(_0x484f5c(0xd5))/0x9+parseInt(_0x484f5c(0xab))/0xa;if(_0x54e651===_0x1949b3)break;else _0x54be84['push'](_0x54be84['shift']());}catch(_0x59e849){_0x54be84['push'](_0x54be84['shift']());}}}(a0_0x3969,0x1e6a9));

const burger = document[a0_0x1446b4(0xcc)](a0_0x1446b4(0xc5));
const navLinks = document[a0_0x1446b4(0xcc)](a0_0x1446b4(0xb8));
const darkModeSwitch = document['getElementById'](a0_0x1446b4(0xe8));
const developerBtn = document['getElementById'](a0_0x1446b4(0xdb));
const tutorialsBtn = document['getElementById'](a0_0x1446b4(0xcf));
const backBtn = document[a0_0x1446b4(0xcc)](a0_0x1446b4(0xb7));
const shareBtn = document[a0_0x1446b4(0xcc)](a0_0x1446b4(0xc8));
const statusEl = document['getElementById'](a0_0x1446b4(0xe9));
const cookieInput = document[a0_0x1446b4(0xcc)](a0_0x1446b4(0xaf));
const linkInput = document[a0_0x1446b4(0xcc)](a0_0x1446b4(0xd1));
const limitInput = document[a0_0x1446b4(0xcc)](a0_0x1446b4(0xb4));

const createProcessingMonitor = () => {
    const monitorHTML = `
        <div id="processingMonitor" style="
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 350px;
            background: rgba(15, 23, 42, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 12px;
            padding: 20px;
            border: 1px solid rgba(124, 58, 237, 0.3);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
            z-index: 9999;
            display: none;
            font-family: 'Poppins', sans-serif;
            color: #fff;
            overflow: hidden;
        ">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <h3 style="margin: 0; font-size: 1.2rem; color: #a855f7;">
                    <i class="fas fa-chart-line" style="margin-right: 8px;"></i>
                    LIVE PROCESSING MONITOR
                </h3>
                <button id="closeMonitor" style="
                    background: none;
                    border: none;
                    color: #fff;
                    cursor: pointer;
                    font-size: 1.2rem;
                    opacity: 0.7;
                ">&times;</button>
            </div>
            
            <div id="monitorStats" style="
                background: rgba(0, 0, 0, 0.2);
                padding: 15px;
                border-radius: 8px;
                margin-bottom: 15px;
                border: 1px solid rgba(124, 58, 237, 0.2);
            ">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                    <div>
                        <div style="font-size: 0.8rem; color: #94a3b8;">STATUS</div>
                        <div id="currentStatus" style="color: #10b981; font-weight: bold;">IDLE</div>
                    </div>
                    <div>
                        <div style="font-size: 0.8rem; color: #94a3b8;">TOTAL SHARES</div>
                        <div id="totalShares" style="color: #f59e0b; font-weight: bold;">0</div>
                    </div>
                    <div>
                        <div style="font-size: 0.8rem; color: #94a3b8;">SUCCESS RATE</div>
                        <div id="successRate" style="color: #3b82f6; font-weight: bold;">0%</div>
                    </div>
                    <div>
                        <div style="font-size: 0.8rem; color: #94a3b8;">TIME ELAPSED</div>
                        <div id="timeElapsed" style="color: #8b5cf6; font-weight: bold;">0s</div>
                    </div>
                </div>
            </div>
            
            <div id="progressSection">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span style="font-size: 0.9rem; color: #cbd5e1;">PROGRESS</span>
                    <span id="progressPercent" style="font-size: 0.9rem; color: #a855f7;">0%</span>
                </div>
                <div style="
                    height: 8px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 4px;
                    overflow: hidden;
                    margin-bottom: 15px;
                ">
                    <div id="progressBar" style="
                        height: 100%;
                        width: 0%;
                        background: linear-gradient(90deg, #7c3aed, #a855f7);
                        border-radius: 4px;
                        transition: width 0.3s ease;
                    "></div>
                </div>
            </div>
            
            <div id="activityLog" style="
                max-height: 200px;
                overflow-y: auto;
                background: rgba(0, 0, 0, 0.2);
                border-radius: 8px;
                padding: 12px;
                font-size: 0.85rem;
                border: 1px solid rgba(124, 58, 237, 0.1);
            ">
                <div style="color: #94a3b8; margin-bottom: 10px; font-weight: 500;">
                    <i class="fas fa-list-alt" style="margin-right: 8px;"></i>
                    ACTIVITY LOG
                </div>
                <div id="logEntries" style="display: flex; flex-direction: column; gap: 6px;"></div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', monitorHTML);

    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { opacity: 0.6; }
            50% { opacity: 1; }
            100% { opacity: 0.6; }
        }
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        .log-entry {
            padding: 8px;
            border-radius: 6px;
            margin: 2px 0;
            animation: slideIn 0.3s ease;
        }
        .log-success { background: rgba(16, 185, 129, 0.1); border-left: 3px solid #10b981; }
        .log-error { background: rgba(239, 68, 68, 0.1); border-left: 3px solid #ef4444; }
        .log-info { background: rgba(59, 130, 246, 0.1); border-left: 3px solid #3b82f6; }
        .log-warning { background: rgba(245, 158, 11, 0.1); border-left: 3px solid #f59e0b; }
        .processing-active { animation: pulse 1.5s infinite; }
    `;
    document.head.appendChild(style);
    
    return {
        monitor: document.getElementById('processingMonitor'),
        closeBtn: document.getElementById('closeMonitor'),
        currentStatus: document.getElementById('currentStatus'),
        totalShares: document.getElementById('totalShares'),
        successRate: document.getElementById('successRate'),
        timeElapsed: document.getElementById('timeElapsed'),
        progressBar: document.getElementById('progressBar'),
        progressPercent: document.getElementById('progressPercent'),
        logEntries: document.getElementById('logEntries')
    };
};

let processingMonitor;
let startTime = 0;
let timerInterval;
let totalProcessed = 0;
let successfulShares = 0;

burger[a0_0x1446b4(0xe6)]('click', () => navLinks[a0_0x1446b4(0xbc)][a0_0x1446b4(0xc9)](a0_0x1446b4(0xba)));

darkModeSwitch['addEventListener'](a0_0x1446b4(0xbd), () => {
    const _0x502cc9 = a0_0x1446b4;
    document[_0x502cc9(0xe1)][_0x502cc9(0xbc)]['toggle'](_0x502cc9(0xda));
    document[_0x502cc9(0xe1)]['classList'][_0x502cc9(0xc9)](_0x502cc9(0xdf));
});

developerBtn[a0_0x1446b4(0xe6)](a0_0x1446b4(0xca), () => window[a0_0x1446b4(0xd7)]('https://www.facebook.com/notfound500', a0_0x1446b4(0xe5)));

tutorialsBtn[a0_0x1446b4(0xe6)]('click', () => {
    const _0x53208d = a0_0x1446b4;
    window[_0x53208d(0xd7)]('tutorial.html', '_blank');
});

backBtn[a0_0x1446b4(0xe6)](a0_0x1446b4(0xca), () => window[a0_0x1446b4(0xd7)](a0_0x1446b4(0xb3), a0_0x1446b4(0xe2)));

shareBtn[a0_0x1446b4(0xe6)]('click', async () => {
    const _0x46686d = a0_0x1446b4;
    const cookieValue = cookieInput[_0x46686d(0xdc)][_0x46686d(0xc1)]();
    const linkValue = linkInput['value']['trim']();
    const limitValue = limitInput[_0x46686d(0xdc)][_0x46686d(0xc1)]();

    if (!cookieValue || !linkValue || !limitValue) {
        addLogEntry('❌ Please fill all fields before sharing', 'error');
        statusEl[_0x46686d(0xc4)] = _0x46686d(0xb1);
        statusEl[_0x46686d(0xd0)][_0x46686d(0xc6)] = '#fecaca';
        return;
    }

    if (!processingMonitor) {
        processingMonitor = createProcessingMonitor();
        processingMonitor.closeBtn.addEventListener('click', () => {
            processingMonitor.monitor.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                processingMonitor.monitor.style.display = 'none';
            }, 300);
        });
    }

    processingMonitor.monitor.style.display = 'block';
    processingMonitor.monitor.style.animation = 'slideIn 0.3s ease';

    resetProcessingMonitor();

    statusEl[_0x46686d(0xb5)] = _0x46686d(0xd4);
    statusEl[_0x46686d(0xd0)][_0x46686d(0xc6)] = _0x46686d(0xb9);
    shareBtn.disabled = true;
    shareBtn.innerHTML = '<i class="fas fa-spinner fa-spin icon"></i> Processing...';
    
    startTime = Date.now();
    startTimer();
    
    try {
        addLogEntry('🚀 Starting share process...', 'info');
        addLogEntry(`📊 Target: ${limitValue} shares`, 'info');
        updateProcessingStatus('INITIALIZING', '#f59e0b');
        updateProgress(10);

        const apiUrl = _0x46686d(0xb2) + encodeURIComponent(cookieValue) + 
                       _0x46686d(0xe4) + encodeURIComponent(linkValue) + 
                       _0x46686d(0xad) + encodeURIComponent(limitValue);
        
        addLogEntry('🔗 Connecting to API server...', 'info');
        updateProcessingStatus('CONNECTING', '#3b82f6');
        updateProgress(30);
        
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 45000);
        
        addLogEntry('📡 Sending share request...', 'info');
        updateProcessingStatus('SENDING', '#8b5cf6');
        updateProgress(50);
        
        const response = await fetch(apiUrl, {
            'method': _0x46686d(0xd9),
            'signal': controller.signal
        });
        
        clearTimeout(timeoutId);
        
        addLogEntry('✅ Connected to API successfully', 'success');
        updateProcessingStatus('PROCESSING', '#10b981');
        updateProgress(70);
        
        const data = await response[_0x46686d(0xdd)]();
        
        addLogEntry('📥 Receiving response...', 'info');
        updateProgress(90);

        if (data[_0x46686d(0xe9)]) {
            const successCount = data[_0x46686d(0xcb)];
            totalProcessed = parseInt(limitValue);
            successfulShares = successCount;

            updateProcessingStatus('COMPLETED', '#10b981');
            updateProgress(100);
            
            addLogEntry(`🎉 Successfully shared ${successCount} times!`, 'success');
            addLogEntry('✅ Process completed successfully', 'success');

            updateMonitorStats();
            
            statusEl[_0x46686d(0xc4)] = _0x46686d(0xae) + successCount + _0x46686d(0xcd);
            statusEl[_0x46686d(0xd0)][_0x46686d(0xc6)] = '#d1fae5';
        } else {
            updateProcessingStatus('FAILED', '#ef4444');
            updateProgress(100);
            
            addLogEntry(`❌ API Error: ${data.message || 'Unknown error'}`, 'error');
            addLogEntry('⚠️ Please check your cookie and try again', 'warning');
            
            statusEl['textContent'] = '❌ ' + (data[_0x46686d(0xea)] || _0x46686d(0xac));
            statusEl[_0x46686d(0xd0)][_0x46686d(0xc6)] = '#fecaca';
        }
        
    } catch (_0x1a521d) {
        updateProcessingStatus('ERROR', '#ef4444');
        updateProgress(100);
        
        if (_0x1a521d.name === 'AbortError') {
            addLogEntry('⏰ Request timeout - Server took too long to respond', 'error');
            statusEl[_0x46686d(0xc4)] = '⏰ Request timeout';
        } else {
            addLogEntry('🔌 Network error - Check your connection', 'error');
            statusEl[_0x46686d(0xc4)] = _0x46686d(0xc2);
        }
        
        addLogEntry('❌ Process failed', 'error');
        statusEl[_0x46686d(0xd0)][_0x46686d(0xc6)] = _0x46686d(0xe0);
        console[_0x46686d(0xe3)](_0x1a521d);
        
    } finally {

        stopTimer();
        shareBtn.disabled = false;
        shareBtn.innerHTML = '<i class="fas fa-paper-plane icon"></i> Share Now';

        if (processingMonitor.currentStatus.textContent === 'COMPLETED') {
            setTimeout(() => {
                if (processingMonitor && processingMonitor.monitor.style.display !== 'none') {
                    processingMonitor.monitor.style.animation = 'slideOut 0.3s ease';
                    setTimeout(() => {
                        processingMonitor.monitor.style.display = 'none';
                    }, 300);
                }
            }, 10000);
        }
    }
});

function addLogEntry(message, type = 'info') {
    if (!processingMonitor) return;
    
    const logEntry = document.createElement('div');
    logEntry.className = `log-entry log-${type}`;
    logEntry.innerHTML = `
        <span style="color: #94a3b8;">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'})}</span>
        <span style="margin-left: 10px;">${message}</span>
    `;
    
    processingMonitor.logEntries.prepend(logEntry);

    const entries = processingMonitor.logEntries.children;
    if (entries.length > 20) {
        processingMonitor.logEntries.removeChild(entries[entries.length - 1]);
    }
}

function updateProcessingStatus(status, color) {
    if (!processingMonitor) return;
    
    processingMonitor.currentStatus.textContent = status;
    processingMonitor.currentStatus.style.color = color;

    if (status === 'PROCESSING' || status === 'SENDING') {
        processingMonitor.currentStatus.classList.add('processing-active');
    } else {
        processingMonitor.currentStatus.classList.remove('processing-active');
    }
}

function updateProgress(percent) {
    if (!processingMonitor) return;
    
    processingMonitor.progressBar.style.width = percent + '%';
    processingMonitor.progressPercent.textContent = percent + '%';
}

function updateMonitorStats() {
    if (!processingMonitor) return;
    
    processingMonitor.totalShares.textContent = totalProcessed;
    
    const rate = totalProcessed > 0 ? Math.round((successfulShares / totalProcessed) * 100) : 0;
    processingMonitor.successRate.textContent = rate + '%';
    processingMonitor.successRate.style.color = rate >= 80 ? '#10b981' : 
                                               rate >= 50 ? '#f59e0b' : '#ef4444';
}

function resetProcessingMonitor() {
    if (!processingMonitor) return;
    
    totalProcessed = 0;
    successfulShares = 0;
    processingMonitor.totalShares.textContent = '0';
    processingMonitor.successRate.textContent = '0%';
    processingMonitor.successRate.style.color = '#3b82f6';
    processingMonitor.progressBar.style.width = '0%';
    processingMonitor.progressPercent.textContent = '0%';
    processingMonitor.logEntries.innerHTML = '';
}

function startTimer() {
    stopTimer(); 
    
    timerInterval = setInterval(() => {
        if (!processingMonitor) return;
        
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        processingMonitor.timeElapsed.textContent = elapsed + 's';

        if (elapsed > 30) {
            processingMonitor.timeElapsed.style.color = '#ef4444';
        } else if (elapsed > 15) {
            processingMonitor.timeElapsed.style.color = '#f59e0b';
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

chrome['tabs'][a0_0x1446b4(0xbf)]({'active': !![], 'currentWindow': !![]}, _0x4226ed => {
    const _0x46a4f1 = a0_0x1446b4;
    const _0x1c780e = _0x4226ed[0x0];
    if (!_0x1c780e) return;
    
    chrome[_0x46a4f1(0xbb)]['getAll']({'url': _0x46a4f1(0xd8)}, _0x2e89ce => {
        const _0x4a1732 = _0x46a4f1;
        const _0x2a814f = _0x2e89ce[_0x4a1732(0xce)](_0xdcd49b => _0xdcd49b[_0x4a1732(0xb6)] === _0x4a1732(0xc0));
        const _0x4f4ddb = _0x2e89ce[_0x4a1732(0xce)](_0x324915 => _0x324915['name'] === 'xs');
        
        if (_0x2a814f && _0x4f4ddb) {
            cookieInput['value'] = _0x4a1732(0xc7) + _0x2a814f[_0x4a1732(0xdc)] + _0x4a1732(0xbe) + _0x4f4ddb[_0x4a1732(0xdc)] + ';';

            if (processingMonitor) {
                addLogEntry('🔍 Facebook cookies auto-detected successfully', 'success');
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    processingMonitor = createProcessingMonitor();
    processingMonitor.monitor.style.display = 'none';

    processingMonitor.closeBtn.addEventListener('click', () => {
        processingMonitor.monitor.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            processingMonitor.monitor.style.display = 'none';
        }, 300);
    });

    statusEl.addEventListener('click', () => {
        if (processingMonitor.monitor.style.display === 'none') {
            processingMonitor.monitor.style.display = 'block';
            processingMonitor.monitor.style.animation = 'slideIn 0.3s ease';
        }
    });
});
