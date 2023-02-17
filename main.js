let empArray = [];

function clk() {
  let name = document.getElementById("name");
  let model = document.getElementById("model");
  let number = document.getElementById("number");
  let info = document.getElementById("info");
  let condition = document.getElementById("condition");
  let carObj = {
    name: name.value,
    model: model.value,
    number: number.value,
    info: info.value,
    condition: condition.value,
  };

  let added = alert("Added✅");

  empArray.push(carObj);
  refresh();
}

function refresh() {
  let tableList = document.getElementById("addTable");
  tableList.innerHTML = " ";

  for (let car of empArray) {
    let carList = document.createElement("li");
    carList.innerHTML =
      "<strong>Name:</strong> " +
      car.name +
      " - <strong>model:</strong> " +
      car.model +
      " - <strong>number:</strong> " +
      car.number +
      " - <strong>info:</strong> " +
      car.info +
      " - <strong>condition:</strong> " +
      car.condition;
    tableList.appendChild(carList);
  }
}

function clear() {
  document.getElementById("tableUl").reset();
}
