const corsAnywhereUrl = "https://noroffcors.onrender.com/";
const originalUrl = "https://rainydays.websolutionscore.com/wp-json/wc/store/products";
const url = corsAnywhereUrl + originalUrl;

const newIn = document.querySelector(".newin-products");

newIn.innerHTML = `<div class="loading"></div>`;

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
        console.log(result);

        newIn.innerHTML = "";

        for (let i = 0; i < result.length; i++) {
            if (i === 3) {
                break;
            }

            const allResults = result[i];

            const productCard = document.createElement('div');
            productCard.classList.add('product-container-inner', 'product-card');
            productCard.dataset.productId = allResults.id;

            // Make sure to check if images array is not empty
            const imageUrl = allResults.images.length > 0 ? allResults.images[0].src : '';

            productCard.innerHTML = `
                <div class="newin-products2">
                    <div class="overlay-container">
                        <div class="jacket-container">
                            <form class="product-button" action="/html/productpage.html?id=${allResults.id}" method="GET">
                                <input type="hidden" name="id" value="${allResults.id}"/> 
                                <button>
                                    <img class="jacket" src="${imageUrl}" alt="${allResults.name}"/>
                                </button>
                            </form>
                        </div>
                        <a href="/html/productpage.html?id=${allResults.id}">
                            <p><p class="jacket-title">${allResults.name}</p> 
                            <p>$ ${allResults.prices.price}</p></p>
                        </a>
                    </div>
                </div>`;

            newIn.appendChild(productCard);
        }
    } catch (error) {
        console.error('Fetch error:', error);
        newIn.innerHTML = "An error has occurred";
    }
}

apiCall();









// const corsAnywhereUrl = "https://noroffcors.onrender.com/";
// const originalUrl = "https://rainydays.websolutionscore.com/wp-json/wc/store/products";
// const url = corsAnywhereUrl + originalUrl;

 

// const newIn = document.querySelector(".newin-products");


// newIn.innerHTML = `<div class="loading"></div>`;

// const consumerKey = 'ck_b0dc2e3eacf2d5211ea7516b6db2b05cbe3c3915';
// const consumerSecret = 'cs_1bd5610f3ecd71752dcf930ab069b068fde4f902';
// const credentials = btoa(consumerKey + ':' + consumerSecret);



  
// async function apiCall () {
//     try {
//         const response = await fetch(url, {
//             method: 'GET',
//             headers: {
//               'Authorization': 'Basic ' + credentials
//             }
//           });
//         const result = await response.json();
//         console.log(result);

//         newIn.innerHTML = "";

//         for (let i = 0; i < result.length; i++){

//             if (i === 3 ){
//                 break;
//             }
            
//             const allResults = result [i];

//             const productCard = document.createElement('div');
//             productCard.classList.add('product-container-inner', 'product-card');
//             productCard.dataset.productId = allResults.id;

//             productCard.innerHTML = ` 
            
//               <div class="newin-products2">
//             <div class="overlay-container">
//               <div class="jacket-container">
//               <form class="product-button" action="/html/productpage.html?id=${allResults.id}" method="GET">
//               <input type="hidden" name="id" value="${allResults.id}"/> <button>
//               <img class="jacket" src="${allResults.images[0].src}" alt="${allResults.name}"/>
//               </button>
//               </form>
//               </div>
//               <a href="/html/productpage.html?id=${allResults.id}"> <p><p class="jacket-title">${allResults.name}</p> <p> $ ${allResults.price.toFixed(2)}</p></p> </a> 
//               `;

//             newIn.appendChild(productCard);
    
//         }
//     }

//     catch (error){
//         newIn.innerHTML = "An error has occured"
//     }
    
// }

// apiCall();

