const input = document.querySelector(".input");
const imageBox = document.querySelector(".imgBox");
const qrImg = document.querySelector(".imgBox .qr-image");
const generateBtn = document.querySelector(".btn");
const downloadBtn = document.querySelector(".download-btn");
let qrcode;

generateBtn.addEventListener("click", () => {
  let qrValue = input.value;

  if (!qrValue) {
    alert("please enter text or url !");
    return;
  }
  qrcode = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
  qrImg.src = qrcode;
  imageBox.classList.add("show-img");
  input.value = "";
});

downloadBtn.addEventListener("click", () => {
  if (!qrcode) {
    alert("Please generate a QR code first!");
    return;
  }

  const link = document.createElement("a");
  link.href = qrcode;
  link.download = "qrcode.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
