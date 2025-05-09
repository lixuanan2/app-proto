document.addEventListener('DOMContentLoaded', () => {
    // 语言包
    initLanguage();

    const personalIcon = document.getElementById('personal-icon');
    const personalMenu = document.getElementById('personal-menu');
    const watchIcon = document.getElementById('watch-status-icon');

    // 点击头像，切换菜单 + 图标状态
    personalIcon.addEventListener('click', (e) => {
    e.stopPropagation(); // 防止冒泡
    const isActive = personalIcon.classList.toggle('active');
    personalIcon.src = isActive ? 'icons/header/personal-active.png' : 'icons/header/personal.png';
    personalMenu.style.display = isActive ? 'block' : 'none';
    });

    // 点击其他地方，关闭菜单并恢复图标
    document.addEventListener('click', () => {
    personalMenu.style.display = 'none';
    personalIcon.classList.remove('active');
    personalIcon.src = 'icons/header/personal.png';
    });

    // 手表图标切换状态
    watchIcon.addEventListener('click', () => {
    const isConnected = watchIcon.classList.toggle('active');
    watchIcon.src = isConnected ? 'icons/header/watch-green.png' : 'icons/header/watch-red.png';
    watchIcon.title = isConnected ? 'connected' : 'desconnected';
    });

    document.getElementById('menu-personal2').addEventListener('click', showFeatureAlert);
    document.getElementById('menu-gps2').addEventListener('click', showFeatureAlert);
    document.getElementById('menu-settings2').addEventListener('click', showFeatureAlert);
});

  