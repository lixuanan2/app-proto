document.addEventListener('DOMContentLoaded', () => {
    const msg = {
        pt: `Olá, caro(a) utilizador(a), bem-vindo(a) a este protótipo. Saudações!\n
      Este protótipo tem como tema "Organização de Eventos Sociais", ou seja, está vocacionado para a organização de atividades sociais. O nosso objetivo aqui é simular uma aplicação e criar um modelo de alta fidelidade (PAF).\n
      Em teoria, esta deveria ser a página inicial... mas sinceramente, ainda não sei o que colocar aqui. 🤔\n
      Vamos então fazer de conta que é uma página de introdução (e talvez com algumas tarefas provisórias).\n
      Além disso, se se perder durante a utilização, tente visitar a página de Ajuda. Talvez (só talvez) ela possa ajudar.`,
      
        en: `Dear user, welcome to this prototype. Greetings!\n
      The theme of this prototype is "Organização de Eventos Sociais" — in other words, it's about organizing social activities.\n
      Our goal is to simulate an app and build a high-fidelity model (PAF).\n
      Technically, this should be a homepage... but honestly, I have no idea what to put here. 🤔\n
      So let's just pretend it's an intro page (maybe with some temporary tasks).\n
      Also, if you ever get lost, you can try the Help page. It might (just might) help.`,
      
        zh: `亲爱的用户您好，欢迎光临这个prototype，给您请安啦 ~ \n
      本.proto的主题是Organização de Eventos Sociais，即是关于组织社会活动的，目标是模拟一个社交活动类app，做一个paf（高保真）模型；\n
      按理说这里应该是首页……但我实在没想好要干啥。🤔\n
      不如将计就计，干脆用这页来放些介绍，后续再放一些临时任务及指南！\n
      此外，操作过程中，如果你找不到某些功能，不妨去 Help 页面碰碰运气，说不定能帮到你（说不定啦😏）`
      };
      
  
    const messageContainer = document.getElementById('home-message');
    const defaultLang = 'pt';
  
    function setLang(lang) {
        const text = msg[lang] || msg['pt'];
        messageContainer.innerHTML = text.replace(/\n/g, '<br>');
      }      
  
    // 默认语言
    setLang(defaultLang);
  
    // 切换按钮点击事件
    document.querySelectorAll('.lang-icon').forEach(icon => {
      icon.addEventListener('click', () => {
        const lang = icon.dataset.lang;
        setLang(lang);
      });
    });
  });

  
  