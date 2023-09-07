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
                    alt="A pink jacket"
                  />
                  <p class="mobile-text">Pink Rainjacket</p>
                </a>
              </div>
              <div class="overlay">
                <p>Scott Jacket '21</p>
                <div class="containerwithbag">
                  <div class="color12_p_container">
                    <p class="price">120$</p>
                  </div>
                  <a aria-label="shopping-icon" href="/html/checkout.html"
                    ><i class="fa fa-shopping-bag"></i
                  ></a>
                </div>
              </div>
            </div>
              `;

          

            newIn.appendChild(productCard);
    
        }
    }

    catch (error){
        newIn.innerHTML = "An error has occured"
    }
    
}

apiCall();

