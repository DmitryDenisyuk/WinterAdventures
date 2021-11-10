// display date in the footer
let todayDate = new Date().toLocaleDateString();
document.getElementById("date").innerHTML = todayDate;

window.onload = function () {
  document.getElementById( 
      "displaytotal"
    ).innerHTML = localStorage.getItem("username");
    
}