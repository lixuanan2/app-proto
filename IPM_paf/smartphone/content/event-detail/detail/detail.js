// 顶部定义索引
let currentEventIndex = null;
let currentMemberIndex = null;

document.addEventListener('DOMContentLoaded', () => {
  // ✅ 1. 显示事件详情
  function showEventDetail(index) {
    window.lastDetailSource = "event"; // 用于返回按钮判断来源
    currentEventIndex = index;
    const events = JSON.parse(localStorage.getItem('myEvents')) || [];
    const event = events[index];
    if (!event) return;

    // 填入基本信息
    document.getElementById('detail-name').textContent = event.name;
    document.getElementById('detail-date').textContent = event.date;
    document.getElementById('detail-location').textContent = event.location || '-';
    document.getElementById('detail-type').textContent = event.type || '-';
    document.getElementById('detail-tags').textContent =
      event.tags?.length > 0 ? event.tags.map(t => `#${t}`).join(' ') : '-';

      const chatBtn = document.getElementById('add-to-chat-btn');
      if (chatBtn) {
        chatBtn.disabled = false;
        chatBtn.style.opacity = '1';
        chatBtn.style.cursor = 'pointer';
      }

    // 渲染成员头像
    const avatarContainer = document.getElementById('member-icons');
    avatarContainer.innerHTML = '';
    const memberList = event.member_list || [];

    memberList.forEach((member, i) => {
      const img = document.createElement('img');
      img.alt = member.name;
      img.title = member.name;
      img.src =
        member.gender === 'male'
          ? 'icons/content/man.png'
          : member.gender === 'female'
          ? 'icons/content/woman.png'
          : 'icons/content/manager.png';
      img.addEventListener('click', () => {
        currentMemberIndex = i;
        document.getElementById('popup-member-name').textContent = member.name;
        document.getElementById('popup-member-gender').textContent = member.gender;
        document.getElementById('popup-member-phone').textContent = member.phone || '-';
        document.getElementById('member-info-popup').style.display = 'flex';
      });
      avatarContainer.appendChild(img);
    });

    // 添加 Add Member 图标
    const addIcon = document.createElement('img');
    addIcon.src = 'icons/content/add-person.png';
    addIcon.alt = 'Add Member';
    addIcon.classList.add('add-member');
    addIcon.addEventListener('click', () => {
      document.getElementById('member-popup').style.display = 'flex';
    });
    avatarContainer.appendChild(addIcon);

    // 显示页面
    document.getElementById('page-events').style.display = 'none';
    document.getElementById('page-events-detail').style.display = 'block';

    // ✅ 显示删除按钮（防止从 Discover 页面残留隐藏）
    const deleteBtn = document.getElementById('delete-event-btn');
    if (deleteBtn) deleteBtn.style.display = 'block';
  }

  window.showEventDetail = showEventDetail;

  // ✅ 2. 返回按钮
  const backBtn = document.getElementById('back-to-events');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      document.getElementById('page-events-detail').style.display = 'none';

      if (window.lastDetailSource === 'discover') {
        document.getElementById('page-discover').style.display = 'block';
      } else {
        document.getElementById('page-events').style.display = 'block';
      }

      // 可选：清空 lastDetailSource
      window.lastDetailSource = null;
    });
  }

  // ✅ 3. 删除事件
  const deleteBtn = document.getElementById('delete-event-btn');
  const confirmPopup = document.getElementById('delete-confirm-popup');
  const confirmBtn = document.getElementById('confirm-delete-btn');
  const cancelBtn = document.getElementById('cancel-delete-btn');

  deleteBtn?.addEventListener('click', () => {
    confirmPopup.style.display = 'flex';
  });

  cancelBtn?.addEventListener('click', () => {
    confirmPopup.style.display = 'none';
  });

  confirmBtn?.addEventListener('click', () => {
    const name = document.getElementById('detail-name').textContent;
    let events = JSON.parse(localStorage.getItem('myEvents')) || [];
    const updated = events.filter(e => e.name !== name);
    localStorage.setItem('myEvents', JSON.stringify(updated));

    confirmPopup.style.display = 'none';
    document.getElementById('page-events-detail').style.display = 'none';
    document.getElementById('page-events').style.display = 'block';
    window.updateEventList?.();
  });

  // ✅ 4. 成员详情弹窗中点击 Remove
  const removeMemberBtn = document.getElementById('remove-member-confirm');
  const cancelMemberBtn = document.getElementById('cancel-member-info');

  removeMemberBtn?.addEventListener('click', () => {
    const events = JSON.parse(localStorage.getItem('myEvents')) || [];
    const event = events[currentEventIndex];
  
    // 🚫 如果不是自己创建的活动，不允许删除成员
    if (event.from !== 'self') {
      alert("⛔ You cannot remove members from an event you did not create.");
      return;
    }
  
    // ✅ 正常删除流程
    if (currentEventIndex !== null && currentMemberIndex !== null) {
      event.member_list.splice(currentMemberIndex, 1);
      localStorage.setItem('myEvents', JSON.stringify(events));
      window.showEventDetail(currentEventIndex);
      window.updateEventList?.();
    }
  
    document.getElementById('member-info-popup').style.display = 'none';
  });
  
  cancelMemberBtn?.addEventListener('click', () => {
    document.getElementById('member-info-popup').style.display = 'none';
  });

  // ✅ 5. 添加到聊天
  document.getElementById('add-to-chat-btn')?.addEventListener('click', () => {
    const eventName = document.getElementById('detail-name').textContent;
  
    let chats = JSON.parse(localStorage.getItem('myChats')) || [];
  
    const alreadyExists = chats.some(chat => chat.eventName === eventName);
    if (alreadyExists) {
      alert("ℹ️ This chat is already in your list.");
      return;
    }
  
    // 添加新的聊天
    chats.push({
      eventName: eventName,
      avatar: "icons/content/group.png",
      messages: [],
      lastTime: "",
      saved: true
    });
  
    localStorage.setItem('myChats', JSON.stringify(chats));
    showToast("✅ Event added to chat list.");
    updateChatList(); // 可选，确保数据即时刷新
  });
  
  function showToast(message, duration = 2000) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  }
  
});
