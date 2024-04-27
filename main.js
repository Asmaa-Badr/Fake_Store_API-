async function calculateTotalPrice() {
    const products = [
        { id: 1, quantity: 3 },
        { id: 4, quantity: 4 },
        { id: 3, quantity: 5 }
    ];

    let totalPrice = 0;

    for (const product of products) {
        const response = await fetch(`https://fakestoreapi.com/products/${product.id}`);
        const data = await response.json();

        totalPrice += data.price * product.quantity;
    }

    return totalPrice;
}

calculateTotalPrice()
    .then(totalPrice => console.log("Total price:", totalPrice))
    .catch(error => console.error("Error:", error));