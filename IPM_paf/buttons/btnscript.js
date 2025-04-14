window.addEventListener('DOMContentLoaded', () => {
  const phoneFrame = document.querySelector('.phone-frame');
  const watchFrame = document.querySelector('.watch-frame');
  const toggleBtn = document.getElementById('toggleWatchBtn');
  const resetLSBtn = document.getElementById('ResetLocalStg');

  const initialEvents = window.initialEvents;


  // 初始
  let showingPhone = true;

  // event: 切换显示
  toggleBtn.addEventListener('click', () => {
    if (showingPhone) {
      // 隐藏手机
      phoneFrame.style.display = 'none';
      // 显示手表
      watchFrame.style.display = 'flex'; // 或者 'block'
      // 按钮文字切换
      toggleBtn.textContent = 'Show Phone';
    } else {
      // 显示手机
      phoneFrame.style.display = 'block';
      // 隐藏手表
      watchFrame.style.display = 'none';
      // 按钮文字切换
      toggleBtn.textContent = 'Show Watch';
    }
    // 翻转状态
    showingPhone = !showingPhone;
  });

  resetLSBtn.addEventListener('click', () => {
    const confirmReset = confirm("Are you sure you want to reset all events to default?");
    if (!confirmReset) return;
  
    // ✅ 使用封装的数据
    localStorage.setItem('myEvents', JSON.stringify(initialEvents));
    alert("✅ Local storage has been reset to default events.");
  
    updateEventList();
  });
});