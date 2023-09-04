
const url = ("https://api.noroff.dev/api/v1/rainy-days/<id>");
const htmlContainer = document.querySelector(".product-container-outer");

async function getJacket() {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);

        let htmlproducts = "";
        for (const jacketLoop of result) {
            htmlproducts += `    <div class="product-container-inner">
            <div class="row1">
              <div class="jacket-container">
                <div class="overlay-container">
                  <a href="/html/productpage.html">
                    <img
                      class="jacket"
                      src="${jacketLoop.image}"
                      alt="${jacketLoop.title}"
                    />
                    <p class="mobile-text">Black Rainjacket.</p>
                  </a>
  
                  <div class="overlay">
                    <p>Scott Rainjacket '19</p>
                    <div class="containerwithbag">
                      <div class="color12_p_container">
                        <a aria-label="A black box." href="/html/productpage.html"
                          ><div class="color1"></div
                        ></a>
                        <a
                          aria-label="A green box."
                          href="/html/productpage2.html"
                          ><div class="color2"></div
                        ></a>
                        <p><p class="product1-text">${jacketLoop.title}&nbsp; $ ${jacketLoop.price.toFixed(2)} USD</p></p>
                      </div>
                      <a
                        aria-label="A shoppingbag-icon."
                        href="/html/checkout.html"
                        ><i class="fa fa-shopping-bag"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>`;
        }

        htmlContainer.innerHTML = `<div class="product-container-outer">${htmlproducts}</div>`;
    }

catch (error) {
    console.error("api not loaded:", error);
}
    
}
getJacket();



message.textContent="fdgf";
        message.classList.add("message");
        productdetailsContainer="";
        productdetailsContainer.appendChild(message);



















        const url = "https://api.noroff.dev/api/v1/rainy-days";
const productdetailsContainer = document.querySelector(".product-container-outer");

async function apiCall () {
    try {
        const response = await fetch(url);
        const result = await response.json();

        let htmlcontent = "";

        

        productdetailsContainer.innerHTML = "";

        for (let i = 0; i < result.length; i++){

            datalooped = result[i];

            console.log();

            htmlcontent += `<div class="product-container-inner">
            <div class="row1">
              <div class="jacket-container">
                <div class="overlay-container">
                  <a href="/html/productpage.html">
                    <img
                      class="jacket"
                      src="${datalooped.image}"
                      alt="${datalooped.title}"
                    />
                    <p class="mobile-text">Black Rainjacket.</p>
                  </a>
  
                  <div class="overlay">
                    <p>Scott Rainjacket '19</p>
                    <div class="containerwithbag">
                      <div class="color12_p_container">
                        <a aria-label="A black box." href="/html/productpage.html"
                          ><div class="color1"></div
                        ></a>
                        <a
                          aria-label="A green box."
                          href="/html/productpage2.html"
                          ><div class="color2"></div
                        ></a>
                        <p><p class="product1-text">${datalooped.title}&nbsp; $ ${datalooped.price.toFixed(2)} USD</p></p>
                      </div>
                      <a
                        aria-label="A shoppingbag-icon."
                        href="/html/checkout.html"
                        ><i class="fa fa-shopping-bag"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>`;
        }

        productdetailsContainer.innerHTML = `<div>${htmlcontent}</div>
        `;
    }

 

    catch (error){
        productdetailsContainer.innerHTML = "An error has occured"
    }

    
    
}

apiCall();