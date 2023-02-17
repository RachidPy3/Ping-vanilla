const form = document.querySelector(".form");
const input = document.querySelector("input");
const btn = document.querySelector("button");
const alertP = document.querySelector("p");

let valid = true;

btn.addEventListener("click", () => {
  if (!input.value) {
    input.style.border = "1px solid var(--LightRed)";
    alertP.className = "visible";
    // let p = document.createElement("p");
    // p.textContent = "Please enter your Email";
    // p.style.color = "var(--LightRed)";
    // p.style.textAlign = "start";
    // p.style.fontSize = "12px";
    // form.appendChild(p);
  } else {
    input.style.border = "1px solid var(--Gray)";
    alertP.className = "unvisible";
  }
});
