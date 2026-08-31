const quantityInput = document.getElementById("quantity");
const quantityButtons = document.querySelectorAll(".quantity-btn");
quantityButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        let quantity = parseInt(quantityInput.value);
        if (button.textContent === "+") {
            quantity++;
        }
        if (button.textContent === "−" && quantity > 1) {
            quantity--;
        }
        quantityInput.value = quantity;
    });
});