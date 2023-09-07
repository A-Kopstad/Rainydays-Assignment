const productdetailsContainer = document.querySelector(".product-container-outer");

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");



const productDetailsUrl = `https://api.noroff.dev/api/v1/rainy-days/${productId}`;

productdetailsContainer.innerHTML = `<div class="loading"></div>`;

async function apiCall() {

    try {
        const response = await fetch(productDetailsUrl);
        const result = await response.json();

        productdetailsContainer.innerHTML = "";

        productdetailsContainer.innerHTML += `
            <div class="product-container-inner">
                <div class="row1">
                    <div class="jacket-container">
                            <img class="jacket" src="${result.image}" alt="${result.title}" />
                    </div>
                    <p class="text">${result.description}&nbsp;</p>
                </div>
            </div>`;

            document.title = result.title;

    } catch (error) {
        productdetailsContainer.innerHTML = "An error has occurred";
        console.error('Error fetching product details:', error);
    }
}

apiCall();
