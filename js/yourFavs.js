import { getExistingFavs } from "./favFunctions.js";

const favorites = getExistingFavs();

const yourFavorites = document.querySelector("#yourFavorites");

if (favorites.length === 0) {
    yourFavorites.innerHTML = "No favorites yet!";
}

favorites.forEach((favorite) => {
    yourFavorites.innerHTML += `<div id="divProducts">
                                <i class="fa fa-heart""></i>
                                <h2>${favorite.productName}</h2>
                                </div>
                            `;
});