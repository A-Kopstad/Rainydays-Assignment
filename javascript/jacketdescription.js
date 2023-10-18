const corsAnywhereUrl = "https://noroffcors.onrender.com/";
const originalUrl = "https://rainydays.websolutionscore.com/wp-json/wc/store/products";
const url = corsAnywhereUrl + originalUrl;

const productContainer = document.querySelector(".product-container-outer");

productContainer.innerHTML = `<div class="loading"></div>`;

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

const consumerKey = 'ck_b0dc2e3eacf2d5211ea7516b6db2b05cbe3c3915';
const consumerSecret = 'cs_1bd5610f3ecd71752dcf930ab069b068fde4f902';
const credentials = btoa(consumerKey + ':' + consumerSecret);

async function apiCall() {
    try {
        const response = await fetch(`${url}/${productId}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + credentials
            }
        });

        const result = await response.json();

        productContainer.innerHTML = "";

        const productCard = document.createElement('div');
        productCard.classList.add('product-container-inner', 'product-card');
        productCard.dataset.productId = result.id;

        productCard.innerHTML = `
            <div class="row1">
                <div class="jacket-container">
                    <div class="overlay-container">
                        <form class="product-button" action="/html/productpage.html?id=${result.id}" method="GET">
                            <input type="hidden" name="id" value="${result.id}"/> <button>
                                <img class="jacket" src="${result.images[0].src}" alt="${result.name}"/>
                            </button>
                        </form>
                    </div>
                </div>
                <a href="/html/productpage.html?id=${result.id}">
                    <p class="jacket-title">${result.name}</p>
                    <p> $ ${parseFloat(result.prices.price).toFixed(2)}</p>
                </a>
            </div>
        `;
        productContainer.appendChild(productCard);
    } catch (error) {
        console.error('API Error:', error);
        productContainer.innerHTML = "An error has occurred";
    }
}

apiCall();

