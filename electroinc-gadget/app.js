const electronicDevice = [
  {
    id: 1,
    title: "Apple iPhone 13",
    img: "./images/apple-iphone13.jpg",
    price: "52,890",
    star: "★★★★☆",
    category: "phone",
    info: "FREE delivery Wed, 19 Jun Or fastest delivery Tomorrow, 16 June",
  },
  {
    id: 2,
    title: "realme NARZO 70 Pro 5G",
    img: "./images/realme-narzo-70-pro-5G.jpg",
    price: "16,999",
    star: "★★★★☆",
    category: "phone",
    info: "FREE delivery Monday, 8 July",
  },
  {
    id: 3,
    title: "OnePlus Nord 3 5G",
    img: "./images/oneplus.jpg",
    price: "28,999",
    star: "★★★★☆",
    category: "phone",
    info: "FREE delivery Wed, 19 Jun Or fastest delivery Tomorrow, 16 Jun",
  },
  {
    id: 4,
    title: "POCO M6 Pro 5G",
    img: "./images/poco-m6-pro-5g.jpg",
    price: "10,999",
    star: "★★★★☆",
    category: "phone",
    info: "FREE delivery Wed, 19 Jun Or fastest delivery Tomorrow, 16 Jun",
  },
  {
    id: 5,
    title: "Redmi 12 5G Moonstone",
    img: "./images/redmi-12-5g.jpg",
    price: "12,499",
    star: "★★★★☆",
    category: "phone",
    info: "FREE delivery Monday, 8 July",
  },
  {
    id: 6,
    title: "TECNO POP 8",
    img: "./images/techno-pop-8.jpg",
    price: "6,899",
    star: "★★★☆☆",
    category: "phone",
    info: "FREE delivery Monday, 8 July",
  },
  {
    id: 7,
    title: "Samsung Galaxy M14 5G",
    img: "./images/samsung-galaxy-m14.jpg",
    price: "9,490",
    star: "★★★★☆",
    category: "phone",
    info: "FREE delivery Sunday, 14 July",
  },
  {
    id: 8,
    title: "iQOO Z9x 5G",
    img: "./images/iqoo.jpg",
    price: "15,999",
    star: "★★★☆☆",
    category: "phone",
    info: "FREE delivery Monday, 8 July",
  },
  {
    id: 9,
    title: "itel A70",
    img: "./images/itelA70.jpg",
    price: "7,499",
    star: "★★★☆☆",
    category: "phone",
    info: "FREE delivery Sunday, 14 July",
  },
  {
    id: 10,
    title: "ASUS Vivobook 16",
    img: "./images/ASUSvivobook.jpg",
    price: "84,990",
    star: "★★★★☆",
    category: "laptop",
    info: "FREE delivery Wednesday, 26 June. ",
  },
  {
    id: 11,
    title: "Dell Inspiron 7430",
    img: "./images/DellInspiron.jpg",
    price: "73,990",
    star: "★★★★★",
    category: "laptop",
    info: "FREE delivery Thursday, 27 June",
  },
  {
    id: 12,
    title: "ASUS TUF Gaming F15 ",
    img: "./images/ASUSTUFgaming.webp",
    price: "60,990",
    star: "★★★★☆",
    category: "laptop",
    info: "Delivery by 29 Jun, Saturday",
  },
  {
    id: 13,
    title: "DELL Inspiron 3520 ",
    img: "./images/inspiron-3520-thin-and-light-laptop-dell-original-imahyggypmfkkpnf.webp",
    price: "36,990",
    star: "★★★★☆",
    category: "laptop",
    info: "FREE delivery Sunday, 29 July",
  },
  {
    id: 14,
    title: "HP Laptop 15s",
    img: "images/HPLaptop15s.jpg",
    price: "52,490",
    star: "★★★★☆",
    category: "laptop",
    info: "FREE delivery Sunday, 30 July",
  },
  {
    id: 15,
    title: "LG Gram16",
    img: "images/lgGram.jpg",
    price: "1,18,499",
    star: "★★★★☆",
    category: "laptop",
    info: "FREE delivery Sunday, 1 July",
  },
  {
    id: 16,
    title: "Apple MacBook Air Laptop",
    img: "images/macbbok.jpg",
    price: "71,990",
    star: "★★★★",
    category: "laptop",
    info: "Delivery by 29 Jun, Saturday",
  },
  {
    id: 17,
    title: "ZEBRONICS PRO Series Z NBC 4S",
    img: "images/ZEBRONICSPRO.jpg",
    price: "32,990",
    star: "★★★★☆",
    category: "laptop",
    info: "Delivery by 29 Jun, Saturday",
  },
  {
    id: 18,
    title: "Xiaomi Notebook Pro 120",
    img: "images/XiaomiNotebookpro120.jpg",
    price: "61,557",
    star: "★★★★☆",
    category: "laptop",
    info: "FREE delivery Sunday, 1 July",
  },
  {
    id: 19,
    title: "Dell MS116 Wired Optical Mouse",
    img: "images/DellMS116.jpg",
    price: "299",
    star: "★★★★☆",
    category: "other",
    info: "FREE delivery Sunday, 5 July",
  },
  {
    id: 20,
    title: "ZEBRONICS-Transformer",
    img: "/images/ZEBRONICS-Transformer.jpg",
    price: "299",
    star: "★★★★☆",
    category: "other",
    info: "FREE delivery Sunday, 9 July",
  },
  {
    id: 21,
    title: "boAt Airdopes Atom 81 ",
    img: "images/boAt-Airdopes81.jpg",
    price: "1099",
    star: "★★★★☆",
    category: "other",
    info: "FREE delivery Sunday, 15 July",
  },
  {
    id: 22,
    title: "Noise Buds N1 in-Ear ",
    img: "images/NoiseBudsN1inEar.jpg",
    price: "1297",
    star: "★★★★☆",
    category: "other",
    info: "FREE delivery Sunday, 6 July",
  },
];

