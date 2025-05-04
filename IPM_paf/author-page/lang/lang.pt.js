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
        <p>Com base no feedback do professor, fiz algumas melhorias e ajustes funcionais no protótipo nesta nova versão. Para documentar essas alterações, criei um novo módulo chamado “📣 Feedback” nesta página do autor, onde organizo os comentários recebidos, as soluções aplicadas e os planos futuros.</p>
        <p>Além disso, como na próxima aula os colegas irão avaliar o protótipo com base em heurísticas, os resultados também serão incluídos nesse módulo.</p>
        <p>O código-fonte permanece estruturalmente inalterado (pelo menos que eu me lembre... estou meio confuso 😵‍💫). As secções “🚀 Melhorias Futuras” e “⚠️ Limitações” também serão atualizadas com mais conteúdo e reflexões.</p>
        <p>Versão atual: <strong>v1.0.1</strong>.</p>

        <hr>
        <p>Após receber mais feedback do professor, realizei alguns pequenos ajustes e atualizei para a versão <strong>v1.0.2</strong>:</p>
        <ul>
          <li>Adicionei uma página de Login com otimização para dispositivos móveis e ajustes na barra de navegação.</li>
          <li>Adicionei uma nota de uso do Smartwatch na página Tarefa para ajudar os utilizadores a encontrar mais facilmente a interface do relógio.</li>
          <li>Atualizei as descrições nas seções "📣 Feedback" e "📂 Estrutura de Código" para refletir a versão atual do desenvolvimento.</li>
        </ul>
        <p>Esta atualização envolveu uma carga de trabalho relativamente pequena, focando principalmente na melhoria da experiência básica do utilizador e da documentação.</p>
        <p><strong>Versão atual: v1.0.2.</strong></p>
      `,
      structure: `
      <h2>📂 Estrutura do Código</h2>
      <p>Este projeto utiliza HTML, CSS, JavaScript e LocalStorage. O arquivo HTML incorpora os conteúdos principais do smartphone e do smartwatch, alternando as seções com lógica de mostrar/ocultar. Embora seja simples de implementar, esta abordagem limita a escalabilidade e a manutenção. Futuramente, poderá ser adotada uma arquitetura modular de múltiplas páginas.</p>
      <p>Os arquivos CSS e JS são organizados de forma modular e aninhada, separando estilo e lógica. Contudo, o aninhamento profundo e conflitos de estilo ocasionais aumentam a complexidade da manutenção.</p>
      <p>Abaixo está a estrutura atual do projeto (atualizada para v1.0.2):</p>
      <ul style="padding-left: 24px;">
        <li><strong>main/</strong>: pasta raiz com a página de entrada e recursos principais</li>
        <li>├── index.html</li>
        <li>├── main.css</li>
        <li><strong>author-page/</strong>: recursos da página do autor</li>
        <li><strong>button/</strong>: estilos de botões reutilizáveis</li>
        <li><strong>data/</strong>: dados de exemplo (eventos iniciais, etc.)</li>
        <li><strong>icons/</strong>: todos os ícones (bandeiras, funções, etc.)</li>
        <li><strong>smartphone/</strong>: conteúdo da versão móvel</li>
        <li>├── css/: estilos (phone.css, nav.css, warn.css, etc.)</li>
        <li>├── js/: lógica (nav.js, warn.js, header.js, etc.)</li>
        <li>└── content/: páginas principais</li>
        <li>    ├── home/, event/, discover/, help/, menu/</li>
        <li>    ├── login/ (novo: página de login)</li>
        <li>    └── event-detail/ (página de detalhes acessada por Events ou Discover)</li>
        <li><strong>smartwatch/</strong>: conteúdo do smartwatch</li>
        <li>├── watch.css: layout e estilos do relógio</li>
        <li>└── content/: tela e lógica de check-in</li>
      </ul>
      <p><code>event-detail</code> é gerido separadamente pois é acessado tanto a partir de Events quanto de Discover.</p>
      <p>Esta estrutura será ajustada conforme novas funcionalidades forem desenvolvidas. (Versão atual v1.0.2)</p>
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
      `
  };
  