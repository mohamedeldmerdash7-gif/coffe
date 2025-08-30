const products = document.querySelectorAll(".product");
const cartList = document.getElementById("cart-list");
const totalPriceEl = document.getElementById("total-price");
const clearCartBtn = document.getElementById("clear-cart");

let total = 0;


products.forEach(product => {
    product.addEventListener("click", () => {
        const name = product.getAttribute("data-name");
        const price = parseInt(product.getAttribute("data-price"));

        
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "X";
        removeBtn.classList.add("remove-btn");

        removeBtn.addEventListener("click", () => {
            total -= price; 
            totalPriceEl.textContent = total;
            li.remove();
        });

        li.appendChild(removeBtn);
        cartList.appendChild(li);

        
        total += price;
        totalPriceEl.textContent = total;
    });
});


clearCartBtn.addEventListener("click", () => {
    cartList.innerHTML = "";
    total = 0;
    totalPriceEl.textContent = total;
});