const sectionContainer = document.querySelector(".section-center");
const btnContainr = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  displayButtons();
  shuffleAndDisplayDevices(electronicDevice);
});

function shuffleAndDisplayDevices(electronicDeviceItem) {
  const devicesCopy = [...electronicDeviceItem];
  shuffleArray(devicesCopy);
  displayDevice(devicesCopy);
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [array[i], array[random]] = [array[random], array[i]];
  }
}

function displayDevice(electronicDeviceItem) {
  let devices = electronicDeviceItem
    .map(function (device) {
      return `
    <article class="item">
                <img src=${device.img} class="photo" alt="${device.title}">
                <div class="content">
                    <h1 class="content-title">${device.title}</h1>
                    <p>${device.star}</p>
                    <h1>price : ₹${device.price}</h1>
                    <p>
                    ${device.info}
                    </p>
                    <div class="purchase-btns">
                        <button class="purchasebtn">add to cart</button>
                        <button class="purchasebtn">Buy now</button>
                    </div>
                </div>
            </article>
    `;
    })
    .join("");
  sectionContainer.innerHTML = devices;
}

function displayButtons() {
  const categories = electronicDevice.reduce(
    function (value, item) {
      if (!value.includes(item.category)) {
        value.push(item.category);
      }
      return value;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn btn" data-id="${category}">${category}</button>`;
    })
    .join("");

  btnContainr.innerHTML = categoryBtns;
  const filterBtn = document.querySelectorAll(".filter-btn");
  filterBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const electronicCategory = electronicDevice.filter(function (
        electronicItem
      ) {
        if (electronicItem.category === category) {
          return electronicItem;
        }
      });
      if (category === "all") {
        displayDevice(electronicDevice);
      } else {
        displayDevice(electronicCategory);
      }
    });
  });
}
