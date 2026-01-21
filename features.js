  function updateDateTime() {
    const now = new Date();
    const dateTimeStr = now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
    document.getElementById('currentDateTime').textContent = dateTimeStr;
  }
  
  updateDateTime();
  setInterval(updateDateTime, 1000);

  const commands = document.querySelectorAll('.command');
  commands.forEach((cmd, index) => {
    const text = cmd.textContent;
    cmd.textContent = '';
    let i = 0;
    
    setTimeout(() => {
      const typeWriter = setInterval(() => {
        if (i < text.length) {
          cmd.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(typeWriter);
        }
      }, 50);
    }, index * 800);
  });
