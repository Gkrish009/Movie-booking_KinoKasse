const movie_seats = [
  {
    booked: [3, 4, 5],
    maxCount: 10
  },
  {
    booked: [3, 4, 5],
    maxCount: 14
  },
  {
    booked: [3, 4, 5, 10, 11],
    maxCount: 16
  },
  {
    booked: [8, 9],
    maxCount: 18
  },
  {
    booked: [],
    maxCount: 18
  },
  {
    booked: [],
    maxCount: 22
  },
  {
    booked: [3, 4, 5],
    maxCount: 22
  },
  {
    booked: [3, 4, 5, 8, 9, 10, 14, 15, 21],
    maxCount: 22
  }
];

function getSeatRows(row, rowNo) {
  let checkboxes = [];
  for (let i = 0; i < row.maxCount; i++) {
    checkboxes.push(
      `<input type="checkbox" style="width: 20px; margin: 8px;" 
        ${row.booked.indexOf(i) === -1 ? "" : "disabled"}
        onclick="updateSeat(this)" id=${rowNo + 1}-${i + 1}
      >`
    );
  }
  return checkboxes.join("");
}

function renderSeats() {
  const seats = movie_seats.map((row, index) => {
    return `<div style="display: flex; justify-content: center;">${getSeatRows(
      row,
      index
    )}</div>`;
  });

  const mainDiv = document.getElementById("seats");
  mainDiv.innerHTML = seats.join("");

  updatePrice();
}

let seats = [];
let price = 0;

function updateSeat(val) {
  if (val.checked) {
    seats.push(val.id);
  } else {
    let index = seats.indexOf(val.id);
    if (index > -1) {
      seats.splice(index, 1);
    }
  }
  updatePrice();
}

function updatePrice() {
  price = seats.length * 10;
  const priceDiv = document.getElementById("price");
  priceDiv.innerHTML = price;
}

function goToPay() {
  if (seats.length) {
    window.location.href = `./pay.html?price=${price}&seats=${seats.join()}`;
  } else {
    alert("Please select atleast one seat!");
  }
}