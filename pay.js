let params = new URL(document.location).searchParams;
let price = params.get("price");
let seats = params.get("seats");

function showPrice() {
  document.getElementById("price").innerHTML = price;
  document.getElementById("form").addEventListener("submit", goToConfirmation);
}

function goToConfirmation(event) {
  event.preventDefault();
  window.location.href = `./confirmation.html?price=${price}&seats=${seats}`;
}
