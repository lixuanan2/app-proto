document.addEventListener('DOMContentLoaded', () => {
    const pageLogin = document.getElementById('page-login');
    const pageHome = document.getElementById('page-home');
    const headerTitle = document.querySelector('.phone-header h1'); // ✨ 获取 header 的 h1
  
    // 初始只显示 login
    document.querySelectorAll('.page-section').forEach(page => page.style.display = 'none');
    pageLogin.style.display = 'block';
    
    // 登录按钮逻辑
    document.getElementById('login-btn').addEventListener('click', () => {
      const username = document.getElementById('login-username').value.trim();
      const password = document.getElementById('login-password').value.trim();
      
      if (username && password) {
        window.isLoggedIn = true;
  
        pageLogin.style.display = 'none';
        pageHome.style.display = 'block';
        console.log("🔑 login success!");
  
        // ✅ 登录成功后，更新 header h1
        if (headerTitle) {
          headerTitle.textContent = 'Home';
        }
  
        // ✅ 登录成功后，设置 Home 高亮
        document.querySelectorAll('.nav-item').forEach(i => {
          i.classList.remove('active');
          const icon = i.querySelector('.nav-icon');
          const name = i.dataset.name;
          icon.src = `icons/nav/${name}.png`; // 全部切换成普通版
        });
  
        const homeItem = document.querySelector('.nav-item[data-name="home"]');
        if (homeItem) {
          homeItem.classList.add('active');
          const icon = homeItem.querySelector('.nav-icon');
          icon.src = 'icons/nav/home-active.png'; // Home切换成高亮版
        }
      } else {
        alert('Please enter username and password!');
      }
    });
  });
  