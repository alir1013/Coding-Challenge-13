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


