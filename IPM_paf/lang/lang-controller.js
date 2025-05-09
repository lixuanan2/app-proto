let currentLang = langData.defaultLang || 'en';

function initLanguage() {
    setLang(currentLang);
    bindLanguageSwitch();
}

function setLang(lang) {
    currentLang = lang;

    // 调用 handler.js 中的更新函数
    updateHomeTexts(lang);
    updateLoginTexts();
    updateIntroTexts();
    updateTaskTexts();
    updateLangPageTexts();
    updateEventsTexts();
    updateEventDetailTexts();
    updateDiscoverTexts();
    updateHelpPage(lang); 
    updateMenuTexts(lang);
    updateNavTexts(lang);

    const visiblePage = document.querySelector('.page-section:not([style*="display: none"])');
    if (visiblePage && typeof updateHeaderTexts === 'function') {
        updateHeaderTexts(lang, visiblePage.id);
    }
}

function bindLanguageSwitch() {
    document.querySelectorAll('.lang-icon').forEach(icon => {
        icon.addEventListener('click', () => {
            const lang = icon.dataset.lang;
            setLang(lang);
        });
    });
}
