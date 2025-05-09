function initLanguage() {
    const defaultLang = langData.defaultLang || 'en'; // 获取默认语言
    setLang(defaultLang); // 设置默认语言

    // 确保语言图标存在并为每个语言图标绑定点击事件
    const langIcons = document.querySelectorAll(".lang-icon");
    
    if (langIcons && langIcons.length > 0) {
        langIcons.forEach(icon => {
            // 为每个语言图标绑定点击事件
            icon.addEventListener("click", () => {
                const lang = icon.dataset.lang; // 获取点击的语言数据
                setLang(lang); // 切换语言
            });
        });
    } else {
        console.warn("Language icons not found!"); // 输出警告信息
    }

    // 检查并执行任何初步的语言初始化任务（如页面加载时显示的默认语言内容）
    updateInitialContentForLanguage(defaultLang);
}

// 可选：执行一些初始化任务，确保页面加载时默认语言已显示
function updateInitialContentForLanguage(lang) {
    // 在这里可以添加任何额外的初始化任务，确保页面的默认内容与语言匹配
    console.log(`Initializing content for language: ${lang}`);
}

// 在DOM完全加载后执行初始化
document.addEventListener('DOMContentLoaded', initLanguage);
