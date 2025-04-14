document.addEventListener('DOMContentLoaded', () => {
    // 获取元素
    const featurePopup = document.getElementById('feature-popup');
    const closeBtn = document.getElementById('popup-close-btn');
  
    // 显示弹窗
    window.showFeatureAlert = function () {
        featurePopup.style.display = 'flex';
    };
  
    // 关闭弹窗
    closeBtn.addEventListener('click', () => {
        featurePopup.style.display = 'none';
    });
});
  




