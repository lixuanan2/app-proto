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
        <p>Following the instructor’s feedback, I’ve made several functional improvements and updates to the prototype in this new version. To clearly document these changes, I’ve added a new section on this author page called “📣 Feedback”, which organizes teacher comments, my responses, and future plans.</p>
        <p>Moreover, since the next class will include peer heuristic evaluations of the prototype, those evaluations will also be recorded there.</p>
        <p>The code structure remains mostly unchanged (at least... I *think* I didn’t touch anything 🤯). The sections “🚀 Future Improvements” and “⚠️ Limitations” are also planned to be updated with additional ideas and notes.</p>
        <p>Current version: <strong>v1.0.1</strong>.</p>
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
      `
  };
  