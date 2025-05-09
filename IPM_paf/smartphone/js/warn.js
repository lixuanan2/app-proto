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
  
    function navigateTo(pageId) {
        document.querySelectorAll('.page-section').forEach(sec => sec.style.display = 'none');
        document.getElementById(pageId).style.display = 'block';
    }
  
});
  




