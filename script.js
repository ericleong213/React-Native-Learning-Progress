//prevent the page from submit
// var form = document.getElementById("contactFormNotActive");
// function handleForm(event) {
//   event.preventDefault();
// }

//alert user after submit
function submitted() {
  alert("form submitted");
}

var handleClick = function (event) {
  console.log("handleClicked");
  message.innerHTML = "HELLO, Surprised!";
};

var button = document.getElementById("btn");
button.addEventListener("click", handleClick);

var message = document.getElementById("message");

console.log("hello");
