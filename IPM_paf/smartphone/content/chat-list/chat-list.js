// 点击右上角聊天按钮进入聊天列表页面
document.getElementById('chat-list-btn')?.addEventListener('click', () => {
  document.querySelectorAll('.page-section').forEach(p => p.style.display = 'none');
  document.getElementById('page-chatlist').style.display = 'block';

  // 更新标题（可选）
  const headerTitle = document.getElementById('header-title');
  if (headerTitle) headerTitle.textContent = 'Chats';

  // 🔁 每次点击都刷新聊天列表
  updateChatList();
});

// 点击返回按钮返回到 Events 页面
document.getElementById('back-to-events-from-chat')?.addEventListener('click', () => {
  document.getElementById('page-chatlist').style.display = 'none';
  document.getElementById('page-events').style.display = 'block';

  const headerTitle = document.getElementById('header-title');
  if (headerTitle) headerTitle.textContent = 'Events';
});

function updateChatList() {
  const chatWrapper = document.querySelector('.chatlist-wrapper');
  chatWrapper.innerHTML = '';

  const chatData = JSON.parse(localStorage.getItem('myChats')) || [];
  const flags = JSON.parse(localStorage.getItem('newChatFlags')) || {};

  chatData.forEach(chat => {
    const item = document.createElement('div');
    item.className = 'chat-item';
    item.innerHTML = `
      <img src="${chat.avatar}" class="chat-avatar" />
      <div class="chat-info">
        <div class="chat-name">${chat.eventName}</div>
        <div class="chat-preview">${chat.messages?.slice(-1)[0]?.text || ''}</div>
      </div>
      <div class="chat-time">${chat.lastTime || ''}</div>
    `;

    // ✅ 添加红点（如有）
    if (flags[chat.eventName]) {
      const dot = document.createElement('span');
      dot.className = 'chat-red-dot';
      item.appendChild(dot);
    }

    // ✅ 点击后清除红点并进入详情
    item.addEventListener('click', () => {
      if (flags[chat.eventName]) {
        delete flags[chat.eventName];
        localStorage.setItem('newChatFlags', JSON.stringify(flags));
        updateChatList();
      }
      showChatDetail(chat.eventName);
    });

    chatWrapper.appendChild(item);
  });
}

// ✅ 外部调用（如页面跳转或 LocalStorage 更新时刷新）
window.updateChatList = updateChatList;
