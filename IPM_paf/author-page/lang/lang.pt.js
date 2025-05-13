window.langPT = {
    nav: {
      intro: "Sobre o Autor",
      structure: "Estrutura do Código",
      drawbacks: "Limitações",
      future: "Melhorias Futuras",
      feedback: "Feedback"
    },
    intro: `
        <h2>👤 Sobre o Autor</h2>
        <p>Este é um trabalho de PAF para a disciplina de IPM no curso de Engenharia Informática da FCUL,
        ano letivo 2024/25. O objetivo é desenvolver um protótipo de alta fidelidade para simular funcionalidades
        básicas de uma aplicação móvel (principal) e de smartwatch (secundária) focadas na organização de eventos sociais.</p>
        <p>Como as aulas práticas focaram em HTML, CSS e JS, optei por não usar Justinmind nem Angular,
        mas sim tecnologias web nativas.</p>
        <p>Esta página serve para apresentar a estrutura do projeto, lógica de programação e planos futuros:</p>
        <ul>
          <li>📌 Introdução e motivação</li>
          <li>🧩 Estrutura do código</li>
          <li>⚠️ Limitações atuais</li>
          <li>🚀 Melhorias futuras</li>
        </ul>
        <p>Esta página pode ser atualizada com novas secções (ex: manual do utilizador, avaliação heurística).
        Versão atual: <strong>v1.0.0</strong>.</p>

        <hr>
        <p>⚠️ Nota: Como o conteúdo de atualizações se tornou extenso, esta página do autor passará a listar os registros de versão em <strong>ordem cronológica inversa</strong>. A introdução da versão v1.0.0 será sempre exibida no topo.</p>

        <hr>

        <p>Esta atualização corresponde à entrega final do projeto da disciplina, sendo considerada a versão oficial submetida no sistema da universidade. Fiz alguns ajustes necessários com base nos comentários recolhidos durante a avaliação com utilizadores. Para mais detalhes, consulte a secção “📣 Feedback”.</p>

        <p>Sem mais palavras — estou ocupado com outras prioridades e com pouca energia neste momento. Se chegou até aqui, muito obrigado pela sua atenção e leitura.</p>

        <p><strong>Página do autor concluída. Over!</strong></p>
        <p><strong>Versão atual: v1.1.1</strong></p>

        <hr>
        <p>Esta versão marca a segunda fase do protótipo, que defino como <strong>v1.1.0</strong>.</p>

        <p>Na atualização, adicionei três novas tarefas (Tarefas): uma funcionalidade de chat na página de Eventos que simula mensagens em grupo, a opção de adicionar um evento à lista de conversas diretamente a partir da página de detalhes, e uma funcionalidade “Discover in Map”, com posição do utilizador e três marcadores de eventos clicáveis. A ideia era simular uma experiência de exploração.</p>

        <p>Sinceramente, estas funcionalidades ficaram bastante cruas. Por um lado, o tempo era muito limitado; por outro, houve mudanças inesperadas nos requisitos da disciplina. Uma pequena crítica que deixo é que não fomos informados antecipadamente de que seriam exigidas mais três tarefas. Esta decisão de última hora complicou muito a estrutura do meu menu de navegação. Como não havia espaço para inserir três novas entradas, tive de recorrer a botões flutuantes e páginas secundárias — o que limitou bastante o meu raciocínio de design.</p>

        <p>Claro que também houve falhas da minha parte. Não previ bem a escalabilidade do sistema desde o início, e isso tornou as alterações posteriores mais difíceis. Levo esta experiência como uma lição: em projetos futuros, vou dar mais atenção à flexibilidade da arquitetura.</p>

        <p>Mesmo assim, não desisti. Pensei com cuidado sobre a lógica de interação e acabei por implementar um conjunto funcional de mensagens e interações com mapa. A experiência do utilizador — desde o envio e eliminação de mensagens até ao destaque e localização de eventos no mapa — ficou, na minha opinião, bastante satisfatória. Esta versão tem os seus pontos fracos, mas também me deixou algum orgulho.</p>

        <p>No total, já gastei cerca de 45–50 horas neste projeto. Provavelmente mais. Foi tempo a mais — um desperdício, em certa medida. Não pretendo continuar a desenvolver este protótipo. Espero que compreendam.</p>

        <p><strong>Versão atual: v1.1.0</strong></p>

        <hr>

        <p>Após receber o feedback dos colegas, desenvolvi a versão <strong>v1.0.3</strong> deste protótipo.</p>
        <p>Esta atualização responde principalmente aos pontos levantados na avaliação heurística, incluindo problemas de consistência linguística, ausência de feedback em certas interações, falta de validação em campos de entrada e uma lógica confusa na interface do smartwatch. Com base nesses comentários, criei um esboço de pacote de idiomas, adicionei alguns avisos de feedback, melhorei a aparência visual via CSS e implementei algumas validações básicas, além de revisar o funcionamento do smartwatch.</p>
        <p>Para ser honesto, não estou totalmente satisfeito com esta versão.</p>
        <p>Em primeiro lugar, algumas sugestões dos colegas eram realmente boas, mas difíceis de implementar com a estrutura atual (que é baseada apenas em front-end e LocalStorage). Seriam necessárias reestruturações profundas para aplicar tudo.</p>
        <p>Em segundo lugar, minha versão anterior era muito mais caprichada. Agora, por conta da pressa com prazos e funcionalidades obrigatórias, não tive tempo de cuidar dos detalhes. Isso acabou prejudicando um pouco a experiência final.</p>
        <p>Além disso, o professor pediu que fossem incluídas mais três tarefas novas, que preciso implementar na próxima versão.</p>
        <p>Sendo sincero: tenho outros projetos mais urgentes e relevantes em paralelo, e meu tempo e energia estão muito limitados neste momento.</p>
        <p>Por isso, decidi não focar mais na “arte” deste protótipo. A partir de agora, o objetivo será apenas entregar a funcionalidade e garantir que o trabalho cumpra o necessário. Uma pequena concessão, digamos assim…</p>
        <p><strong>Talvez eu tenha perdido a essência do projeto. Peço desculpa por isso.</strong></p>
        <p>Enfim, agora vou trabalhar nas novas tarefas. A gente se vê na próxima versão.</p>
        <p><strong>Versão atual: v1.0.3</strong></p>

        <hr>
        <p>Após receber mais feedback do professor, realizei alguns pequenos ajustes e atualizei para a versão <strong>v1.0.2</strong>:</p>
        <ul>
          <li>Adicionei uma página de Login com otimização para dispositivos móveis e ajustes na barra de navegação.</li>
          <li>Adicionei uma nota de uso do Smartwatch na página Tarefa para ajudar os utilizadores a encontrar mais facilmente a interface do relógio.</li>
          <li>Atualizei as descrições nas seções "📣 Feedback" e "📂 Estrutura de Código" para refletir a versão atual do desenvolvimento.</li>
        </ul>
        <p>Esta atualização envolveu uma carga de trabalho relativamente pequena, focando principalmente na melhoria da experiência básica do utilizador e da documentação.</p>
        <p><strong>Versão atual: v1.0.2.</strong></p>

        <hr>
        <p>Com base no feedback do professor, fiz algumas melhorias e ajustes funcionais no protótipo nesta nova versão. Para documentar essas alterações, criei um novo módulo chamado “📣 Feedback” nesta página do autor, onde organizo os comentários recebidos, as soluções aplicadas e os planos futuros.</p>
        <p>Além disso, como na próxima aula os colegas irão avaliar o protótipo com base em heurísticas, os resultados também serão incluídos nesse módulo.</p>
        <p>O código-fonte permanece estruturalmente inalterado (pelo menos que eu me lembre... estou meio confuso 😵‍💫). As secções “🚀 Melhorias Futuras” e “⚠️ Limitações” também serão atualizadas com mais conteúdo e reflexões.</p>
        <p>Versão atual: <strong>v1.0.1</strong>.</p>
      `,
      structure: `
      <h2>📂 Estrutura do Código</h2>
      <p>Este projeto utiliza HTML, CSS, JavaScript e LocalStorage. Adota uma estrutura de página única (SPA), onde todas as páginas e janelas são exibidas/ocultadas dinamicamente. Embora não seja ideal para expansão modular, essa abordagem facilita bastante o desenvolvimento inicial e foi mantida nesta versão. Uma futura versão poderá adotar uma estrutura multipágina.</p>
      <p>Os arquivos CSS e JS são organizados de forma modular por página/função, com separação entre estilo e lógica. Alguns componentes, como a visualização de eventos, o mapa e o sistema de idiomas, são reutilizados em diferentes páginas. A estrutura está resumida abaixo:</p>
      <p>Segue a estrutura principal da versão <code>v1.1.0</code>:</p>

      <ul style="padding-left: 24px;">
        <li><strong>main/</strong>: Diretório principal com página inicial e estilos globais</li>
        <li>├── index.html</li>
        <li>├── main.css</li>

        <li><strong>author-page/</strong>: Página do autor e conteúdo multilíngue</li>
        <li><strong>buttons/</strong>: Botões flutuantes (estilo e lógica)</li>
        <li><strong>data/</strong>: Dados locais (eventos, chats, etc.)</li>
        <li><strong>icons/</strong>: Ícones (bandeiras, avatares, ícones do sistema)</li>
        <li><strong>lang/</strong>: Sistema de idioma (EN/PT/ZH)</li>

        <li><strong>smartphone/</strong>: Interface da versão smartphone</li>
        <li>├── css/: Estrutura visual, navegação e alertas</li>
        <li>├── js/: Navegação, alertas e mudança de idioma</li>
        <li>└── content/: Conteúdo funcional dividido por página</li>
        <li>　├── home-page/, event/, discover/, help/, menu/</li>
        <li>　├── login/: Tela de login</li>
        <li>　├── chat-list/: Lista de chats e detalhes (incluir/remover)</li>
        <li>　├── event-detail/</li>
        <li>　│　├── detail/: Acesso pela página de Eventos</li>
        <li>　│　├── detail2/: Acesso pela página Discover</li>
        <li>　│　└── member/: Janelas de membro (adicionar/visualizar/remover)</li>
        <li>　└── discover/map/: Mapa com retorno e destaque</li>

        <li><strong>smartwatch/</strong>: Interface do smartwatch</li>
        <li>├── css/: Estilo do relógio e seta animada</li>
        <li>└── js/: Lógica do Check-in</li>
      </ul>

      <p>O módulo <code>event-detail</code> está dividido em <code>detail</code> e <code>detail2</code> para separar a lógica conforme a origem (Events vs Discover).</p>
      <p>Essa estrutura continuará evoluindo com novas funcionalidades e melhorias visuais. (Versão atual: <strong><code>v1.1.0</code></strong>)</p>

    `,
      drawbacks: `
        <h2>⚠️ Limitações</h2>
        <p>Este projeto ainda tem muitas limitações. Os seguintes pontos não estão ordenados por prioridade, mas podem ser reorganizados futuramente:</p>
        <ul>
            <li>📦 A estrutura HTML, CSS e JS está um pouco confusa e difícil de depurar.</li>
            <li>💡 <strong>Solução:</strong> Considerar usar Angular ou outro framework no futuro.</li>
            <li>📱 As barras de rolagem nas páginas Home e Help fazem com que o cabeçalho do telemóvel se mova. Para evitar isso, o texto foi reduzido — o que pode prejudicar a experiência do utilizador.</li>
            <li>💡 <strong>Causa:</strong> Conflitos de lógica no CSS.</li>
            <li>⌚ O layout do smartwatch é menos bonito que o do telemóvel.</li>
            <li>💡 <strong>Causa:</strong> Estava cansado no final do desenvolvimento e perdi a paciência.</li>
            <li>🚫 Alguns avisos são exibidos na página web em vez de aparecerem como popups dentro do telemóvel.</li>
            <li>💡 <strong>Causa:</strong> Estava com preguiça (mas é fácil de corrigir).</li>
            <li>🧑‍🤝‍🧑 A função de remover membros não exige permissões de administrador — qualquer pessoa pode remover.</li>
            <li>💡 <strong>Causa:</strong> Difícil de implementar com LocalStorage. Exigiria uma lógica mais complexa baseada em JSON, que é mais backend.</li>
            <li>🔁 As listas de membros nas páginas Discover e Event Detail não estão sincronizadas.</li>
            <li>💡 <strong>Causa:</strong> Estava com preguiça e não quis implementar.</li>
        </ul>
        <p>Resumindo: a preguiça é a raiz de todos os bugs.</p>
        `,
      future: `
        <h2>🚀 Melhorias Futuras</h2>
        <ol>
          <li>Resolver todos os pontos mencionados na secção "Limitações".</li>
          <li>Adicionar ordenação à <strong>página de eventos</strong> (ex: por ordem alfabética, mais recente, por data), com botões de alternância.</li>
          <li>A <strong>secção Menu</strong> ainda não foi desenvolvida e será abordada após reestruturação do sistema.</li>
          <li>Se houver muitos membros no Event Detail, será exibido um ícone “...” para colapsar/expandir a lista.</li>
          <li>Avatares são ainda limitados: apenas ícones estáticos estão disponíveis no protótipo. No futuro, com backend (ex: Node.js), será possível implementar perfis personalizados.</li>
          <li>O sistema ainda possui várias áreas de melhoria, que serão tratadas gradualmente.</li>
        </ol>
        <p>Versão atual: <strong>v1.0.1</strong>.</p>
        `,
        feedback: `
        <h2>📣 Feedback do Professor · v1.0.0 -> v1.0.1</h2>
        <ul>
          <li><strong>Origem dos eventos não é clara:</strong> Eventos iniciais usam bordas azuis, eventos criados pelo utilizador usam verdes, e eventos vindos do Discover mantêm a borda amarela (igual à página Discover).</li>
          <li><strong>Layout da criação de eventos precisa de melhorias:</strong> Otimizar o CSS para se adaptar melhor ao formato do telemóvel.</li>
          <li><strong>Demasiados membros na página de detalhes:</strong> Acima de certo número, os membros serão colapsados com um ícone “...” para expandir.<em style="color:#888">(Funcionalidade adiada para melhorias futuras)</em></li>
          <li><strong>Pesquisa pouco específica:</strong> Um seletor será adicionado para alternar entre pesquisa por nome, tags ou local. Por padrão: nome.</li>
          <li><strong>Avatares demasiado simples:</strong> Por agora apenas suportam ícones estáticos. No futuro, com backend (ex: Node.js), será explorada a gestão de avatares personalizada.</li>
          <li><strong>Smartwatch pouco intuitivo:</strong> Ícone de GPS (inativo) agora pisca para guiar o utilizador a realizar check-in.</li>
        </ul>
        <p>Além disso, para a avaliação dos estudantes da próxima semana, pretendo:</p>
        <ul>
          <li>📌 Adicionar botão de Tarefas na página inicial com a lista atual</li>
          <li>📌 Reordenar tarefas por dificuldade e prioridade</li>
          <li>📌 Resolver mais pontos da secção “Limitações”</li>
        </ul>

        <hr>

        <h2>📣 Feedback do Professor · v1.0.1 -> v1.0.2</h2>
        <ul>
          <li><strong>Nova Página de Login:</strong> Foi adicionada uma página de login dedicada, otimizada para telas móveis. Implementado o bloqueio da navegação inferior e a atualização dinâmica do título do cabeçalho após o login.</li>
          <li><strong>Problema de Acessibilidade ao Smartwatch:</strong> Foi adicionada uma nota abaixo da página de tarefas para orientar o utilizador a usar o botão esquerdo para abrir a interface do Smartwatch.</li>
        </ul>
        <p>Esta atualização corrige principalmente a ausência de entrada de login e problemas de orientação identificados na versão v1.0.1, melhorando ainda mais a experiência do utilizador e os detalhes da interface.</p>
        <p>Versão atual: <strong>v1.0.2</strong>.</p>

        <hr>

        <h2>📣 Feedback dos colegas · v1.0.2 -> v1.0.3</h2>
        <p>Esta atualização incremental baseia-se principalmente na atividade de Avaliação Heurística realizada em sala de aula. Com base no feedback dos colegas, foram feitas melhorias e ajustes no protótipo em termos de interações, validação de entrada e visibilidade do estado do sistema.</p>

        <ul>
          <li>🌐 Estrutura inicial do pacote de idiomas implementada, com suporte a três idiomas: chinês, inglês e português. Botões, títulos e placeholders agora estão sincronizados.</li>
          <li>🧑‍💻 Restrições adicionadas em vários campos de entrada (ex.: nomes não podem conter apenas números; telefones não podem conter letras).</li>
          <li>🎨 Adição de notificações tipo "toast" e animações em ações como adicionar membros ou efetuar check-in, aumentando a visibilidade do estado.</li>
          <li>⛔ Controle de permissões melhorado: apenas o criador do evento pode remover membros.</li>
          <li>⌚ Lógica do Smartwatch otimizada, com melhorias visuais e de usabilidade no processo de check-in.</li>
        </ul>

        <p>Algumas sugestões dos colegas são válidas, mas não foram implementadas neste momento devido à complexidade técnica, como a sincronização entre páginas Discover e Event Detail, ou a troca dinâmica de eventos no Smartwatch.</p>

        <p>📄 Para mais detalhes sobre o feedback e as correções aplicadas, consulte os seguintes documentos (bilingues):</p>
        <ul>
          <li><a href="pdfs/同学评估/启发式评估.pdf" target="_blank">📘 Versão em chinês: Avaliação heurística</a></li>
          <li><a href="pdfs/同学评估/AV.pdf" target="_blank">📗 Versão em português: Avaliação heurística</a></li>
        </ul>

        <p>Para mais detalhes técnicos e decisões de projeto, consulte as seções “Introdução do Autor” e “Pontos a Melhorar”.</p>
        <p>Versão atual: <strong>v1.0.3</strong>.</p>

        <hr>

        <h2>📣 Feedback de colegas · v1.1.0 -> v1.1.1</h2>
        <p>Esta atualização baseia-se na atividade de Avaliação com Utilizadores.</p>
        <p>Convidámos 5 participantes para interações reais com o protótipo. Foram aplicados três métodos de avaliação (registo de interações, Single Ease Question e questionário SUS), permitindo recolher feedback valioso e aplicar melhorias pontuais ao sistema.</p>

        <ul>
          <li>✅ Adicionado feedback visual (toast) após entrar/sair de eventos na página Discover, aumentando a perceção de conclusão da ação.</li>
          <li>🔴 Inclusão de pontos vermelhos em novos Eventos e Chats, ajudando o utilizador a identificar conteúdos recém-adicionados (desaparecem após o primeiro clique).</li>
          <li>🔁 Otimização do comportamento após clique em eventos no mapa — o botão de join agora redireciona diretamente para a área de eventos.</li>
          <li>💬 Após adicionar um evento ao Chat, o sistema redireciona automaticamente para a interface de conversação, criando um fluxo mais natural.</li>
          <li>📱 Melhorias nos botões de navegação e estados visuais — agora o estado da página corresponde corretamente ao ícone ativo da barra inferior.</li>
        </ul>

        <p>📄 Para consultar os dados e análise completos da avaliação com utilizadores, visite o seguinte documento (em português):</p>
        <ul>
          <li><a href="pdfs/同学评估/Av_PF.pdf" target="_blank">📗 Avaliação com Utilizadores</a></li>
        </ul>
        <p>Se precisar de visualizar o conteúdo em chinês, inglês ou outro idioma, recomendamos o uso da extensão “Immersive Translate”.</p>

        <p>Versão atual: <strong>v1.1.1</strong>.</p>

      `
  };
  