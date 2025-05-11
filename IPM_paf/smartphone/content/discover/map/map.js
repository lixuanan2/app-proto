document.addEventListener('DOMContentLoaded', () => {
    let mapInitialized = false;
    let map;
  
    document.getElementById('map-discover-btn')?.addEventListener('click', () => {
      document.getElementById('map-popup').style.display = 'flex';
  
      // 只初始化一次地图
      if (!mapInitialized) {
        map = L.map('map-container').setView([38.7223, -9.1393], 13); // 里斯本
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap'
        }).addTo(map);
  
        mapInitialized = true;
      } else {
        setTimeout(() => map.invalidateSize(), 200); // 修复隐藏状态初始化地图尺寸异常的问题
      }
    });
  
    // 关闭地图按钮
    document.getElementById('close-map-btn')?.addEventListener('click', () => {
      document.getElementById('map-popup').style.display = 'none';
    });
  });
  