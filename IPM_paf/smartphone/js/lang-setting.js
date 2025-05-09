document.addEventListener('DOMContentLoaded', () => {
    const hoverMessage = document.getElementById('lang-hover-message');
  
    const hoverTips = {
      en: "Let's speak English!",
      pt: "Vamos falar Português!",
      zh: "让我们说中文！"
    };
  
    document.querySelectorAll('.lang-icon').forEach(icon => {
      const lang = icon.dataset.lang;
  
      // 悬浮提示
      icon.addEventListener('mouseenter', () => {
        hoverMessage.innerText = hoverTips[lang] || '';
      });
  
      icon.addEventListener('mouseleave', () => {
        hoverMessage.innerText = '';
      });
  
      // 点击语言图标
      icon.addEventListener('click', () => {
        setLang(lang);                  // 切换语言
        showLangSelectedMessage(lang); // 显示 + 动画
      });
    });
  });
  
  function showLangSelectedMessage(lang) {
    const msgBox = document.getElementById('lang-selected-message');
    const map = {
      en: "🎉 You selected English. Welcome!",
      pt: "🎉 Selecionou o Português. Bem-vindo(a)!",
      zh: "🎉 您已选择中文，欢迎使用本App！"
    };
    msgBox.innerText = map[lang] || "";
  
    // 撒花动画
    msgBox.classList.remove('pop');
    void msgBox.offsetWidth;
    msgBox.classList.add('pop');
  }
  