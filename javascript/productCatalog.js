const corsUrl = "https://noroffcors.onrender.com/";
const endpointlUrl = "https://rainydays.websolutionscore.com/wp-json/wc/store/products";
const url = corsUrl + endpointUrl;

const productContainer = document.querySelector(".product-container-outer");

productContainer.innerHTML = `<div class="loading-flex"> <div class="loading"></div> <p> Loading content ... </p> </div>`;

const consumerKey = 'ck_b0dc2e3eacf2d5211ea7516b6db2b05cbe3c3915';
const consumerSecret = 'cs_1bd5610f3ecd71752dcf930ab069b068fde4f902';
const credentials = btoa(consumerKey + ':' + consumerSecret);

async function apiCall() {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + credentials
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();

        productContainer.innerHTML = "";

        for (let i = 0; i < result.length; i++) {
            const allResults = result[i];

            const productCard = document.createElement('div');
            productCard.classList.add('product-container-inner', 'product-card');
            productCard.dataset.productId = allResults.id;

            productCard.innerHTML = `
                <div class="row1">
                    <div class="jacket-container">
                        <div class="overlay-container">
                            <form class="product-button" action="/html/productpage.html?id=${allResults.id}" method="GET">
                                <input type="hidden" name="id" value="${allResults.id}"/> <button>
                                    <img class="jacket" src="${allResults.images[0].src}" alt="${allResults.name}"/>
                                </button>
                            </form>
                        </div>
                    </div>
                    <a href="/html/productpage.html?id=${allResults.id}">
                        <p class="jacket-title">${allResults.name}</p>
                        <p> $ ${allResults.prices.price}</p>
                    </a>
                </div>
            `;

            productContainer.appendChild(productCard);
        }

    } catch (error) {
        productContainer.innerHTML = "An error has occurred";
    }
}

apiCall();
