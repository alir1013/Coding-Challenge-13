//Task 2:Fetch Products from the API Using Fetch and Promises
const productContainer = document.getElementById("productContainer");

// Fetching data from the API
fetch('https://www.course-api.com/javascript-store-products') 
    .then(response => {
        if (!response.ok) {
            throw new Error("No network response");
        }
        return response.json();
    })
    .then(products => {
        displayProducts(products);
    })
    .catch(error => {
        console.error("could not fetch data", error); 
    });

//Task 3: Display Product Details Dynamically

function displayProducts(products) {
    products.forEach(product => {
        const { name, company, price } = product.fields;
        const image= product.fields.image[0].url;
        const productPrice = (price / 100).toFixed(2);

        const productElement = document.createElement("div");
        productElement.classList.add("product");

        productElement.innerHTML = `
            <img src="${image}" alt="${name}" class="product-image" />
            <h3 class="product-name">${name}</h3>
            <p class="product-company">by ${company}</p>
            <p class="product-price">$${productPrice}</p>
        `;

        productContainer.appendChild(productElement);
    });
};


