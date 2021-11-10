// display date in the footer
let todayDate = new Date().toLocaleDateString();
document.getElementById("date").innerHTML = todayDate;


document.getElementById("newsletterSubmit").addEventListener("click", signUp);

function signUp(){
  username = document.getElementById("newsletterName").value;
  localStorage.setItem("username", username);
    var usernameFromLocalStorage = localStorage.getItem("username");
    console.log(usernameFromLocalStorage);
    document.getElementById( // display total calories to popup
      "displaytotal"
    ).innerHTML = usernameFromLocalStorage;
}

window.onload = function () {
  document.getElementById( // display total calories to popup
      "displaytotal"
    ).innerHTML = localStorage.getItem("username");
    
}