const url = "https://api.noroff.dev/api/v1/rainy-days";
const newIn = document.querySelector(".newin-products");

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
                <a href="/html/productpage.html?id=${allResults.id}">
                  <img
                    class="jacket"
                    src="${allResults.image}"
                    alt="A jacket"
                  />
                </a>
              </div>
             
              <a href="/html/productpage.html?id=${allResults.id}"> <p><p class="jacket-title">${allResults.title};</p> <p> $ ${allResults.price.toFixed(2)} USD</p></p> </a>

                  
              `;

            newIn.appendChild(productCard);
    
        }
    }

    catch (error){
        newIn.innerHTML = "An error has occured"
    }
    
}

apiCall();

