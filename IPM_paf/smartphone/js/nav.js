
  document.addEventListener('DOMContentLoaded', () => {
    window.isLoggedIn = false;
  
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {

        // 🛑 如果没登录，禁止点击
        if (!window.isLoggedIn) {
          console.log("🚫 please login first!");
          return false;
        }
        // 1. 清除所有激活状态
        document.querySelectorAll('.nav-item').forEach(i => {
          i.classList.remove('active');
          const icon = i.querySelector('.nav-icon');
          const name = i.dataset.name;
          icon.src = `icons/nav/${name}.png`;
        });
    
        // 2. 设置当前项为 active
        item.classList.add('active');
        const icon = item.querySelector('.nav-icon');
        const name = item.dataset.name;
        icon.src = `icons/nav/${name}-active.png`;
    
        // 3. 页面内容切换
        document.querySelectorAll('.page-section').forEach(section => {
          section.style.display = 'none';
        });
        const currentPage = document.getElementById(`page-${name}`);
        if (currentPage) {
          currentPage.style.display = 'block';
        }
        // ✅ 加上这段：当进入 discover 页时重新渲染一次
        if (name === 'discover') {
          window.renderDiscoverList();
        }
    
        // 4. 同步顶部标题
        document.querySelector('.phone-header h1').textContent =
          name.charAt(0).toUpperCase() + name.slice(1);
      });
    });
  });
  