// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'pastel-pink': {
          light: '#FFF0F5', // สีชมพูอ่อนมาก (ใช้ทำ Background หลัก)
          DEFAULT: '#FAD02C', // สีชมพูพาสเทลนุ่มๆ
          soft: '#F4C2C2',   // ชมพูกุหลาบอ่อน
        },
        'pastel-green': {
          light: '#E8F5E9', // เขียวมิ้นต์อ่อนมากๆ
          DEFAULT: '#B8E0D2', // เขียวพาสเทล / มิ้นต์หลัก
          sage: '#A3E4D7',    // เขียวเซจ/มิ้นต์พาสเทลสดใส
        },
        'pastel-text': '#4A5568',  // เทาเข้มอมน้ำเงิน (ใช้แทนสีดำล้วน เพื่อความซอฟต์และมินิมอล)
      }
    },
  },
  plugins: [],
}