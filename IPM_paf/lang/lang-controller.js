// 初始化 currentLang 并设置语言
let currentLang = langData.defaultLang || 'en'; // 初始化为默认语言

// 初始化语言
function initLanguage() {
    setLang(currentLang); // 设置当前语言

    // 绑定语言切换
    bindLanguageSwitch();
}

// 切换语言
function setLang(lang) {
    currentLang = lang;  // 更新当前语言

    // 更新各个页面内容
    updateHomeTexts(currentLang);
    updateLoginTexts();
    updateIntroTexts();
    updateTaskTexts();
    updateLangPageTexts();
    updateEventsTexts();
    updateEventDetailTexts();
    updateDiscoverTexts();
    updateHelpPage(lang); 
    updateMenuTexts(currentLang);
    updateHeaderTexts(currentLang);
}

// 按钮绑定
function bindLanguageSwitch() {
    document.querySelectorAll('.lang-icon').forEach(icon => {
        icon.addEventListener('click', () => {
            const lang = icon.dataset.lang; // 获取语言数据
            setLang(lang); // 切换语言
        });
    });
}

// 登录页更新
function updateLoginTexts() {
    const t = langData.loginTexts[currentLang];  // 使用 currentLang
    if (!t) return;
  
    const loginTitle = document.querySelector("#page-login h2");
    if (loginTitle) loginTitle.innerText = t.title;
  
    const username = document.getElementById("login-username");
    if (username) username.placeholder = t.username;
  
    const password = document.getElementById("login-password");
    if (password) password.placeholder = t.password;
  
    const loginBtn = document.getElementById("login-btn");
    if (loginBtn) loginBtn.innerText = t.loginBtn;
  
    const loginHelper = document.querySelector(".login-helper");
    if (loginHelper) {
        loginHelper.innerHTML = `<a href="#">${t.forgot}</a> | <a href="#">${t.signup}</a>`;
    }
}

// intro 页面更新
function updateIntroTexts() {
    const m = langData.introMessages[currentLang] || langData.introMessages['en'];  // 使用 currentLang
    const homeMessage = document.getElementById("home-message");
    if (homeMessage) {
        homeMessage.innerHTML = m.replace(/\n/g, "<br>");
    }
}

// task 页面更新
function updateTaskTexts() {
    const t = langData.taskTexts[currentLang];  // 使用 currentLang
    if (!t) return;
  
    const taskTitle = document.getElementById("task-title");
    if (taskTitle) taskTitle.innerText = t.title;
  
    const taskTh1 = document.getElementById("task-th1");
    if (taskTh1) taskTh1.innerText = t.th1;
  
    const taskTh2 = document.getElementById("task-th2");
    if (taskTh2) taskTh2.innerText = t.th2;
  
    const task1 = document.getElementById("task-1");
    if (task1) task1.innerText = t.task1;
  
    const task2 = document.getElementById("task-2");
    if (task2) task2.innerText = t.task2;
  
    const task3 = document.getElementById("task-3");
    if (task3) task3.innerText = t.task3;
  
    const task4 = document.getElementById("task-4");
    if (task4) task4.innerText = t.task4;
  
    const diff1 = document.getElementById("diff-1");
    if (diff1) diff1.innerText = t.diff1;
  
    const diff2 = document.getElementById("diff-2");
    if (diff2) diff2.innerText = t.diff2;
  
    const diff3 = document.getElementById("diff-3");
    if (diff3) diff3.innerText = t.diff3;
  
    const diff4 = document.getElementById("diff-4");
    if (diff4) diff4.innerText = t.diff4;
  
    const taskNote = document.getElementById("task-note");
    if (taskNote) taskNote.innerText = t.note;
}

// language 设置页更新
function updateLangPageTexts() {
    const t = langData.langPageTexts[currentLang];  // 使用 currentLang
    if (!t) return;
  
    const langTitle = document.querySelector("#page-lang .home-header span");
    if (langTitle) langTitle.innerText = t.title;
  
    const langDescription = document.querySelector("#page-lang p");
    if (langDescription) langDescription.innerText = t.description;
}

// events 页面更新
function updateEventsTexts() {
    const t = langData.eventsPageTexts[currentLang];  // 使用 currentLang
    if (!t) return;
  
    const eventHeader = document.querySelector("#page-events .event-header span");
    if (eventHeader) eventHeader.innerText = t.header;
  
    const submitEventBtn = document.getElementById("submit-event");
    if (submitEventBtn) submitEventBtn.innerText = t.addEventBtn;
  
    // 表单更新
    const form = t.form;
    if (form) {
        const eventTitle = document.querySelector("#page-events-add h2");
        if (eventTitle) eventTitle.innerText = form.title;
  
        const eventNameLabel = document.querySelector("label[for='event-name']");
        if (eventNameLabel) eventNameLabel.innerText = form.nameLabel;
  
        const eventName = document.getElementById("event-name");
        if (eventName) eventName.placeholder = form.namePlaceholder;
  
        const eventDateLabel = document.querySelector("label[for='event-date']");
        if (eventDateLabel) eventDateLabel.innerText = form.dateLabel;
  
        const eventLocationLabel = document.querySelector("label[for='event-location']");
        if (eventLocationLabel) eventLocationLabel.innerText = form.locationLabel;
  
        const eventLocation = document.getElementById("event-location");
        if (eventLocation) eventLocation.placeholder = form.locationPlaceholder;
  
        const eventTypeLabel = document.querySelector("label[for='event-type']");
        if (eventTypeLabel) eventTypeLabel.innerText = form.typeLabel;
  
        const eventType = document.getElementById("event-type");
        if (eventType) eventType.placeholder = form.typePlaceholder;
  
        const tagInputLabel = document.querySelector("label[for='tag-input']");
        if (tagInputLabel) tagInputLabel.innerText = form.tagsLabel;
  
        const tagInput = document.getElementById("tag-input");
        if (tagInput) tagInput.placeholder = form.tagPlaceholder;
  
        const tagList = document.getElementById("tag-list");
        if (tagList) tagList.innerText = form.tagListPrefix;
  
        const createEventBtn = document.getElementById("create-event-btn");
        if (createEventBtn) createEventBtn.innerText = form.btnCreate;
  
        const cancelEventBtn = document.getElementById("cancel-event-btn");
        if (cancelEventBtn) cancelEventBtn.innerText = form.btnCancel;
    }
}

