/* ---- Login ---- //
    Implements login screen.
  */
 class Login extends Page {
  constructor(id, parent) {
    super (id, parent);
	
	 let html = '<div id="loginPage">';
    html += '<button id="loginButton">';
    html += '</button>';
	html += '<input id="nameInput">';
	html += '</input>';
	html += '<input id="passwordInput">';
	html += '</input>';
    html += '</div>';
	
    document.getElementById("loginButton").innerHTML = "login";

    document.getElementById("loginButton").addEventListener("click",() => {
      window.location.href = "mainMenu.php";
    });
  }

}// ---- End Login ---- //


