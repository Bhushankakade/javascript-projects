const productContainer = document.querySelector(".productContainer");
const productsTemplate = document.querySelector(".productsTemplate");

export const showProductContainer = (products) => {
  products.forEach((curproduct) => {
    const { id, name, star, price, stock, description, image } = curproduct;

    const productClone = document.importNode(productsTemplate.content, true);

    productContainer.append(productClone);
  });
};
