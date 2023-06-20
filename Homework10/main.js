"use strict";

const dataBlocks = JSON.parse(data);
const appEl = document.querySelector(".app");

appEl.innerHTML = dataBlocks.reduce((acc, block) => {
    return (
        acc +
        `<div class="block">
        <img class="img" src="${block.thumbnailUrl}" />
        <h2 class="number_img">Картинка №: ${block.id}</h2>
        <div class="description">
          <p>${block.title}</p>
        </div>
    </div>
    `
    );
}, "");