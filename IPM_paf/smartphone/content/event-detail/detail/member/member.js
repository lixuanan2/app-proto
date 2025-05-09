document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('member-popup');
  const createBtn = document.getElementById('create-member-btn');
  const cancelBtn = document.getElementById('cancel-member-btn');

  createBtn.addEventListener('click', () => {
    const name = document.getElementById('member-name').value.trim();
    const gender = document.getElementById('member-gender').value;
    const phone = document.getElementById('member-phone').value.trim();

    // 🚫 名字和性别不能为空
    if (!name || !gender) {
      alert("⚠️ Name and Gender are required.");
      return;
    }

    // 🚫 名字中不能包含数字
    if (/\d/.test(name)) {
      alert("⚠️ Name cannot contain numbers.");
      return;
    }

    // 🚫 电话中不能包含字母
    if (/[a-zA-Z]/.test(phone)) {
      alert("⚠️ Phone number cannot contain letters.");
      return;
    }

    const newMember = { name, gender, phone };

    // 👉 找到当前正在显示的事件索引
    const events = JSON.parse(localStorage.getItem('myEvents')) || [];
    const currentEventName = document.getElementById('detail-name').textContent;

    const index = events.findIndex(ev => ev.name === currentEventName);
    if (index === -1) return alert("⚠️ Event not found.");

    // 👉 更新事件数据
    if (!events[index].member_list) events[index].member_list = [];
    events[index].member_list.push(newMember);

    // ✅ 同步到 localStorage
    localStorage.setItem('myEvents', JSON.stringify(events));

    // ✅ 重新渲染详情页
    window.showEventDetail(index);

    // ✅ 同时刷新 event 页面列表信息
    window.updateEventList();

    // ✅ 清空弹窗输入并关闭
    document.getElementById('member-name').value = '';
    document.getElementById('member-gender').value = '';
    document.getElementById('member-phone').value = '';
    popup.style.display = 'none';

    // ✅ 添加提示信息
    const toast = document.createElement('div');
    toast.className = 'simple-toast';
    toast.textContent = '✅ Member added!';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 1500);
  });


  cancelBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    document.getElementById('member-name').value = '';
    document.getElementById('member-gender').value = '';
    document.getElementById('member-phone').value = '';
  });
});
