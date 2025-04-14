document.addEventListener('DOMContentLoaded', () => {
    function updateWatchTime() {
      const now = new Date();
      document.getElementById('watch-clock').textContent =
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      document.getElementById('watch-date').textContent =
        now.toLocaleDateString();
    }
  
    updateWatchTime();
    setInterval(updateWatchTime, 60000);
  
    const gpsIcon = document.getElementById('gps-icon');
    const arrowIcon = document.getElementById('arrow-icon');
    const header = document.querySelector('.watch-header');
    const eventText = document.getElementById('watch-event-text');
  
    let gpsActivated = false; // 🔐 初始为未激活
  
    // 👉 点击 MyApp → 进入 check-in 页面
    document.getElementById('watch-myapp').addEventListener('click', () => {
      document.getElementById('watch-menu').style.display = 'none';
      document.getElementById('watch-checkin').style.display = 'block';
      eventText.innerHTML = '🏷️ Party Sunset';
      header.style.display = 'flex';
      gpsIcon.style.display = 'block';
      gpsIcon.src = 'icons/smartwatch/gps.png';
      arrowIcon.style.display = 'none';
      gpsActivated = false; // 每次进入重新锁定
    });
  
    // 👉 点击 GPS 图标 → 激活 Check-in
    gpsIcon.addEventListener('click', () => {
        gpsIcon.src = 'icons/smartwatch/gps-active.png';
        
        document.getElementById('watch-event-text').style.display = 'none';
      
        const checkinRow = document.getElementById('checkin-row');
        checkinRow.style.display = 'flex';
      
        document.getElementById('arrow-icon').style.display = 'block'; // 明确显示箭头
        header.style.display = 'none';
      
        gpsActivated = true;
      });
      
    // 👉 点击 R 按钮 → 显示签到完成文本
    document.querySelector('.watch-btn-start').addEventListener('click', () => {
        if (!gpsActivated) {
          alert('Please activate GPS first!');
          return;
        }
      
        const msg = document.getElementById('checkin-message');
        msg.innerHTML = '✅ Successfully checked in to<br><strong>Party Sunset</strong>';
        msg.style.textAlign = 'center'; // 居中更好看
        
        gpsIcon.style.display = 'none';
        arrowIcon.style.display = 'none';
        header.style.display = 'none';
      });
      
  
    // 👉 点击 S 按钮 → 返回主菜单
    document.querySelector('.watch-btn-end').addEventListener('click', () => {
        document.getElementById('watch-menu').style.display = 'block';
        document.getElementById('watch-checkin').style.display = 'none';
        document.getElementById('checkin-row').style.display = 'none';
        document.getElementById('watch-event-text').style.display = 'block';
        header.style.display = 'flex';
    });
  
  });
  