document.addEventListener('DOMContentLoaded', () => {
    let mapInitialized = false;
    let map;
  
    document.getElementById('map-discover-btn')?.addEventListener('click', () => {
      document.getElementById('map-popup').style.display = 'flex';
  
      if (!mapInitialized) {
        map = L.map('map-container').setView([38.7223, -9.1393], 11); // Lisboa 中心
  
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap'
        }).addTo(map);
  
        // 👤 用户位置
        const userIcon = L.icon({
          iconUrl: 'icons/content/you.png',
          iconSize: [32, 32],
          iconAnchor: [16, 32],
          popupAnchor: [0, -32]
        });
  
        L.marker([38.7223, -9.1393], { icon: userIcon, title: "You" })
          .addTo(map)
          .bindPopup("📍 You");
  
        // 📍 三个固定城市位置（含 Moscavide）
        const positions = [
          { lat: 38.6781, lon: -9.1582 }, // Almada
          { lat: 38.6639, lon: -9.0724 }, // Barreiro
          { lat: 38.7755, lon: -9.1015 }  // Moscavide
        ];
  
        const pinIcon = L.icon({
          iconUrl: 'icons/content/pin.png',
          iconSize: [32, 32],
          iconAnchor: [16, 32],
          popupAnchor: [0, -32]
        });
  
        // 🎯 随机取3个 discover event
        const allEvents = window.discoverEvents || [];
        const selected = allEvents.sort(() => 0.5 - Math.random()).slice(0, 3);
  
        selected.forEach((event, i) => {
          const pos = positions[i];
          if (!pos) return;
  
          const marker = L.marker([pos.lat, pos.lon], {
            icon: pinIcon,
            title: event.name
          }).addTo(map);
  
          marker.bindPopup(event.name);
  
          marker.on('click', () => {
            document.getElementById('map-popup').style.display = 'none';
  
            setTimeout(() => {
              document.getElementById('page-discover').style.display = 'block';
  
              // 查找并高亮卡片
              const list = document.querySelectorAll('.discover-card');
              for (const card of list) {
                if (card.querySelector('.discover-title')?.textContent === event.name) {
                  card.classList.add('highlight');
                  card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  window.currentHighlightedCard = card;
                  break;
                }
              }
            }, 300);
          });
        });
  
        mapInitialized = true;
      } else {
        setTimeout(() => map.invalidateSize(), 200);
      }
    });
  
    // 关闭地图按钮
    document.getElementById('close-map-btn')?.addEventListener('click', () => {
      document.getElementById('map-popup').style.display = 'none';
    });
  });
  
  window.autoReturnAfterJoin = true;
