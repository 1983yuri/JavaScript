"use strict";

const dataEls = JSON.parse(json);
const productEl = document.querySelector('.featuredItems');

let productsContent = "";

dataEls.goods.forEach((product) => {
    productsContent += `
    <div class="featuredItem">
    <div class="featuredImgWrap">
        <img src="${product.img}" alt="${product.name} фото" />
        <div class="featuredImgDark">
            <button class="addToCart" data-id="${product.id}">
                <img src="images/cart.svg" alt="кнопка добавить в корзину" />
                Add to Cart
            </button>
        </div>
    </div>

    <div class="featuredData">
        <div class="featuredName">${product.name}</div>
        <div class="featuredText">${product.description}</div>
        <div class="featuredPrice">${product.price} руб.</div>
    </div>
</div>
      `;
});

productEl.innerHTML = productsContent;
