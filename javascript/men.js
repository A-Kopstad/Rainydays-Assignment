const url = "https://api.noroff.dev/api/v1/rainy-days";
const productdetailsContainer = document.querySelector(".product-container-outer");

async function apiCall () {
    try {
        const response = await fetch(url);
        const result = await response.json();

        productdetailsContainer.innerHTML = "";

        for (let i = 0; i < result.length; i++){
            
            const allResults = result [i];

            productdetailsContainer.innerHTML += 
            
            `<div class="product-container-inner">
            <div class="row1">
              <div class="jacket-container">
                <div class="overlay-container">
                  <a href="/html/productpage.html">
                    <img
                      class="jacket"
                      src="${allResults.image}"
                      alt="${allResults.title}"
                    />
                  </a>
                </div>
            </div>
            <p><p class="jacket-title">${allResults.title}&nbsp;</p> <p> $ ${allResults.price.toFixed(2)} USD</p></p>
        </div>  
              `;
    
        }
    }

    catch (error){
        productdetailsContainer.innerHTML = "An error has occured"
    }
    
}

apiCall();
