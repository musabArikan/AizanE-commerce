/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: false, // DaisyUI'nin otomatik stillendirme özelliğini kapatır
    themes: false, // DaisyUI'nin temalarını devre dışı bırakır
  },
};
