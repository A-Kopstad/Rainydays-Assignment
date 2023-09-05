const url = "https://api.noroff.dev/api/v1/rainy-days";
const productdetailsContainer = document.querySelector(".product-container-outer");

async function apiCall () {
    try {
        const response = await fetch(url);
        const result = await response.json();

        productdetailsContainer.innerHTML = "";

        for (let i = 0; i < result.length; i++){
            const allResults = result[i];

            // Opprett produktkort og legg til produkt-ID som data-attributt
            const productCard = document.createElement('div');
            productCard.classList.add('product-container-inner', 'product-card');
            productCard.dataset.productId = allResults.id;

            // Resten av produktkortinnholdet
            productCard.innerHTML = `
                <div class="row1">
                    <div class="jacket-container">
                        <div class="overlay-container">
                            <a href="/html/productpage.html?id=${allResults.id}">
                                <img class="jacket" src="${allResults.image}" alt="${allResults.title}" />
                            </a>
                        </div>
                    </div>
                    <p><p class="jacket-title">${allResults.title}&nbsp;</p> <p> $ ${allResults.price.toFixed(2)} USD</p></p>
                </div>
            `;

            // Legg til klikk-lytter for produktkortet
            productCard.addEventListener('click', () => {
                const productId = productCard.dataset.productId;
                // Naviger til produktdetaljsiden med produkt-ID som parameter
                window.location.href = `/html/productpage.html?id=${productId}`;
            });

            productdetailsContainer.appendChild(productCard);
        }
    } catch (error) {
        productdetailsContainer.innerHTML = "An error has occurred";
    }
}

apiCall();