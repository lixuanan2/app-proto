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
  
window.navigateTo = function(pageId) {
    // 隐藏所有页面
    document.querySelectorAll(".page-section").forEach(p => p.style.display = "none");

    // 显示目标页面
    const target = document.getElementById(pageId);
    if (target) target.style.display = "block";

    // ✅ 显式更新标题
    updateHeaderTexts(currentLang, pageId);
};



