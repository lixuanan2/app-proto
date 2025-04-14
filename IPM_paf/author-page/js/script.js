document.addEventListener('DOMContentLoaded', () => {
    
    // 语言切换
    const text = ['intro', 'structure', 'drawbacks', 'future'];
  
    document.querySelectorAll('.lang-icon').forEach(icon => {
      icon.addEventListener('click', () => {
        const lang = icon.dataset.lang;
        text.forEach(id => {
          const el = document.getElementById(id);
          el.innerHTML = langContent[lang][id];
        });
      });
    });


    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.content-section');
  
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        document.querySelector('.nav-item.active').classList.remove('active');
        item.classList.add('active');
  
        sections.forEach(sec => sec.classList.remove('active'));
        document.getElementById(item.dataset.section).classList.add('active');
      });
    });
  });
  

  document.addEventListener('DOMContentLoaded', () => {
    
  });
  