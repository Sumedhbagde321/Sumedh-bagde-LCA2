let qty = 1;

function updateQtyDisplay() {
  const qtyValue = document.getElementById("qty-value");
  const thankYouMsg = document.getElementById("thank-you-msg");

  qtyValue.textContent = qty;

  // Update price
  const price = 699;
  const total = price * qty;
  document.getElementById('subtotal').textContent = formatRupee(total);
  document.getElementById('total').textContent = formatRupee(total);

  // Show thank you message at 5 items
  if (qty === 5) {
    thankYouMsg.style.display = "block";
  } else {
    thankYouMsg.style.display = "none";
  }
}

function increaseQty() {
  if (qty < 99) {
    qty++;
    updateQtyDisplay();
  }
}

function decreaseQty() {
  if (qty > 1) {
    qty--;
    updateQtyDisplay();
  }
}

function formatRupee(val) {
  return '₹' + val.toLocaleString('en-IN');
}

function scrollFeatured(direction) {
  const container = document.getElementById('featured-container');
  const scrollAmount = 300;
  container.scrollLeft += direction * scrollAmount;
}

document.addEventListener("DOMContentLoaded", updateQtyDisplay);
