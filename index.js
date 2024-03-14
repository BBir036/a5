let selectedSeatsCount = 0;
let selectedSeats = [];

function addToCart(seatNo, seatClass = "Echonomy", price = 550) {
  const seatButton = document.getElementById(seatNo + " seat");
  const cart = document.getElementById("cart");

  const index = selectedSeats.indexOf(seatNo);

  if (index === -1) {
    if (selectedSeatsCount < 4) {
      selectedSeats.push(seatNo);
      selectedSeatsCount++;

      seatButton.style.backgroundColor = "green";

      const seatInfo = document.createElement("div");
      seatInfo.innerHTML = `
        <div class="flex justify-between font-semibold text-gray-600">
          <h1>${seatNo}</h1>
          <h1>${seatClass}</h1>
          <h1>${price}</h1>
        </div>`;
      cart.appendChild(seatInfo);
    } else {
      alert("You can only select up to 4 seats.");
    }
  } else {
    selectedSeats.splice(index, 1);
    selectedSeatsCount--;

    seatButton.style.backgroundColor = "#E5E7EB";

    const cartChildren = cart.children;
    for (let i = 0; i < cartChildren.length; i++) {
      const tempChild = cartChildren[i];
      if (tempChild.innerText.includes(seatNo)) {
        tempChild.remove();
        break;
      }
    }
  }
  const totalPriceElement = document.getElementById("totalPrice");
  const totalPrice = selectedSeatsCount * 550;
  totalPriceElement.innerText = `BDT ${totalPrice}`;
  const grandTotalElement = document.getElementById("grandTotal");
  grandTotalElement.innerText =`BDT ${totalPrice}`;
  const leftNumbersOfSeatElement = document.getElementById("leftNumbersOfSeat");
  const leftSeat = 40 - selectedSeatsCount;
  leftNumbersOfSeatElement.innerText = `${leftSeat} Seats Left`;

  const totalSeatElement = document.getElementById("totalSeat");
  totalSeatElement.innerText = `${selectedSeatsCount}`;
}

function cuponHandler() {
  const cuponElement = document.getElementById("cupon");
  const inputValue = cuponElement.value;
  const Button = document.getElementById("Button");

  const grandTotalElement = document.getElementById("grandTotal");

  if (inputValue === "NEW15" && selectedSeatsCount===4) {
    Button.removeAttribute("disabled");
    const grandTotal =
      selectedSeatsCount * 550 - (selectedSeatsCount * 550 * 0.15).toFixed(2);
    grandTotalElement.innerText = `BDT ${grandTotal}`;
    const cuponContainer = document.getElementById("cuponContainer");
    cuponContainer.classList.add("hidden");
    const discountContainer = document.getElementById("discountContainer");
    discountContainer.style.display = "flex";
    const discount = document.getElementById("discount");
    discount.innerText = `BDT ${(selectedSeatsCount * 550 * 0.15).toFixed(2)}`;
  } else if (inputValue === "Couple 20" && selectedSeatsCount===4) {
    Button.removeAttribute("disabled");
    const grandTotal =
      selectedSeatsCount * 550 - (selectedSeatsCount * 550 * 0.2).toFixed(2);
    grandTotalElement.innerText = `BDT ${grandTotal}`;
    const cuponContainer = document.getElementById("cuponContainer");
    cuponContainer.classList.add("hidden");
    const discountContainer = document.getElementById("discountContainer");
    discountContainer.style.display = "flex";
    const discount = document.getElementById("discount");
    discount.innerText = `BDT ${(selectedSeatsCount * 550 * 0.2).toFixed(2)}`;
  } else {
    Button.setAttribute("disabled");
  }
}

function testHandler() {
  const numberElement = document.getElementById("number");
  const number = parseFloat(numberElement.value);

  const finalSubmitButton = document.getElementById("finalSubmit");
  const modal = document.getElementById("modal");
  const main = document.getElementById("main");
  if (!isNaN(number) && number > 0 && selectedSeatsCount > 0) {
    finalSubmitButton.removeAttribute("disabled");
    modal.style.display = "block";
    main.style.display = "none";
    alart(number);
  } else {
    alart("Invalid number");
    finalSubmitButton.setAttribute("disabled");
  }
}
