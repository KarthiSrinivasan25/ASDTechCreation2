import React, { useEffect } from "react";
import "./AnniversaryWidget.css";

const AnniversaryWidget = () => {

const emojis = ["🎉","✨","🎊","⭐","💫","🔥","🎈","💥","🌟"];

const celebrate = () => {


const box = document.querySelector(".anniversary-box");
if (!box) return;

const rect = box.getBoundingClientRect();

const centerX = rect.left + rect.width / 2;
const centerY = rect.top + rect.height / 2;

// Emoji Burst
for (let i = 0; i < 40; i++) {

  let e = document.createElement("div");
  e.classList.add("emoji");

  e.innerText =
    emojis[Math.floor(Math.random() * emojis.length)];

  e.style.left = centerX + "px";
  e.style.top = centerY + "px";

  e.style.setProperty(
    "--x",
    (Math.random() - 0.5) * 500 + "px"
  );

  e.style.setProperty(
    "--y",
    (Math.random() - 0.5) * 500 + "px"
  );

  document.body.appendChild(e);

  setTimeout(() => e.remove(), 2000);
}

// Firework Burst
for (let i = 0; i < 25; i++) {

  let f = document.createElement("div");
  f.classList.add("firework");

  f.style.left = centerX + "px";
  f.style.top = centerY + "px";

  let angle = Math.random() * Math.PI * 2;
  let radius = Math.random() * 130;

  f.style.transform = `
    translate(
      ${Math.cos(angle) * radius}px,
      ${Math.sin(angle) * radius}px
    )
  `;

  document.body.appendChild(f);

  setTimeout(() => f.remove(), 1000);
}


};

useEffect(() => {


const interval = setInterval(() => {
  celebrate();
}, 1500);

return () => clearInterval(interval);


}, []);

return ( <div
   className="anniversary-box"
   onClick={celebrate}
 > <img
     src="./Anniversary_Logo.png"
     alt="Anniversary"
   /> </div>
);
};

export default AnniversaryWidget;
