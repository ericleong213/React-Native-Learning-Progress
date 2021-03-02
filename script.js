// $(document).ready(function () {
//   $("button").click(function () {
//     $("p").hide();
//   });
// });
function myFunction() {
  alert("Form is submitted");
}

console.log("firstWeb");

var handleClick = function (event) {
  console.log("handleClicked");
  var xhr = new XMLHttpRequest();
  xhr.open("post", "/echo/json/", true);

  // xhr.onreadystatechange = function () {
  //   console.log(this.readyState);
  // };
  // xhr.onload = function () {
  //   console.log(request)
  //   if (this.status == 200) {
  //     console.log(this.responseText);
  //   }
  // };

  xhr.send();
};

var button = document.querySelector("#big-button");
button.addEventListener("click", handleClick);
