let body = document.getElementById("body");
let isdark = false

setInterval(() => {
  if (isdark) {
    body.style.backgroundColor = randomHexColorCode();
  } else {
    body.style.backgroundColor = "black";
  }
  isdark = !isdark;
}, 200)
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};
