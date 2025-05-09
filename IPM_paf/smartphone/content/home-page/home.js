document.addEventListener('DOMContentLoaded', () => {
  // ✅ 页面跳转逻辑(home 卡片)
  document.querySelectorAll('.home-card').forEach(card => {
    card.addEventListener('click', () => {
      const targetId = card.dataset.target;
      showPage(targetId);
    });
  });

  // ✅ 返回按钮逻辑(所有页面回 home 页)
  document.querySelectorAll('.back-home-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      showPage('page-home');
    });
  });
});
