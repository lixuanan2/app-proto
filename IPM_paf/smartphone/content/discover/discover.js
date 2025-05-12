document.addEventListener('DOMContentLoaded', () => {
    const listContainer = document.getElementById('discover-list');
    const searchInput = document.getElementById('discover-search-input');

    // ✅ 搜索类型变化后更新 placeholder 和重新渲染列表
    const typeSelect = document.getElementById('discover-search-type');
    if (typeSelect) {
      typeSelect.addEventListener('change', () => {
        window.updateDiscoverPlaceholder();
        renderDiscoverList(searchInput.value); // 可选
      });
    }
    
  
    // 读取 myEvents 名单（你已加入的）
    function getMyEvents() {
      return JSON.parse(localStorage.getItem('myEvents')) || [];
    }
  
    // 检查某 event 是否已加入
    function isJoined(eventName) {
      const myEvents = getMyEvents();
      return myEvents.some(e => e.name === eventName);
    }
  
    // 渲染 discover 页面列表
    function renderDiscoverList(filter = '') {
      // ✅ 恢复 detail 页的按钮状态（避免被隐藏后没还原）
      const deleteBtn = document.getElementById('delete-event-btn');
      if (deleteBtn) deleteBtn.style.display = 'block';

      const removeBtn = document.getElementById('remove-member-confirm');
      if (removeBtn) removeBtn.style.display = 'inline-block';

      const events = window.discoverEvents || [];
      listContainer.innerHTML = '';

      const lowerFilter = filter.toLowerCase();
      const type = document.getElementById('discover-search-type')?.value || 'name';

      const filtered = events.filter(ev => {
        if (type === 'name') {
          return ev.name.toLowerCase().includes(lowerFilter);
        } else if (type === 'tags') {
          return ev.tags.some(tag => tag.toLowerCase().includes(lowerFilter));
        } else if (type === 'location') {
          return ev.location.toLowerCase().includes(lowerFilter);
        }
        return true;
      });
  
      filtered.forEach(event => {
        const card = document.createElement('div');
        card.className = 'discover-card';
  
        // 左边信息
        const info = document.createElement('div');
        info.className = 'discover-info';
  
        const title = document.createElement('div');
        title.className = 'discover-title';
        title.textContent = event.name;
  
        const dateLine = document.createElement('div');
        dateLine.className = 'discover-info-line';
        dateLine.textContent = `📅 ${event.date}`;

        const locationLine = document.createElement('div');
        locationLine.className = 'discover-info-line';
        locationLine.textContent = `📍 ${event.location}`;
  
        info.appendChild(title);
        info.appendChild(dateLine);
        info.appendChild(locationLine);

        
  
        // 右边按钮
        const btn = document.createElement('button');
        btn.className = 'join-btn';
        const joined = isJoined(event.name);
        btn.classList.add(joined ? 'exit' : 'join');
        btn.textContent = joined ? 'Exit' : 'Join';
  
        // 点击按钮加入/退出事件
        btn.addEventListener('click', () => {
          const myEvents = getMyEvents();
          if (joined) {
            const updated = myEvents.filter(e => e.name !== event.name);
            localStorage.setItem('myEvents', JSON.stringify(updated));
        
            // 删除红点
            const flags = JSON.parse(localStorage.getItem('newEventFlags')) || {};
            if (flags[event.name]) {
              delete flags[event.name];
              localStorage.setItem('newEventFlags', JSON.stringify(flags));
            }
        
            showDiscoverToast("❌ Removed from event.", false);
          } else {
            myEvents.push({ 
              ...event, 
              member_list: event.member_list || [],
              members: (event.member_list?.length || 0),
              from: "discover"
            });
            localStorage.setItem('myEvents', JSON.stringify(myEvents));
        
            // 加入红点
            const flags = JSON.parse(localStorage.getItem('newEventFlags')) || {};
            flags[event.name] = true;
            localStorage.setItem('newEventFlags', JSON.stringify(flags));
        
            showDiscoverToast("✅ Joined successfully!");
        
            // ✅ 判断来源是否为 map
            if (window.lastDetailSource === 'map') {
              window.showPage('page-events');
            }
          }
        
          renderDiscoverList(searchInput.value);
          window.updateEventList?.();
        });
                
  
        // 整个卡片点击跳转到详情页（不能点按钮）
        card.addEventListener('click', (e) => {
          if (e.target === btn) return;
          window.showEventDetailFromDiscover?.(event);
        });
  
        card.appendChild(info);
        card.appendChild(btn);
        listContainer.appendChild(card);
      });
    }
  
    // 监听搜索框
    searchInput.addEventListener('input', () => {
      renderDiscoverList(searchInput.value);
    });
  
    // 初始化渲染
    renderDiscoverList();

    window.renderDiscoverList = renderDiscoverList;

  });
  
  function showDiscoverToast(message, success = true) {
    const toast = document.getElementById('discover-toast');
    toast.textContent = message;
    toast.style.backgroundColor = success ? '#4caf50' : '#f44336'; // green / red
    toast.style.display = 'block';
    toast.classList.remove('show'); // restart animation
    void toast.offsetWidth;         // 强制重绘
    toast.classList.add('show');
  
    setTimeout(() => {
      toast.style.display = 'none';
    }, 2400);
  }
  