const openBtn = document.getElementById("openMessage");
const messageBox = document.getElementById("messageBox");
const typingText = document.getElementById("typingText");

const text = `
ขอบคุณที่เข้ามาเป็นส่วนหนึ่งของกันและกันในทุกวันนะโอปอ
แม้จะเพิ่งผ่านไปเพียง 3 เดือน แต่ทุกช่วงเวลาที่อยู่กับเธอมันมีความหมายมาก
ขอบคุณที่เป็นความสบายใจของมีนเสมอ
รักนะ ไม่ว่าเวลาจะผ่านไปแค่ไหน ก็อยากมีกันแบบนี้ไปนานๆ 💖
`;

openBtn.addEventListener("click", () => {
  openBtn.style.display = "none";
  messageBox.classList.remove("hidden");
  typeText(text);
});

function typeText(str) {
  let i = 0;
  function type() {
    if (i < str.length) {
      typingText.innerHTML += str.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }
  type();
}


// 🐷 Floating Pig Effect
function createPig() {
  const pig = document.createElement("div");
  pig.classList.add("pig");
  pig.innerText = "🐷";
  pig.style.left = Math.random() * 100 + "vw";
  pig.style.animationDuration = 5 + Math.random() * 5 + "s";
  document.body.appendChild(pig);
  setTimeout(() => pig.remove(), 10000);
}

setInterval(createPig, 800);
