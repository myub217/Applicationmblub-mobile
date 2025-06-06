// 1. นำเข้า CSS
import '../css/main.css';

// 2. โค้ดหลักของแอป
document.addEventListener('DOMContentLoaded', () => {
  console.log('JP Visual & Docs loaded!');
  // ตัวอย่างแสดงข้อความใน body (สามารถลบได้)
  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = '<h1>ยินดีต้อนรับสู่ JP Visual & Docs</h1>';
  }
});

// 3. Register Service Worker สำหรับ PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => {
        console.log('✅ Service Worker registered:', reg.scope);
      })
      .catch(err => {
        console.error('❌ Service Worker registration failed:', err);
      });
  });
}