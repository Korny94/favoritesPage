import products from "./exportFavorites.js";

import { getExistingFavs } from "./favFunctions.js";

const selectProducts = document.querySelector("#selectProducts");

const favorites = getExistingFavs();

products.forEach((product) => {

    let cssClass = "far";

    const doesObjectExist = favorites.find(function(fav) {
        return parseInt(fav.id) === product.id;
    });

    if (doesObjectExist) {
        cssClass = "fa";
    }

    selectProducts.innerHTML += `<div id="divProducts">
                                <i class="${cssClass} fa-heart" data-id="${product.id}" data-name="${product.productName}"></i>
                                <h2>${product.productName}</h2>
                                </div>
                            `;
});

const favButtons = document.querySelectorAll("#divProducts i");

console.dir(favButtons);

favButtons.forEach((button) => {
    button.addEventListener("click", toggleClass);
});

function toggleClass() {
    this.classList.toggle("fa");
    this.classList.toggle("far");

    const id = this.dataset.id;
    const productName = this.dataset.name;

    const currentFavs = getExistingFavs();

    const productExists = currentFavs.find(function(fav) {
        return fav.id === id;
    });

    if(productExists === undefined) //!productExists
                        {  
        const product = { id: id, productName: productName};
        currentFavs.push(product);
        saveFavs(currentFavs);  
    } else {
        const newFavs = currentFavs.filter(fav => fav.id !== id)
        saveFavs(newFavs);  
    }



}



function saveFavs(favs) {
    localStorage.setItem("favorites", JSON.stringify(favs));
}