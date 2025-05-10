const langData = {
    defaultLang: 'en',

    // home 主页
    homeTexts: {
      en: {
        title: "🏠 Home",
        intro: "📖 Introduction",
        tasks: "📝 Tasks",
        lang: "🌐 Language"
      },
      pt: {
        title: "🏠 Início",
        intro: "📖 Introdução",
        tasks: "📝 Tarefas",
        lang: "🌐 Idioma"
      },
      zh: {
        title: "🏠 首页",
        intro: "📖 介绍",
        tasks: "📝 任务",
        lang: "🌐 语言"
      }
    },
    

    // 登录页面
    loginTexts: {
        en: {
          title: "Welcome Back",
          username: "Username",
          password: "Password",
          loginBtn: "Login",
          forgot: "Forgot Password?",
          signup: "Sign Up"
        },
        pt: {
          title: "Bem-vindo de volta",
          username: "Nome de utilizador",
          password: "Palavra-passe",
          loginBtn: "Entrar",
          forgot: "Esqueceu a palavra-passe?",
          signup: "Registar-se"
        },
        zh: {
          title: "欢迎回来",
          username: "用户名",
          password: "密码",
          loginBtn: "登录",
          forgot: "忘记密码？",
          signup: "注册"
        }
      },

    // intro 页面
    introMessages: {
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
  
      zh: `亲爱的用户您好，欢迎光临这个proto，给您请安啦 ~ \n
  本.proto的主题是Organização de Eventos Sociais，即是关于组织社会活动的，目标是模拟一个社交活动类app，做一个paf（高保真）模型；\n
  按理说这里应该是首页……但我实在没想好要干啥。🤔\n
  不如将计就计，干脏用这页来放些介绍，后续再放些临时任务及指南！\n
  此外，操作过程中，如果你找不到某些功能，不如去 Help 页面撞撞运气，说不定能帮到你（说不定啦😏）`
    },

    // task 页面
    taskTexts: {
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
    },

    // lang 页面
    langPageTexts : {
        en: {
          title: "🌐 Language Settings",
          description: "Please choose your preferred language:"
        },
        pt: {
          title: "🌐 Definições de Idioma",
          description: "Por favor, escolha o seu idioma preferido:"
        },
        zh: {
          title: "🌐 语言设置",
          description: "请选择你喜欢的语言："
        }
      },

    // events 页面
    eventsPageTexts : {
        en: {
          header: "🎫 My Events",
          addEventBtn: "Add Event",
          memberLabel: "members",
          form: {
            title: "Add New Event",
            nameLabel: "Event Name",
            namePlaceholder: "e.g. Birthday Party",
            dateLabel: "Date",
            locationLabel: "Location",
            locationPlaceholder: "e.g. Central Park",
            typeLabel: "Type",
            typePlaceholder: "e.g. Party, Study, Sport",
            tagsLabel: "Tags",
            tagPlaceholder: "Add a tag",
            btnCreate: "✅ Create",
            btnCancel: "❌ Cancel",
            tagListPrefix: "Tags:"
          }
        },
        pt: {
          header: "🎫 Meus Eventos",
          addEventBtn: "Adicionar Evento",
          memberLabel: "membros",
          form: {
            title: "Adicionar Novo Evento",
            nameLabel: "Nome do Evento",
            namePlaceholder: "ex.: Festa de Aniversário",
            dateLabel: "Data",
            locationLabel: "Local",
            locationPlaceholder: "ex.: Parque Central",
            typeLabel: "Tipo",
            typePlaceholder: "ex.: Festa, Estudo, Desporto",
            tagsLabel: "Etiquetas",
            tagPlaceholder: "Adicionar uma etiqueta",
            btnCreate: "✅ Criar",
            btnCancel: "❌ Cancelar",
            tagListPrefix: "Etiquetas:"
          }
        },
        zh: {
          header: "🎫 我的事件",
          addEventBtn: "添加事件",
          memberLabel: "成员",
          form: {
            title: "添加新事件",
            nameLabel: "事件名称",
            namePlaceholder: "例如：生日派对",
            dateLabel: "日期",
            locationLabel: "地点",
            locationPlaceholder: "例如：中央公园",
            typeLabel: "类型",
            typePlaceholder: "例如：派对、学习、运动",
            tagsLabel: "标签",
            tagPlaceholder: "添加标签",
            btnCreate: "✅ 创建",
            btnCancel: "❌ 取消",
            tagListPrefix: "标签："
          }
        },
      },

    // eventDetail 页面
    eventDetailTexts : {
        en: {
          title: "Event Details",
          labels: {
            event: "🎉 Event",
            date: "📅 Date",
            location: "📍 Location",
            type: "🏷️ Type",
            tags: "📌 Tags",
            members: "Members",
          },
          btnRemove: "🗑️ Remove Event",
        },
        pt: {
          title: "Detalhes do Evento",
          labels: {
            event: "🎉 Evento",
            date: "📅 Data",
            location: "📍 Local",
            type: "🏷️ Tipo",
            tags: "📌 Etiquetas",
            members: "Membros",
          },
          btnRemove: "🗑️ Remover Evento",
        },
        zh: {
          title: "事件详情",
          labels: {
            event: "🎉 事件名称",
            date: "📅 日期",
            location: "📍 地点",
            type: "🏷️ 类型",
            tags: "📌 标签",
            members: "成员",
          },
          btnRemove: "🗑️ 删除事件",
        }
      },

  
    // memberPopup 页面
    memberPopupTexts: {
        en: {
          addTitle: "Add New Member",
          detailTitle: "Member Details",
          name: "Name",
          gender: "Gender",
          genderOptions: {
            male: "Male",
            female: "Female",
            select: "Select"
          },
          phone: "Phone",
          btnCreate: "✅ Create",
          btnCancel: "❌ Cancel",
          btnRemove: "🗑️ Remove",
          btnClose: "❌ Close"
        },
        pt: {
          addTitle: "Adicionar Novo Membro",
          detailTitle: "Detalhes do Membro",
          name: "Nome",
          gender: "Género",
          genderOptions: {
            male: "Masculino",
            female: "Feminino",
            select: "Selecionar"
          },
          phone: "Telefone",
          btnCreate: "✅ Criar",
          btnCancel: "❌ Cancelar",
          btnRemove: "🗑️ Remover",
          btnClose: "❌ Fechar"
        },
        zh: {
          addTitle: "添加新成员",
          detailTitle: "成员详情",
          name: "姓名",
          gender: "性别",
          genderOptions: {
            male: "男",
            female: "女",
            select: "请选择"
          },
          phone: "电话",
          btnCreate: "✅ 创建",
          btnCancel: "❌ 取消",
          btnRemove: "🗑️ 删除",
          btnClose: "❌ 关闭"
        }
      },

    // helpPage 页面
    helpPageTexts: {
    en: {
        title: "📌 How to?",
        items: [
        {
            question: "✅ How to create an event?",
            answer: "Go to the Events page, click the \"+\" button, fill out the form and press \"Create\"."
        },
        {
            question: "✅ How to invite a friend?",
            answer: "Open an event's detail page, click the \"Add Member\" icon, and fill in their information."
        },
        {
            question: "✅ How to remove a member?",
            answer: "Click on a member icon to open their details and press \"Remove\"."
        },
        {
            question: "✅ How to search an event?",
            answer: "Go to the Discover page and type keywords in the search bar."
        },
        {
            question: "✅ How to reset the data?",
            answer: "Click the \"Reset LocalStorage\" button at the top of the phone interface."
        }
        ],
        aboutTitle: "👤 About the author",
        aboutText: "If you'd like to know more about this prototype, click the button below:",
        aboutLink: "🔗 Go to author page"
    },
    
    pt: {
        title: "📌 Como fazer?",
        items: [
        {
            question: "✅ Como criar um evento?",
            answer: "Vá para a página de Eventos, clique no botão \"+\", preencha o formulário e pressione \"Criar\"."
        },
        {
            question: "✅ Como convidar um amigo?",
            answer: "Abra a página de detalhes de um evento, clique no ícone \"Adicionar Membro\" e preencha as informações."
        },
        {
            question: "✅ Como remover um membro?",
            answer: "Clique no ícone de um membro para abrir os detalhes e pressione \"Remover\"."
        },
        {
            question: "✅ Como procurar um evento?",
            answer: "Vá até a página Discover e digite palavras-chave na barra de pesquisa."
        },
        {
            question: "✅ Como reiniciar os dados?",
            answer: "Clique no botão \"Reset LocalStorage\" no topo da interface do telefone."
        }
        ],
        aboutTitle: "👤 Sobre o autor",
        aboutText: "Se quiser saber mais sobre este protótipo, clique no botão abaixo:",
        aboutLink: "🔗 Ir para a página do autor"
    },
    
    zh: {
        title: "📌 如何操作？",
        items: [
        {
            question: "✅ 如何创建事件？",
            answer: "进入 Events 页面，点击“+”按钮，填写表单并点击“创建”。"
        },
        {
            question: "✅ 如何邀请好友？",
            answer: "打开某个事件的详情页面，点击“添加成员”图标，填写信息。"
        },
        {
            question: "✅ 如何移除成员？",
            answer: "点击成员头像打开详情页面，点击“删除”按钮。"
        },
        {
            question: "✅ 如何搜索事件？",
            answer: "进入 Discover 页面，在搜索框中输入关键词即可。"
        },
        {
            question: "✅ 如何重置数据？",
            answer: "点击手机界面顶部的“Reset LocalStorage”按钮。"
        }
        ],
        aboutTitle: "👤 关于作者",
        aboutText: "如果你想了解更多，请点击下方按钮：",
        aboutLink: "🔗 前往作者页面"
      }
    },

    // menu 页面
    menuTexts: {
      en: {
        items: [
          "👤 Personal Info", "🧭 GPS Settings", "⚙️ Settings", "🌐 Language",
          "👥 Friends", "⌚ Smartwatch", "📢 Announcements", "📦 Storage",
          "🕓 History", "🧩 More Features", "❓ About", "🚪 Log Out"
        ]
      },
      pt: {
        items: [
          "👤 Informações Pessoais", "🧭 Configurações de GPS", "⚙️ Definições", "🌐 Idioma",
          "👥 Amigos", "⌚ Smartwatch", "📢 Avisos", "📦 Armazenamento",
          "🕓 Histórico", "🧩 Mais Funcionalidades", "❓ Sobre", "🚪 Sair"
        ]
      },
      zh: {
        items: [
          "👤 个人信息", "🧭 GPS设置", "⚙️ 设置", "🌐 语言",
          "👥 好友", "⌚ 智能手表", "📢 公告", "📦 存储空间",
          "🕓 历史记录", "🧩 更多功能", "❓ 关于", "🚪 登出"
        ]
      }
    },
    

    // personalMenu 下拉窗口
    personalMenuTexts: {
      en: ["Personal Info", "GPS", "Settings"],
      pt: ["Informações Pessoais", "GPS", "Definições"],
      zh: ["个人信息", "GPS", "设置"]
    },

    // header 和 nav导航栏
    headerTexts: {
      en: {
        pageTitles: {
          "page-login": "Login",
          "page-home": "Home",
          "home-intro": "Introduction",
          "home-tarefa": "Tasks",
          "page-lang": "Language",
          "page-events": "Events",
          "page-events-add": "Add Event",
          "page-events-detail": "Event Details",
          "page-discover": "Discover",
          "page-help": "Help",
          "page-menu": "Menu"
        },
        menu: {
          personal: "Personal Info",
          gps: "GPS",
          settings: "Settings"
        },
        watch: {
          connected: "connected",
          disconnected: "disconnected"
        },
        nav: ["Home", "Events", "Discover", "Help", "Menu"]
      },
      pt: {
        pageTitles: {
          "page-login": "Entrar",
          "page-home": "Início",
          "home-intro": "Introdução",
          "home-tarefa": "Tarefas",
          "page-lang": "Idioma",
          "page-events": "Eventos",
          "page-events-add": "Adicionar Evento",
          "page-events-detail": "Detalhes do Evento",
          "page-discover": "Descobrir",
          "page-help": "Ajuda",
          "page-menu": "Menu"
        },
        menu: {
          personal: "Dados Pessoais",
          gps: "GPS",
          settings: "Definições"
        },
        watch: {
          connected: "conectado",
          disconnected: "desconectado"
        },
        nav: ["Início", "Eventos", "Descobrir", "Ajuda", "Menu"]
      },
      zh: {
        pageTitles: {
          "page-login": "登录",
          "page-home": "主页",
          "home-intro": "简介",
          "home-tarefa": "任务",
          "page-lang": "语言",
          "page-events": "事件",
          "page-events-add": "添加事件",
          "page-events-detail": "事件详情",
          "page-discover": "发现",
          "page-help": "帮助",
          "page-menu": "菜单"
        },
        menu: {
          personal: "个人信息",
          gps: "定位设置",
          settings: "设置"
        },
        watch: {
          connected: "已连接",
          disconnected: "未连接"
        },
        nav: ["主页", "事件", "发现", "帮助", "菜单"]
      }
    },

    
    // discover 搜索栏
    discoverPageTexts: {
      en: {
        title: "🧭 Discover Events",
        searchType: {
          name: "🔤 Name",
          tags: "🏷️ Tags",
          location: "📍 Location"
        },
        searchPlaceholder: "🔍 Search events",
        placeholderMap: {
          name: "Search by name...",
          tags: "Search by tags...",
          location: "Search by location..."
        }
      },
      pt: {
        title: "🧭 Descobrir Eventos",
        searchType: {
          name: "🔤 Nome",
          tags: "🏷️ Etiquetas",
          location: "📍 Localização"
        },
        searchPlaceholder: "🔍 Procurar eventos",
        placeholderMap: {
          name: "Pesquisar por nome...",
          tags: "Pesquisar por etiquetas...",
          location: "Pesquisar por localização..."
        }
      },
      zh: {
        title: "🧭 发现活动",
        searchType: {
          name: "🔤 名称",
          tags: "🏷️ 标签",
          location: "📍 地点"
        },
        searchPlaceholder: "🔍 搜索活动",
        placeholderMap: {
          name: "按名称搜索...",
          tags: "按标签搜索...",
          location: "按地点搜索..."
        }
      }
    }
    
      
};
  