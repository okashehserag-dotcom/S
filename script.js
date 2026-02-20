const btn = document.getElementById("btn");
const msg = document.getElementById("message");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

const messages = [
  "✨ ممتاز! أنت رفعت مشروعك على GitHub.",
  "🚀 جاهز للنشر على GitHub Pages.",
  "✅ استمر! خطوة حلوة."
];

btn.addEventListener("click", () => {
  const i = Math.floor(Math.random() * messages.length);
  msg.textContent = messages[i];
});
