document.addEventListener("DOMContentLoaded", function () {
    const likeButtons = document.querySelectorAll(".like-button");
    const addButtons = document.querySelectorAll(".add");
    const removeButtons = document.querySelectorAll(".remove");
    const deleteButtons = document.querySelectorAll(".delete");
    const quantitySpans = document.querySelectorAll("span.quantity");
    const priceSpans = document.querySelectorAll("p.price");
    const totalPriceSpan = document.getElementById("totalPrice");
  
    // Initialize the total price
    let totalPrice = 0;
  
    likeButtons.forEach(function (button, index) {
      button.addEventListener("click", function () {
        button.classList.toggle("active");
      });
  
      addButtons[index].addEventListener("click", function () {
        const quantity = parseInt(quantitySpans[index].textContent);
        quantitySpans[index].textContent = quantity + 1;
        updateTotalPrice();
      });
  
      removeButtons[index].addEventListener("click", function () {
        const quantity = parseInt(quantitySpans[index].textContent);
        if (quantity > 1) {
          quantitySpans[index].textContent = quantity - 1;
          updateTotalPrice();
        }
      });
  
      deleteButtons[index].addEventListener("click", function () {
        const quantity = parseInt(quantitySpans[index].textContent);
        const price = parseFloat(priceSpans[index].textContent.replace("$", ""));
        totalPrice -= price * quantity;
        totalPriceSpan.textContent = totalPrice.toFixed(2);
        quantitySpans[index].textContent = 0;
      });
  
      // Update the total price based on initial values
      const price = parseFloat(priceSpans[index].textContent.replace("$", ""));
      const quantity = parseInt(quantitySpans[index].textContent);
      totalPrice += price * quantity;
      totalPriceSpan.textContent = totalPrice.toFixed(2);
    });
  
    // Function to update the total price
    function updateTotalPrice() {
      totalPrice = 0;
      for (let i = 0; i < likeButtons.length; i++) {
        const price = parseFloat(priceSpans[i].textContent.replace("$", ""));
        const quantity = parseInt(quantitySpans[i].textContent);
        totalPrice += price * quantity;
      }
      totalPriceSpan.textContent = totalPrice.toFixed(2);
    }
  });
  