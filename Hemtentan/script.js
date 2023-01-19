
function generateList() {
    var numElements = Math.floor(Math.random() * (10 - 5 + 1) + 5);
    var list = [];
    for (var i = 0; i < numElements; i++) {
      list.push(Math.floor(Math.random() * 99) + 1);
    }
    return list;
  }
  var list = generateList();
var resultDiv = document.getElementById("result");
var listHTML = "<ul>";
for (var i = 0; i < list.length; i++) {
  listHTML += "<li>" + list[i] + "</li>";
}
listHTML += "</ul>";
resultDiv.innerHTML = listHTML;
function checkCode() {
    var input = document.getElementById("input").value;
    if (isNaN(input)) {
      console.log("The value is not a number.");
    } else {
      if (input == 1337) {
        console.log("correct code!");
      } else if (input < 1337) {
        console.log("The code is wrong, the code is a higher number");
      } else {
        console.log("The code is wrong, the code is a lower number");
      }
    }
  }
  document.getElementById("input").addEventListener("change", checkCode);
