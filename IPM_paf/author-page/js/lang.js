const langContent = {
    zh: {
      intro: `
        <h2>👤 作者介绍</h2>
        <p>这是一个 FCUL 信息工程专业 2024/25 学年 IPM 科目的作业，目标是开发一个高保真（PAF）原型，
        用于模拟一个组织社交活动的移动端 App（为主）和智能手表端（为辅）的基本功能。</p>
        <p>由于该课程的实验部分主要教授的是 HTML、CSS 和 JavaScript，因此我选择使用这些原生语言进行开发，
        而非使用 Justinmind、Angular 等其他工具。</p>
        <p>本作者页主要用于整理项目结构、编程逻辑与后续计划。目前包含如下部分：</p>
        <ul>
          <li>📌 项目介绍与动机</li>
          <li>🧩 代码结构解读</li>
          <li>⚠️ 当前不足</li>
          <li>🚀 后续优化方向</li>
        </ul>
        <p>未来内容可能根据代码迭代进行更新，也可能增加新的导航栏目（如：操作说明、启发式评估等）。
        当前版本为 <strong>v1.0.0</strong>。</p>
      `,
      structure: `
      <h2>📂 代码结构</h2>
      <p>本项目使用了 HTML、CSS、JavaScript 以及 LocalStorage 技术。HTML 文件中包含了手机和手表的所有主要内容，各个页面和弹窗均集成在同一页面中，通过「显示 / 隐藏」元素的方式实现切换。这种设计虽然在实现上较为直接，但对于后续维护和功能拓展并不友好——这一点在项目早期已考虑到，但为降低开发复杂度，最终仍采用了当前方案。如果未来要进一步完善系统，可能会改为多 HTML 页面模块的架构方式。</p>
      <p>在 CSS 和 JavaScript 层面，我使用了嵌套式文件结构，将各个功能模块清晰拆分，有效实现样式与逻辑的分离，有利于版面控制与事件绑定。然而，由于 CSS 部分组件间存在耦合关系，导致某些样式规则冲突，结构不稳定；又因为模块之间层级关系复杂，排查问题与修复相对困难。</p>
      <p>以下是当前版本的核心目录结构（v1.0.0）：</p>
      <ul style="padding-left: 24px;">
        <li><strong>main/</strong>：项目主目录，包含入口页面与核心资源</li>
        <li>├── index.html</li>
        <li>├── main.css</li>
        <li><strong>author-page/</strong>：作者页面专属资源</li>
        <li><strong>button/</strong>：通用按钮样式文件</li>
        <li><strong>data/</strong>：示例数据（如初始化活动信息）</li>
        <li><strong>icons/</strong>：全部图标资源（中英葡国旗、功能图标等）</li>
        <li><strong>smartphone/</strong>：手机页面全部内容</li>
        <li>├── css/：样式文件</li>
        <li>│   ├── phone.css：手机模型外观布局</li>
        <li>│   ├── nav.css：底部导航栏</li>
        <li>│   └── warn.css：未开发功能弹窗反馈</li>
        <li>├── js/：交互逻辑</li>
        <li>│   ├── nav.js、warn.js、header.js 等</li>
        <li>└── content/：内容区域页面</li>
        <li>    ├── home/、event/、discover/、help/、menu/：五个主页面</li>
        <li>    └── event-detail/：子页面，用于查看单个活动详情</li>
        <li><strong>smartwatch/</strong>：智能手表内容</li>
        <li>├── watch.css：手表造型及布局</li>
        <li>└── content/：手表界面内容（如 Check-in 流程）</li>
      </ul>
      <p>关于 <code>event-detail</code> 独立抽出作为独立页面，而非归入 <code>event</code> 文件夹，是因为该页面既可从 Events 页面跳转，也可从 Discover 页面进入，因此将其独立管理更加合理。</p>
      <p>以上结构为当前版本（v1.0.0）设计方案，未来版本可能根据扩展与用户体验优化进一步迭代与调整。</p>
    `,
      drawbacks: `
        <h2>⚠️ 不足之处</h2>
        <p>本项目仍有不少不足和可以优化的地方。以下问题尚未严格排序，后续可能会根据优先级进行调整。</p>
        <ul>
            <li>📦 HTML、CSS 与 JS 结构嵌套较混乱，逻辑交织复杂，排查困难。</li>
            <li>💡 <strong>解决方式：</strong>未来可能考虑使用 Angular 或其他前端框架重构结构。</li>
            <li>📱 Home 和 Help 页面的滚动条问题导致手机 header 跟随滚动，因此采用字体缩放规避，但这可能影响用户体验。</li>
            <li>💡 <strong>原因：</strong>CSS 部分存在逻辑冲突。</li>
            <li>⌚ 手表部分排版较为粗糙，不如手机部分美观。</li>
            <li>💡 <strong>原因：</strong>身体原因，开发后期太累，耐心下降。</li>
            <li>🚫 手机部分功能的 warning 弹窗并非全都以手机组件形式展示，而是网页上独立的提示。</li>
            <li>💡 <strong>原因：</strong>我太懒了（但这部分容易改）。</li>
            <li>🧑‍🤝‍🧑 删除成员没有设定管理员权限，所有人都可踢人。</li>
            <li>💡 <strong>原因：</strong>实现逻辑较复杂，使用 LocalStorage 很难实现角色识别和权限控制，如要实现需要更完备的 JSON 架构。这属于后端范畴。</li>
            <li>🔁 Discover 页面中的 member list 与 Event Detail 页面中的 member list 无法双向同步。</li>
            <li>💡 <strong>原因：</strong>我太懒了，不想做。</li>
        </ul>
        <p>总之，懒，是一切 Bug 的根源。</p>
        `,
      future: `
        <h2>🚀 后续优化方向</h2>
        <ol>
            <li>对“不足之处”部分提到的所有问题进行优化。</li>
            <li>在 <strong>Events 页面</strong> 增加排序功能（如：按添加时间、字母顺序、日期排序等），并提供切换按钮实现排序方式切换。</li>
            <li><strong>Menu 部分</strong> 仍为待开发状态，但由于涉及页面众多，计划在重构架构之后再进行开发。</li>
            <li>系统仍有大量可优化的地方，将根据需要逐步进行改进。</li>
        </ol>
        <p>当前版本为 <strong>v1.0.0</strong>。</p>
        `
    },
  
    en: {
      intro: `
        <h2>👤 About the Author</h2>
        <p>This is a PAF assignment for the 2024/25 IPM course of the Information Engineering degree at FCUL.
        The goal is to build a high-fidelity prototype for simulating the core functions of a mobile app (mainly)
        and a smartwatch app (partially) related to social event organization.</p>
        <p>Since the lab classes mainly cover HTML, CSS, and JavaScript, I decided not to use Justinmind or Angular
        for implementation, but instead relied on native web technologies.</p>
        <p>This author page aims to introduce the project structure, code logic, and future plans. It includes:</p>
        <ul>
          <li>📌 Project Motivation</li>
          <li>🧩 Code Structure</li>
          <li>⚠️ Current Limitations</li>
          <li>🚀 Future Improvements</li>
        </ul>
        <p>This page may evolve with the code and may include additional sections in the future
        (e.g., user guide, heuristic evaluation). Current version: <strong>v1.0.0</strong>.</p>
      `,
      structure: `
      <h2>📂 Code Structure</h2>
      <p>This project is built using HTML, CSS, JavaScript, and LocalStorage. The HTML file contains all components of both the phone and smartwatch UIs. All pages and popups are embedded in a single document and shown/hidden as needed. While this method is simple and direct, it’s not scalable for future development and maintainability—something I anticipated early but postponed for simplicity. In future iterations, a multi-page architecture might be adopted.</p>
      <p>CSS and JS files are organized modularly. This promotes separation of style and logic and makes adding event listeners easier. However, due to overlapping rules and deep nesting, CSS sometimes causes style conflicts and structural instability. Debugging and editing become harder as a result.</p>
      <p>Below is the current directory structure (v1.0.0):</p>
      <ul style="padding-left: 24px;">
        <li><strong>main/</strong>: root folder with entry page and main assets</li>
        <li>├── index.html</li>
        <li>├── main.css</li>
        <li><strong>author-page/</strong>: files for the author page</li>
        <li><strong>button/</strong>: button component styles</li>
        <li><strong>data/</strong>: sample data (e.g. initial events)</li>
        <li><strong>icons/</strong>: all icons (flags, buttons, etc.)</li>
        <li><strong>smartphone/</strong>: phone app content</li>
        <li>├── css/</li>
        <li>│   ├── phone.css (phone frame)</li>
        <li>│   ├── nav.css (bottom navigation)</li>
        <li>│   └── warn.css (popup warning for unfinished features)</li>
        <li>├── js/: nav.js, warn.js, header.js etc.</li>
        <li>└── content/: pages for each section</li>
        <li>    ├── home/, event/, discover/, help/, menu/</li>
        <li>    └── event-detail/: reused by both Events and Discover pages</li>
        <li><strong>smartwatch/</strong>: smartwatch UI</li>
        <li>├── watch.css: watch layout and shape</li>
        <li>└── content/: check-in logic and display</li>
      </ul>
      <p><code>event-detail</code> was placed outside <code>event/</code> because it is used by both Events and Discover pages.</p>
      <p>This structure will evolve (v1.0.0). Adjustments will be made as new features are developed.</p>
    `,
      drawbacks:  `
      <h2>⚠️ Limitations</h2>
      <p>This project still has many limitations. The following issues are not sorted by priority, but may be rearranged later:</p>
      <ul>
        <li>📦 The HTML, CSS, and JS structure is nested and somewhat messy, making debugging harder.</li>
        <li>💡 <strong>Suggested solution:</strong> Consider using Angular or other frameworks in future iterations.</li>
        <li>📱 Scrollbars on the Home and Help pages cause the mobile header to move with the scroll, so font size reduction was used to mitigate it — but that hurts user experience.</li>
        <li>💡 <strong>Cause:</strong> Conflicting logic in the CSS files.</li>
        <li>⌚ The smartwatch UI is less polished and aesthetically pleasing than the phone version.</li>
        <li>💡 <strong>Cause:</strong> I was too tired near the end of development and lost patience.</li>
        <li>🚫 Some mobile warnings are shown on the webpage instead of using the in-device popup component.</li>
        <li>💡 <strong>Cause:</strong> I was too lazy (but this is easy to fix).</li>
        <li>🧑‍🤝‍🧑 There’s no admin-only control over member deletion — anyone can remove others.</li>
        <li>💡 <strong>Cause:</strong> Too hard to implement with LocalStorage; needs more complex JSON data logic and is more backend related.</li>
        <li>🔁 Member lists in Discover and Event Detail pages are not synced.</li>
        <li>💡 <strong>Cause:</strong> I was too lazy to implement it.</li>
      </ul>
      <p>In short, laziness is the root of all bugs.</p>
    `,
      future: `
        <h2>🚀 Future Improvements</h2>
        <ol>
            <li>Optimize all issues listed in the "Limitations" section.</li>
            <li>Add sorting functionality to the <strong>Events page</strong>, including options such as recent-first, alphabetical, or date-based sorting. A toggle button will be added to switch between modes.</li>
            <li>The <strong>Menu section</strong> is not yet implemented. Due to its complexity and many linked pages, it will be considered after structural refactoring.</li>
            <li>Other improvements will be made progressively based on iteration needs.</li>
        </ol>
        <p>Current version: <strong>v1.0.0</strong>.</p>
        `
    },
  
    pt: {
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
      `,
      structure: `
      <h2>📂 Estrutura do Código</h2>
      <p>Este projeto utiliza HTML, CSS, JavaScript e LocalStorage. O conteúdo do aplicativo móvel e do smartwatch está contido em um único arquivo HTML, onde as seções são alternadas com <em>mostrar/esconder</em>. Essa abordagem é prática, mas limita a escalabilidade e manutenção. Por simplicidade, mantive este modelo na v1.0.0, mas uma versão futura pode adotar arquitetura multi-página.</p>
      <p>Os arquivos CSS e JS são organizados modularmente. Isso ajuda na separação de lógica e estilo, especialmente na adição de eventos. No entanto, estilos conflitantes e profundidade de aninhamento causam instabilidade e dificultam a manutenção.</p>
      <p>Segue a estrutura atual do projeto (v1.0.0):</p>
      <ul style="padding-left: 24px;">
        <li><strong>main/</strong>: pasta principal com página de entrada</li>
        <li>├── index.html</li>
        <li>├── main.css</li>
        <li><strong>author-page/</strong>: página do autor</li>
        <li><strong>button/</strong>: botões reutilizáveis</li>
        <li><strong>data/</strong>: dados de exemplo (eventos, etc.)</li>
        <li><strong>icons/</strong>: ícones diversos</li>
        <li><strong>smartphone/</strong>: conteúdo da versão móvel</li>
        <li>├── css/: phone.css, nav.css, warn.css</li>
        <li>├── js/: nav.js, warn.js, header.js</li>
        <li>└── content/: páginas home, event, discover, help, menu, event-detail</li>
        <li><strong>smartwatch/</strong>: conteúdo do smartwatch</li>
        <li>├── watch.css</li>
        <li>└── content/: tela de check-in</li>
      </ul>
      <p>O <code>event-detail</code> está separado porque é acessado tanto pelo Events quanto Discover.</p>
      <p>Esta estrutura (v1.0.0) poderá ser ajustada com base em melhorias futuras e feedback.</p>
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
            <li>Melhorar todos os pontos mencionados na secção "Limitações".</li>
            <li>Adicionar funcionalidades de ordenação à <strong>página de eventos</strong>, como ordem alfabética, mais recentes primeiro, ou por data. Um botão de alternância será incluído para trocar entre os modos.</li>
            <li>A <strong>secção Menu</strong> ainda não está desenvolvida. Como envolve muitos subcomponentes, será considerada após reestruturação do sistema.</li>
            <li>Outras melhorias serão implementadas gradualmente conforme a evolução do projeto.</li>
        </ol>
        <p>Versão atual: <strong>v1.0.0</strong>.</p>
        `
    }
  };
  