// js code here
function dateTime() {
  document.getElementById("date").innerHTML = Date();
}

// change text
function changeText() {
  document.getElementById("changeText").innerHTML = "Changed by Sujon";
}

// change img with source
function yes() {
  document.getElementById("changeImg").src = "images/happy.jpg";
}
function no() {
  document.getElementById("changeImg").src = "images/smiling.jpg";
}
// change text size
function changeFontSize() {
  document.getElementById("changeFontSize").style.fontSize = "30px";
  //   document.getElementById("changeFontSize").style.fontWeight = "bold";
}

// show hide
function show() {
  document.getElementById("show_hide").style.display = "block";
}
function hide() {
  document.getElementById("show_hide").style.display = "none";
}

// addition
function add() {
  document.getElementById("add").innerHTML = 5 + 5;
}
add();

// alert
function alt() {
  window.alert(7 + 9);
}
// alt();

// print  page
function printPage() {
  window.print();
}
// variable_add
let x = 5;
y = 10;
z = x + y;

function variable_add() {
  document.getElementById("variable_add").innerHTML = z;
}
variable_add();

// greeting
function greet() {
  document.getElementById("greet1").innerHTML = "Assalamualaikum, Vaiya";
  document.getElementById("greet2").innerHTML = "How are you ?";
}

// multiplication
function multiplication() {
  let x = 5,
    y = 10,
    z = 2;
  document.getElementById("multiplication").innerHTML = (x + y) * z;
}
multiplication();

//
const cars = ["volvo", "tyoto", "tata"];
cars[1] = "bmw";
cars.push("sujon");
console.log(cars);

function boolean() {
  let x = 5,
    y = 5,
    z = 6;
  document.getElementById("boolean").innerHTML = (x == y) + "<br />" + (x == z);
}
boolean();

// funtion with return value
function func(a, b) {
  return a * b;
}
document.getElementById("func").innerHTML = func(4, 3);

// Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
document.getElementById("fahrenheitToCelsius").innerHTML =
  fahrenheitToCelsius(98).toFixed(3);

// object
const car = { type: "Fiat", model: "500", color: "Blue" };
document.getElementById("car_obj").innerHTML = "Car Color: " + car.color;

// object 2
const person = {
  firstName: "Sujon",
  lastName: "Madbor",
  id: 1083,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.fullName());
document.getElementById("nested_obj").innerHTML = person.fullName();

// length
let word = "webDevelopment";
document.getElementById("length").innerHTML = word.length;

// slice
let text = "Apple, Mango, Banana";
document.getElementById("slice_item").innerHTML = text.slice(7, 12);

// replace text
function replaceText() {
  let rText = document.getElementById("replaceText").innerHTML;
  document.getElementById("replaceText").innerHTML = rText.replace(
    "Microsoft",
    "Sujon"
  );
}

// border_radius
function circle() {
  document.getElementById("border_radius").style.borderRadius = "50%";
}
// box shadow
function shadow() {
  document.getElementById("box_shadow").style.boxShadow = "0 0 20px orange";
}