// event detail 页面更新
function updateEventDetailTexts() {
    const t = langData.eventDetailTexts[currentLang];  // 使用 currentLang
    if (!t) return;
  
    const eventDetailTitle = document.querySelector("#page-events-detail h2");
    if (eventDetailTitle) eventDetailTitle.innerText = t.title;
  
    const detailName = document.getElementById("detail-name");
    if (detailName) detailName.previousSibling.textContent = `${t.labels.event}: `;
  
    const detailDate = document.getElementById("detail-date");
    if (detailDate) detailDate.previousSibling.textContent = `${t.labels.date}: `;
  
    const detailLocation = document.getElementById("detail-location");
    if (detailLocation) detailLocation.previousSibling.textContent = `${t.labels.location}: `;
  
    const detailType = document.getElementById("detail-type");
    if (detailType) detailType.previousSibling.textContent = `${t.labels.type}: `;
  
    const detailTags = document.getElementById("detail-tags");
    if (detailTags) detailTags.previousSibling.textContent = `${t.labels.tags}: `;
  
    const memberList = document.querySelector(".member-list p strong");
    if (memberList) memberList.innerText = `${t.labels.members}:`;
  
    const deleteEventBtn = document.getElementById("delete-event-btn");
    if (deleteEventBtn) deleteEventBtn.innerText = t.btnRemove;
}

// discover 页面更新
function updateDiscoverTexts() {
    const t = langData.discoverPageTexts[currentLang];  // 使用 currentLang
    if (!t) return;
  
    const discoverTitle = document.getElementById("discover-title");
    if (discoverTitle) discoverTitle.innerText = t.title;
  
    const searchType = document.getElementById("discover-search-type");
    if (searchType) {
      searchType.options[0].text = t.searchType.name;
      searchType.options[1].text = t.searchType.tags;
      searchType.options[2].text = t.searchType.location;
    }
  
    const searchInput = document.getElementById("discover-search-input");
    if (searchInput) searchInput.placeholder = t.searchPlaceholder;
}

// 添加成员弹窗更新
function updateMemberPopupTexts(lang) {
    const t = langData.memberPopupTexts[lang] || langData.memberPopupTexts['en'];
  
    // 更新添加成员弹窗
    const memberPopupTitle = document.querySelector('#member-popup h3');
    if (memberPopupTitle) memberPopupTitle.innerText = t.addTitle;
  
    const memberNameLabel = document.querySelector("label[for='member-name']");
    if (memberNameLabel) memberNameLabel.innerHTML = `${t.name} <span style="color:red;">*</span>`;
  
    const memberGenderLabel = document.querySelector("label[for='member-gender']");
    if (memberGenderLabel) memberGenderLabel.innerHTML = `${t.gender} <span style="color:red;">*</span>`;
  
    const memberPhoneLabel = document.querySelector("label[for='member-phone']");
    if (memberPhoneLabel) memberPhoneLabel.innerText = t.phone;
  
    const genderSelect = document.getElementById('member-gender');
    if (genderSelect) {
      genderSelect.options[0].text = t.genderOptions.select;
      genderSelect.options[1].text = t.genderOptions.male;
      genderSelect.options[2].text = t.genderOptions.female;
    }
  
    const createMemberBtn = document.getElementById('create-member-btn');
    if (createMemberBtn) createMemberBtn.innerText = t.btnCreate;
  
    const cancelMemberBtn = document.getElementById('cancel-member-btn');
    if (cancelMemberBtn) cancelMemberBtn.innerText = t.btnCancel;
  
    // 更新成员详情弹窗
    const memberInfoPopupTitle = document.querySelector('#member-info-popup h3');
    if (memberInfoPopupTitle) memberInfoPopupTitle.innerText = t.detailTitle;
  
    const memberName = document.querySelector("#popup-member-name");
    if (memberName) memberName.parentElement.firstChild.textContent = `${t.name}: `;
  
    const memberGender = document.querySelector("#popup-member-gender");
    if (memberGender) memberGender.parentElement.firstChild.textContent = `${t.gender}: `;
  
    const memberPhone = document.querySelector("#popup-member-phone");
    if (memberPhone) memberPhone.parentElement.firstChild.textContent = `${t.phone}: `;
  
    const removeMemberBtn = document.getElementById('remove-member-confirm');
    if (removeMemberBtn) removeMemberBtn.innerText = t.btnRemove;
  
    const cancelMemberInfoBtn = document.getElementById('cancel-member-info');
    if (cancelMemberInfoBtn) cancelMemberInfoBtn.innerText = t.btnClose;
}
