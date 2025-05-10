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

  let gpsActivated = false;
  let hasCheckedIn = false;

  // 👉 点击 MyApp → 进入 check-in 页面
  document.getElementById('watch-myapp').addEventListener('click', () => {
    document.getElementById('watch-menu').style.display = 'none';
    document.getElementById('watch-checkin').style.display = 'block';
    eventText.innerHTML = '🏷️ Party Sunset';
    header.style.display = 'flex';
  
    gpsActivated = false;
  
    const msg = document.getElementById('checkin-message');
  
    if (hasCheckedIn) {
      // ✅ 已签到：直接显示“你已签到”状态
      msg.innerHTML = '✅ You already checked in!';
      msg.style.textAlign = 'center';
      document.getElementById('checkin-row').style.display = 'flex';
      document.getElementById('watch-event-text').style.display = 'none';
      gpsIcon.style.display = 'none';
      arrowIcon.style.display = 'none';
      header.style.display = 'none';
    } else {
      // ✅ 未签到：初始化为 GPS 状态
      gpsIcon.src = 'icons/smartwatch/gps.png';
      gpsIcon.style.display = 'block';
      gpsIcon.classList.add('blink');
      document.getElementById('checkin-row').style.display = 'none';
      document.getElementById('watch-event-text').style.display = 'block';
      arrowIcon.style.display = 'none';
      header.style.display = 'flex';
    }
  });  

  // 👉 点击 GPS 图标 → 激活 Check-in
  gpsIcon.addEventListener('click', () => {
    gpsIcon.src = 'icons/smartwatch/gps-active.png';
    gpsIcon.classList.remove('blink'); // ❌ 移除闪烁

    document.getElementById('watch-event-text').style.display = 'none';
    document.getElementById('checkin-row').style.display = 'flex';
    arrowIcon.style.display = 'block';
    header.style.display = 'none';

    gpsActivated = true;
  });

  // 👉 点击 R 按钮 → 显示签到完成文本
  document.querySelector('.watch-btn-start').addEventListener('click', () => {
    if (!gpsActivated) {
      alert('Please activate GPS first!');
      return;
    }
  
    hasCheckedIn = true; // ✅ 记录状态
  
    // ✅ 显示签到成功文本
    const msg = document.getElementById('checkin-message');
    msg.innerHTML = '🎉<strong>Successful!</strong>';
    msg.style.textAlign = 'center';
  
    // 加动画类
    msg.classList.add('checkin-animate');
    setTimeout(() => {
      msg.classList.remove('checkin-animate');
    }, 1000);
  
    // 同时隐藏其他按钮
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
    gpsActivated = false;
  });

  document.getElementById('watch-more')?.addEventListener('click', () => {
    alert('🛠️ More+ has no functionality yet.');
  });
});
