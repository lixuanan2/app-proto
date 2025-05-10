let currentChatName = null;

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send-btn');
  const backBtn = document.getElementById('back-to-chatlist');

  const deleteBtn = document.getElementById('delete-chat-btn');
  const popup = document.getElementById('chat-delete-popup');
  const confirmBtn = document.getElementById('confirm-delete-chat');
  const cancelBtn = document.getElementById('cancel-delete-chat');


  // 返回按钮
  backBtn?.addEventListener('click', () => {
    document.getElementById('page-chat-detail').style.display = 'none';
    document.getElementById('page-chatlist').style.display = 'block';
    document.getElementById('header-title').textContent = 'Chats';
  });

  // 点击发送按钮
  sendBtn?.addEventListener('click', sendMessage);

  // 按 Enter 键也发送
  input?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  });

  // 👆 点击删除按钮 => 显示弹窗
  deleteBtn?.addEventListener('click', () => {
    popup.style.display = 'flex';
  });

  // ❌ 取消按钮 => 关闭弹窗
  cancelBtn?.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  // ✅ 确认删除按钮
  confirmBtn?.addEventListener('click', () => {
    if (!currentChatName) return;
    const chats = JSON.parse(localStorage.getItem('myChats')) || [];
    const updatedChats = chats.filter(c => c.eventName !== currentChatName);
    localStorage.setItem('myChats', JSON.stringify(updatedChats));

    // 重置状态，关闭弹窗，跳转回 chat list
    popup.style.display = 'none';
    currentChatName = null;
    document.getElementById('page-chat-detail').style.display = 'none';
    document.getElementById('page-chatlist').style.display = 'block';
    document.getElementById('header-title').textContent = 'Chats';
    window.updateChatList?.();
  });
});

function sendMessage() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text || !currentChatName) return;

  const chatData = JSON.parse(localStorage.getItem('myChats')) || [];
  const targetChat = chatData.find(c => c.eventName === currentChatName);
  if (!targetChat) return;

  const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  targetChat.messages.push({
    sender: "You",
    text: text,
    time: timeNow
  });
  targetChat.lastTime = timeNow;

  localStorage.setItem('myChats', JSON.stringify(chatData));
  input.value = '';
  renderChatDetail(currentChatName);
  window.updateChatList?.();
}

// 显示 chat detail 页面（暴露给外部调用）
function showChatDetail(name) {
  currentChatName = name;
  document.querySelectorAll('.page-section').forEach(p => p.style.display = 'none');
  document.getElementById('page-chat-detail').style.display = 'block';

  const headerTitle = document.getElementById('header-title');
  if (headerTitle) headerTitle.textContent = name;
  const chatTitle = document.getElementById('chat-title');
  if (chatTitle) chatTitle.textContent = name;

  renderChatDetail(name);

  // 自动聚焦输入框
  document.getElementById('chat-input')?.focus();
}

function renderChatDetail(name) {
  const msgArea = document.getElementById('chat-detail-msgs');
  msgArea.innerHTML = '';

  const chatData = JSON.parse(localStorage.getItem('myChats')) || [];
  const chat = chatData.find(c => c.eventName === name);
  if (!chat) return;

  chat.messages.forEach(msg => {
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble ' + (msg.sender === 'You' ? 'right' : 'left');
    bubble.innerHTML = `
      <strong>${msg.sender}</strong><br>
      ${msg.text}<br>
      <span style="font-size: 11px; color: #888;">${msg.time}</span>
    `;
    msgArea.appendChild(bubble);
  });

  // 滚动到底部
  msgArea.scrollTop = msgArea.scrollHeight;
}

window.showChatDetail = showChatDetail;
