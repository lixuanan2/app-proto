document.addEventListener('DOMContentLoaded', () => {
    // tag部分
    const tagInput = document.getElementById('tag-input');
    const tagList = document.getElementById('tag-list');
    const addTagBtn = document.getElementById('add-tag-btn');
    const removeTagBtn = document.getElementById('remove-tag-btn');

    // 限制只能选择今天及以后的日期
    const today = new Date().toISOString().split("T")[0]; // 格式为 yyyy-mm-dd

    // 限制只能选择今天及以后的日期
    const eventDateInput = document.getElementById('event-date-new');
    if (eventDateInput) {
      eventDateInput.setAttribute("min", today);
    }
  
    let tags = [];
  
    // 添加tag
    addTagBtn.addEventListener('click', () => {
      const tagText = tagInput.value.trim();
      if (tagText !== '' && !tags.includes(tagText)) {
        tags.push(tagText);
        updateTagList();
      }
      tagInput.value = '';
    });
  
    // 删除最后一个tag
    removeTagBtn.addEventListener('click', () => {
      tags.pop();
      updateTagList();
    });
  
    function updateTagList() {
      tagList.innerHTML = 'Tags: ';
      tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = `#${tag}`;
        tagList.appendChild(document.createTextNode(' ')); // 空格分隔
        tagList.appendChild(span);
      });
    }

    // create按钮
    document.getElementById('create-event-btn').addEventListener('click', (e) => {
      e.preventDefault();
    
      const name = document.getElementById('event-name').value.trim();
      const date = document.getElementById('event-date-new').value;
      const location = document.getElementById('event-location').value.trim();
      const type = document.getElementById('event-type').value;
      const tags = Array.from(document.querySelectorAll('.tag')).map(tag => tag.textContent.replace(/^#/, ''));
    
      // 校验 name 和 date
      if (!name || !date) {
        alert("⚠️ Please fill in both Event Name and Date.");
        return;
      }
    
      if (/^\d+$/.test(name)) {
        alert("⚠️ Event name cannot be only numbers.");
        return;
      }
    
      if (date < today) {
        alert("⚠️ Event date cannot be in the past.");
        return;
      }
    
      const newEvent = {
        name,
        date,
        location,
        type,
        tags,
        from: "self",
        member_list: [
          { name: "Manager", gender: "manager", phone: "99999" }
        ]
      };
    
      let eventList = JSON.parse(localStorage.getItem('myEvents')) || [];
      eventList.push(newEvent);
      localStorage.setItem('myEvents', JSON.stringify(eventList));
    
      // ✅ 设置红点标记
      const flags = JSON.parse(localStorage.getItem('newEventFlags')) || {};
      flags[newEvent.name] = true;
      localStorage.setItem('newEventFlags', JSON.stringify(flags));
    
      console.log("✅ New event saved:", newEvent);
    
      // 返回页面 & 更新列表
      document.getElementById('page-events-add').style.display = 'none';
      document.getElementById('page-events').style.display = 'block';
      updateEventList();
      clearFormInputs();
    });
    
    
      function clearFormInputs() {
        document.getElementById('event-name').value = '';
        document.getElementById('event-date-new').value = '';
        document.getElementById('event-location').value = '';
        document.getElementById('event-type').value = '';
        tags = [];
        updateTagList();
      }
      
      document.getElementById('cancel-event-btn').addEventListener('click', () => {
        const confirmCancel = confirm("Are you sure you want to cancel?");
        if (confirmCancel) {
          // 清空输入框内容
          clearFormInputs();
      
          // 返回 event 主页面
          document.getElementById('page-events-add').style.display = 'none';
          document.getElementById('page-events').style.display = 'block';
        }
      });
      
      
      
});
  