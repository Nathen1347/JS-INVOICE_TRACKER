let services = [];
let costArr = [];

const washPrice = 10;
const mowPrice = 20;
const pullPrice = 30;

const wash = document.getElementById("wash-car");
const mow = document.getElementById("mow-lawn");
const pull = document.getElementById("pull-weeds");
const clear = document.getElementById("clear");
const total = document.getElementById("total-cost");
const message = document.getElementById("message");
// const costList = document.getElementById("cost-list");

function removeItem(){
    services.splice(i, 1)
}

function renderServices() {
  const invoiceList = document.getElementById("invoice-list");
  invoiceList.innerHTML = "";
  for (let i = 0; i < services.length; i++) {
    const service = document.createElement("li");
    service.innerHTML = `${services[i]}`
    invoiceList.append(service);
  }
}

function renderCost(){
    const costList = document.getElementById("cost-list");
    costList.innerHTML = "";
    let sum = 0;
    for(let i = 0; i < costArr.length; i++) {
        const cost = document.createElement("li");
        cost.innerHTML = `$${costArr[i]}`
        costList.append(cost);
        message.textContent = "We accept cash, credit card, or Paypal"
        let totalCost = sum += costArr[i];
        total.textContent =  `$${totalCost}`;
    }
}

renderServices();
renderCost();


wash.addEventListener("click", function () {
  wash.value = `Wash Car`;
  services.push(wash.value);
  costArr.push(washPrice);
  wash.disabled = true;
  renderServices();
  renderCost();
});


mow.addEventListener("click", function () {
  mow.value = `Mow Lawn`;
  services.push(mow.value);
  costArr.push(mowPrice);
  mow.disabled = true;
  renderServices();
  renderCost();
});

pull.addEventListener("click", function () {
  pull.value = `Pull Weeds`;
  services.push(pull.value);
  costArr.push(pullPrice);
  pull.disabled = true;
  renderServices();
  renderCost();
});

clear.addEventListener("click", function () {
    services = [];
    costArr = [];
    renderServices();
    renderCost();
    total.textContent = "$0"
    message.textContent = "";
});


