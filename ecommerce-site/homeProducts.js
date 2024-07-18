const productContainer = document.querySelector(".productContainer");
const productsTemplate = document.querySelector(".productsTemplate");

export const showProductContainer = (products) => {
  products.forEach((curproduct) => {
    const { id, name, category, price, stock, image } = curproduct;

    const productClone = document.importNode(productsTemplate.content, true);

    productClone.querySelector(".categories").textContent = category;
    productClone.querySelector(".image").src = image;
    productClone.querySelector(".name").textContent = name;
    productClone.querySelector(".price").textContent = `₹${price}`;
    productClone.querySelector(".actual-price").textContent = `₹${price * 3}`;
    productClone.querySelector(
      ".stock"
    ).textContent = `Total Stocks Available: ${stock}`;

    productContainer.append(productClone);
  });
};
