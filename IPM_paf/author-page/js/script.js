document.addEventListener('DOMContentLoaded', () => {
  const defaultLang = 'zh'; // 默认语言
  const text = ['intro', 'structure', 'drawbacks', 'future', 'feedback'];

  // ✅ 初始化默认语言内容
  text.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = langContent[defaultLang][id];
  });

  const nav = langContent[defaultLang].nav;
  Object.keys(nav).forEach(id => {
    const item = document.querySelector(`.nav-item[data-section="${id}"]`);
    if (item) item.textContent = nav[id];
  });

  // ✅ 语言切换按钮逻辑
  document.querySelectorAll('.lang-icon').forEach(icon => {
    icon.addEventListener('click', () => {
      const lang = icon.dataset.lang;

      text.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = langContent[lang][id];
      });

      const nav = langContent[lang].nav;
      Object.keys(nav).forEach(id => {
        const item = document.querySelector(`.nav-item[data-section="${id}"]`);
        if (item) item.textContent = nav[id];
      });
    });
  });

  // ✅ 页面栏目切换（点击导航）
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.content-section');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      document.querySelector('.nav-item.active')?.classList.remove('active');
      item.classList.add('active');

      sections.forEach(sec => sec.classList.remove('active'));
      document.getElementById(item.dataset.section)?.classList.add('active');
    });
  });
});
