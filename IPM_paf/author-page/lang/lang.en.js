window.langEN = {
    nav: {
      intro: "About the Author",
      structure: "Code Structure",
      drawbacks: "Limitations",
      future: "Future Improvements",
      feedback: "Feedback"
    },
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

        <hr>
        <p>⚠️ Note: As the update history grows, this author page will now list version logs in <strong>reverse chronological order</strong>. The v1.0.0 introduction will always remain at the top for quick reference.</p>

        <hr>
        <p>This version marks the second stage of the proto, which I define as <strong>v1.1.0</strong>.</p>

        <p>In this update, I added three new tasks (Tarefas): a chat feature on the Events page that simulates group messaging, the ability to add an event to the chat list from the Event Detail page, and a "Discover in Map" function that includes the user's position and three event pins with clickable jump-to-detail logic. The goal was to simulate an exploratory experience.</p>

        <p>To be honest, these features are quite rough. On one hand, I was very short on time; on the other, some changes in the course requirements were unexpected. One small complaint I have is that we were not informed in advance that three more tasks would be required. This last-minute demand heavily constrained my navigation (nav) structure. Due to limited space, I couldn’t fit three more entries into the main nav, so I had to rely on floating buttons and subpages — which was far from ideal and clearly impacted my design flow.</p>

        <p>Of course, I’m also responsible. I didn’t take scalability into account early on, and that made things harder later. It’s a lesson learned — in future projects like this, I’ll pay more attention to flexibility and extensibility from the start.</p>

        <p>Still, I didn’t give up. I spent considerable time thinking through the logic and ended up implementing a full set of features around chat and map interactions. The user experience — from message sending and deleting to map pin highlights and scroll-to-card transitions — is something I’m actually quite satisfied with. So even though this update came with frustration, I do feel some pride in what I pulled off.</p>

        <p>Altogether, I’ve spent around 45–50 hours on this project. Probably more. Honestly, it’s been too much — a waste, in some sense. I don’t plan to continue working on this proto much further. I hope you understand.</p>

        <p><strong>Current version: v1.1.0</strong></p>


        <hr>
        <p>After receiving feedback from classmates, I developed version <strong>v1.0.3</strong> of this prototype.</p>
        <p>This update mainly responds to issues raised during the heuristic evaluation, including language inconsistency, missing feedback for user actions, lack of input validation, and confusing logic in the smartwatch interface. Based on the feedback, I created a basic language package, added several user feedback prompts, improved the layout using CSS, introduced some form validation, and simplified the smartwatch behavior.</p>
        <p>To be honest, I'm not very satisfied with this version.</p>
        <p>Some of the suggestions were indeed valuable, but too difficult to implement given the current structure (pure frontend with LocalStorage). Properly supporting them would require a full logic refactor, which I couldn’t manage at this stage.</p>
        <p>Also, my previous version was more polished. Now, rushing for deadlines and mandatory features, I didn’t have enough time to refine details — so the overall experience might have suffered a bit.</p>
        <p>On top of that, the professor has asked for three new tasks to be added, which I’ll work on in the next version.</p>
        <p>Frankly speaking, I’m handling several more important projects in parallel, and I’m really low on time and energy right now.</p>
        <p>So from this version on, I’ve decided to stop “beautifying” the prototype. I’ll just focus on delivering functionality and meeting the requirements. It’s a small compromise, I suppose…</p>
        <p><strong>Maybe I’ve lost my original intention. Sorry for that.</strong></p>
        <p>Alright, I’ll go work on the new tasks now. See you in the next version.</p>
        <p><strong>Current version: v1.0.3</strong></p>

        <hr>
        <p>After receiving further feedback from the professor, I made some minor adjustments and updated to <strong>v1.0.2</strong>:</p>
        <ul>
          <li>Added a Login page with mobile optimization and navigation bar adjustments.</li>
          <li>Added a Smartwatch usage note on the Tarefa page to help users more easily find the watch interface.</li>
          <li>Updated the descriptions in the "📣 Feedback" and "📂 Code Structure" sections to align with the current development version.</li>
        </ul>
        <p>This update involved a relatively small workload, mainly focusing on enhancing the basic user experience and improving documentation.</p>
        <p><strong>Current version: v1.0.2.</strong></p>

        <hr>
        <p>Following the instructor’s feedback, I’ve made several functional improvements and updates to the prototype in this new version. To clearly document these changes, I’ve added a new section on this author page called “📣 Feedback”, which organizes teacher comments, my responses, and future plans.</p>
        <p>Moreover, since the next class will include peer heuristic evaluations of the prototype, those evaluations will also be recorded there.</p>
        <p>The code structure remains mostly unchanged (at least... I *think* I didn’t touch anything 🤯). The sections “🚀 Future Improvements” and “⚠️ Limitations” are also planned to be updated with additional ideas and notes.</p>
        <p>Current version: <strong>v1.0.1</strong>.</p>
      `,
      structure: `
      <h2>📂 Code Structure</h2>
      <p>This project uses HTML, CSS, JavaScript, and LocalStorage. It adopts a single-page structure (SPA), where all pages and popups are handled by showing/hiding elements. Although not optimal for modular expansion, this approach greatly simplifies early development and is adopted in the current version. A multi-page structure may be considered in future updates.</p>
      <p>CSS and JS are organized in modular folders by page or function, with separated styling and logic. Some components, such as event detail views, map popups, and language modules, are reused across pages. Structure overview:</p>
      <p>The following is the core structure as of <code>v1.1.0</code>:</p>

      <ul style="padding-left: 24px;">
        <li><strong>main/</strong>: Main directory with entry page and global styles</li>
        <li>├── index.html</li>
        <li>├── main.css</li>

        <li><strong>author-page/</strong>: Author info and multilingual support</li>
        <li><strong>buttons/</strong>: Floating buttons (style & logic)</li>
        <li><strong>data/</strong>: Local data (events, chats, etc.)</li>
        <li><strong>icons/</strong>: Icon resources (flags, avatars, UI icons)</li>
        <li><strong>lang/</strong>: Language system (EN/PT/ZH)</li>

        <li><strong>smartphone/</strong>: Smartphone UI</li>
        <li>├── css/: Shell, navbar, alerts</li>
        <li>├── js/: Navigation, alerts, language switching</li>
        <li>└── content/: Functional page modules</li>
        <li>　├── home-page/, event/, discover/, help/, menu/</li>
        <li>　├── login/: Login screen</li>
        <li>　├── chat-list/: Chat list & details (add/delete)</li>
        <li>　├── event-detail/</li>
        <li>　│　├── detail/: From Events page</li>
        <li>　│　├── detail2/: From Discover page</li>
        <li>　│　└── member/: Member popups (add/view/delete)</li>
        <li>　└── discover/map/: Map popup + highlight on return</li>

        <li><strong>smartwatch/</strong>: Smartwatch UI module</li>
        <li>├── css/: Watch layout, flashing arrow</li>
        <li>└── js/: Check-in logic</li>
      </ul>

      <p>The <code>event-detail</code> module is split into <code>detail</code> and <code>detail2</code> to handle logic based on the entry page (Events vs Discover).</p>
      <p>This structure will evolve as more features and UI animations are introduced. (Current version: <strong><code>v1.1.0</code></strong>)</p>


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
          <li>Resolve all the issues mentioned in the “Limitations” section.</li>
          <li>Add sorting features to the <strong>Events page</strong> (e.g., by creation time, alphabetical, date), and allow toggle buttons to switch modes.</li>
          <li>The <strong>Menu section</strong> remains under development and will be tackled after structural refactoring.</li>
          <li>If the member list in Event Details is too long, it will be collapsed with a “...” icon, which reveals the full list on click.</li>
          <li>Avatar designs are currently limited: only static icons are available in this front-end prototype. Future backend (e.g., Node.js) will support personalized avatar options.</li>
          <li>There are still many areas for optimization, and improvements will be made progressively.</li>
        </ol>
        <p>Current version: <strong>v1.0.1</strong>.</p>
        `,
        feedback: `
        <h2>📣 Instructor Feedback · v1.0.0 -> v1.0.1</h2>
        <ul>
          <li><strong>Event source is unclear:</strong> Initial events use blue borders, user-created events use green, and imported Discover events keep the yellow border (same as in Discover).</li>
          <li><strong>Create Event layout is suboptimal:</strong> Improve CSS to better fit mobile proportions.</li>
          <li><strong>Too many members in Event Details:</strong> Automatically collapse if members exceed a threshold, showing a “...” icon that reveals the full list.<em style="color:#888">(This feature has been postponed to future improvements)</em></li>
          <li><strong>Search not refined enough:</strong> A dropdown will be added to choose between name, tags, and location. Default is name.</li>
          <li><strong>Avatars too limited:</strong> Since this is a front-end-only prototype, only static icons are supported. In future with backend (e.g., Node.js), richer avatar management will be explored.</li>
          <li><strong>Smartwatch lacks guidance:</strong> A blinking effect has been added to the inactive GPS icon to guide users to check in.</li>
        </ul>
        <p>In preparation for the student evaluation next week, I also plan to:</p>
        <ul>
          <li>📌 Add a Tarefa button on the Home page to show pending tasks</li>
          <li>📌 Reorder tasks based on difficulty and priority</li>
          <li>📌 Continue addressing issues listed in the “Limitations” section</li>
        </ul>

        <hr>
      
        <h2>📣 Teacher Feedback · v1.0.1 -> v1.0.2</h2>
        <ul>
          <li><strong>New Login Page:</strong> A dedicated login interface was added, optimized for mobile screens. Navigation locking and dynamic header title update after login were implemented.</li>
          <li><strong>Smartwatch Accessibility Issue:</strong> A note was added under the task page to guide users to the left panel to open the Smartwatch interface.</li>
        </ul>
        <p>This update mainly addresses the missing login entry and guidance issues from version v1.0.1, further improving the overall user experience and UI details.</p>
        <p>Current version: <strong>v1.0.2</strong>.</p>

        <hr>

        <h2>📣 Peer Evaluation Feedback · v1.0.2 -> v1.0.3</h2>
        <p>This minor update is based on the Heuristic Evaluation activity conducted in class. According to feedback from classmates, improvements were made to the prototype regarding user interaction, input validation, and system visibility.</p>

        <ul>
          <li>🌐 Initial language package structure established, supporting Chinese, English, and Portuguese. Buttons, page titles, and placeholders are now consistent across languages.</li>
          <li>🧑‍💻 Input restrictions added (e.g., event names cannot be only numbers; phone numbers must not contain letters).</li>
          <li>🎨 Added toast notifications and animation feedback for key actions such as adding members and completing check-in.</li>
          <li>⛔ Enhanced permission control: only the event creator can remove members.</li>
          <li>⌚ Optimized smartwatch logic and visual feedback during the check-in process.</li>
        </ul>

        <p>Some suggestions, though valid, were not implemented due to technical complexity—such as syncing member lists between Discover and Event Detail, or switching between events on the smartwatch.</p>

        <p>📄 For full feedback details and implementation notes, please see the following bilingual documents:</p>
        <ul>
          <li><a href="pdfs/同学评估/启发式评估.pdf" target="_blank">📘 Chinese: Heuristic Evaluation Summary</a></li>
          <li><a href="pdfs/同学评估/AV.pdf" target="_blank">📗 Portuguese: Avaliação heurística</a></li>
        </ul>

        <p>For further technical reasoning and tradeoffs, please refer to the "Author Introduction" and "Drawbacks" sections on this page.</p>
        <p>Current version: <strong>v1.0.3</strong>.</p>
      `
  };
  