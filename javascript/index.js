const url = "https://api.noroff.dev/api/v1/rainy-days";
const newIn = document.querySelector(".newin-products");

newIn.innerHTML = `<div class="loading"></div>`;

async function apiCall () {
    try {
        const response = await fetch(url);
        const result = await response.json();

        newIn.innerHTML = "";

        for (let i = 0; i < result.length; i++){

            if (i === 3 ){
                break;
            }
            
            const allResults = result [i];

            const productCard = document.createElement('div');
            productCard.classList.add('product-container-inner', 'product-card');
            productCard.dataset.productId = allResults.id;

            productCard.innerHTML = ` 
            
              <div class="newin-products2">
            <div class="overlay-container">
              <div class="jacket-container">
              <form class="product-button" action="/html/productpage.html?id=${allResults.id}" method="GET">
              <input type="hidden" name="id" value="${allResults.id}"/> <button>
              <img class="jacket" src="${allResults.image}" alt="${allResults.title}"/>
              </button>
              </form>
              </div>
              <a href="/html/productpage.html?id=${allResults.id}"> <p><p class="jacket-title">${allResults.title}</p> <p> $ ${allResults.price.toFixed(2)} USD</p></p> </a> 
              `;

            newIn.appendChild(productCard);
    
        }
    }

    catch (error){
        newIn.innerHTML = "An error has occured"
    }
    
}

apiCall();

