function updateEventList() {
  const eventListContainer = document.querySelector('.event-list');
  if (!eventListContainer) return;

  eventListContainer.innerHTML = ''; // 清空旧内容

  const allEvents = JSON.parse(localStorage.getItem('myEvents')) || [];

  allEvents.forEach((event, index) => {
    const card = document.createElement('div');
    card.className = 'event-card';

    if (event.from === 'discover') {
      card.classList.add('from-discover');
    } else if (event.from === 'self') {
      card.classList.add('from-self');
    }
    
    const title = document.createElement('div');
    title.className = 'event-title';
    title.textContent = event.name;

    const info = document.createElement('div');
    info.className = 'event-info';
    const membersCount = event.member_list ? event.member_list.length : event.members || 0;
    info.textContent = `📅 ${event.date} · 👥 ${membersCount} member${membersCount > 1 ? 's' : ''}`;

    card.addEventListener('click', () => {
      if (typeof showEventDetail === 'function') {
        showEventDetail(index);
      } else {
        console.warn("❗ showEventDetail 未定义");
      }
    });

    card.appendChild(title);
    card.appendChild(info);
    eventListContainer.appendChild(card);
  });
}

// ✅ 挂到全局
window.updateEventList = updateEventList;

document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.getElementById('event-add-btn');
  const pageEvents = document.getElementById('page-events');
  const pageEventsAdd = document.getElementById('page-events-add');

  addBtn.addEventListener('click', () => {
    showPage('page-events-add');
  });  

  const stored = localStorage.getItem('myEvents');
  if (!stored || JSON.parse(stored).length === 0) {
    // 直接调用封装在 window 中的数据
    localStorage.setItem('myEvents', JSON.stringify(window.initialEvents));
    console.log("✅ 写入初始数据:", window.initialEvents);
  }

  updateEventList();
});
