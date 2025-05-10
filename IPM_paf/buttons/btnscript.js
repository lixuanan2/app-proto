window.addEventListener('DOMContentLoaded', () => {
  const phoneFrame = document.querySelector('.phone-frame');
  const watchFrame = document.querySelector('.watch-frame');
  const toggleBtn = document.getElementById('toggleWatchBtn');
  const resetLSBtn = document.getElementById('ResetLocalStg');
  const showTaskBtn = document.getElementById('ShowTaskBtn'); 

  const initialEvents = window.initialEvents;

  let showingTaskPage = false; // 记录是不是正在看 Task 页
  let previousPageId = 'page-home';

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
    localStorage.setItem('myChats', JSON.stringify(window.initialChats));
    alert("✅ Local storage has been reset to default events.");
  
    updateEventList();
    updateChatList();
  });

  // 切换Task页面
  showTaskBtn.addEventListener('click', () => {
    // 闪烁！！
    showTaskBtn.classList.remove('attention');

    if (!window.isLoggedIn) {
      alert('❗ Please login first!');
      return;
    }

    const pageHome = document.getElementById('page-home');
    const pageTarefa = document.getElementById('home-tarefa'); 

    if (!showingTaskPage) {
      if (document.querySelector('.page-section[style*="block"]')) {
        previousPageId = document.querySelector('.page-section[style*="block"]').id;
      }
      document.querySelectorAll('.page-section').forEach(p => p.style.display = 'none');
      pageTarefa.style.display = 'block';
      showTaskBtn.textContent = 'Back';
      showTaskBtn.style.backgroundColor = '#3498db';
    } else {
      document.querySelectorAll('.page-section').forEach(p => p.style.display = 'none');
      const previousPage = document.getElementById(previousPageId);
      if (previousPage) previousPage.style.display = 'block';
      showTaskBtn.textContent = 'Show Task';
      showTaskBtn.style.backgroundColor = '#e74c3c';
    }
    showingTaskPage = !showingTaskPage;
  });
});