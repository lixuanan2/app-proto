document.addEventListener('DOMContentLoaded', () => {
    const msg = {
        pt: `Olá, caro(a) utilizador(a), bem-vindo(a) a este protótipo. Saudações!\n
      Este protótipo tem como tema "Organização de Eventos Sociais", ou seja, está vocacionado para a organização de atividades sociais.\n
      O nosso objetivo aqui é simular uma aplicação e criar um modelo de alta fidelidade (PAF).\n
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
    
      const tarefaLangs = {
        pt: {
          title: "📝 Tarefa",
          th1: "Tarefa",
          th2: "Dificuldade",
          task1: "📍 Juntar-se a um evento através da página Discover",
          task2: "📝 Criar um novo evento na página de Events",
          task3: "👥 Remover e reinvitar um membro na página de Event Detail",
          task4: "⌚ Concluir o check-in na aplicação MyApp do smartwatch",
          diff1: "baixa",
          diff2: "média",
          diff3: "alta",
          diff4: "média",
          note: "💡 Nota: O Smartwatch está no painel esquerdo. Clique em 'Mostrar Smartwatch' para exibir a interface."
        },
        en: {
          title: "📝 Tasks",
          th1: "Task",
          th2: "Difficulty",
          task1: "📍 Join an event through the Discover page",
          task2: "📝 Create a new event on the Events page",
          task3: "👥 Remove and reinvite a member on the Event Detail page",
          task4: "⌚ Complete check-in on the Smartwatch MyApp",
          diff1: "low",
          diff2: "medium",
          diff3: "high",
          diff4: "medium",
          note: "💡 Note: The smartwatch is on the left panel. Click 'Show Smartwatch' to display the watch interface."
        },
        zh: {
          title: "📝 任务",
          th1: "任务内容",
          th2: "难度",
          task1: "📍 通过 Discover 页面加入一个事件",
          task2: "📝 在 Events 页面创建一个新事件",
          task3: "👥 在 Event Detail 页面移除并重新邀请一个成员",
          task4: "⌚ 在智能手表 MyApp 中完成签到",
          diff1: "低",
          diff2: "中",
          diff3: "高",
          diff4: "中",
          note: "💡 提示：Smartwatch 在左侧区域，点击“Show Smartwatch”即可显示手表界面。"
        }
      };      
  
    const messageContainer = document.getElementById('home-message');
    const defaultLang = 'en';
    let currentLang = defaultLang;
  
    function setLang(lang) {
        currentLang = lang;
        const text = msg[lang] || msg['pt'];
        messageContainer.innerHTML = text.replace(/\n/g, '<br>');
        updateTarefaSection(lang);
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

    // 点击卡片切换页面
  document.querySelectorAll('.home-card').forEach(card => {
    card.addEventListener('click', () => {
      const targetId = card.dataset.target;
      document.getElementById('page-home').style.display = 'none';
      document.getElementById(targetId).style.display = 'block';
    });
  });

  // 返回按钮统一绑定逻辑
  document.querySelectorAll('.back-home-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.page-section').forEach(sec => sec.style.display = 'none');
      document.getElementById('page-home').style.display = 'block';
    });
  });

  function updateTarefaSection(lang) {
    const t = tarefaLangs[lang] || tarefaLangs['pt'];
    document.getElementById('task-title').innerText = t.title;
    document.getElementById('task-th1').innerText = t.th1;
    document.getElementById('task-th2').innerText = t.th2;
    document.getElementById('task-1').innerText = t.task1;
    document.getElementById('task-2').innerText = t.task2;
    document.getElementById('task-3').innerText = t.task3;
    document.getElementById('task-4').innerText = t.task4;
    document.getElementById('diff-1').innerText = t.diff1;
    document.getElementById('diff-2').innerText = t.diff2;
    document.getElementById('diff-3').innerText = t.diff3;
    document.getElementById('diff-4').innerText = t.diff4;
    document.getElementById('task-note').innerText = t.note;
  }
});

  
  