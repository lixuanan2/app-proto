document.addEventListener('DOMContentLoaded', () => {
  function showEventDetailFromDiscover(eventObject) {
    window.lastDetailSource = "discover"; // 用于返回按钮判断来源

    // 填入基本信息
    document.getElementById('detail-name').textContent = eventObject.name;
    document.getElementById('detail-date').textContent = eventObject.date;
    document.getElementById('detail-location').textContent = eventObject.location || '-';
    document.getElementById('detail-type').textContent = eventObject.type || '-';
    document.getElementById('detail-tags').textContent =
      eventObject.tags?.length > 0 ? eventObject.tags.map(t => `#${t}`).join(' ') : '-';

    const avatarContainer = document.getElementById('member-icons');
    avatarContainer.innerHTML = '';

    const memberList = eventObject.member_list || [];

    if (window.lastDetailSource === 'discover') {
      const chatBtn = document.getElementById('add-to-chat-btn');
      if (chatBtn) {
        chatBtn.disabled = true;
        chatBtn.style.opacity = '0.5';
        chatBtn.style.cursor = 'not-allowed';
      }
    }

    memberList.forEach(member => {
      const img = document.createElement('img');
      img.alt = member.name;
      img.title = member.name;
      img.src =
        member.gender === 'male'
          ? 'icons/content/man.png'
          : member.gender === 'female'
          ? 'icons/content/woman.png'
          : 'icons/content/manager.png';

      img.style.width = '40px';
      img.style.height = '40px';
      img.style.borderRadius = '6px';
      img.style.objectFit = 'cover';
      img.style.border = '1px solid #ccc';

      img.addEventListener('click', () => {
        // 打开成员信息弹窗
        document.getElementById('popup-member-name').textContent = member.name;
        document.getElementById('popup-member-gender').textContent = member.gender;
        document.getElementById('popup-member-phone').textContent = member.phone || '-';
        document.getElementById('member-info-popup').style.display = 'flex';

        // ❌ 隐藏删除按钮
        const removeBtn = document.getElementById('remove-member-confirm');
        if (removeBtn) removeBtn.style.display = 'none';
      });

      avatarContainer.appendChild(img);
    });

    // ❌ 隐藏删除事件按钮
    const deleteBtn = document.getElementById('delete-event-btn');
    if (deleteBtn) deleteBtn.style.display = 'none';

    // ✅ 显示页面
    document.getElementById('page-events').style.display = 'none';
    document.getElementById('page-discover').style.display = 'none';
    document.getElementById('page-events-detail').style.display = 'block';
  }

  window.showEventDetailFromDiscover = showEventDetailFromDiscover;
});
