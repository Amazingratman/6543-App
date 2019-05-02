/* ---- Login ---- //
    Implements login screen.
  */
 class Login extends Page {
  constructor(id, parent) {
    super (id, parent);
    document.getElementById("loginButton").innerHTML = "login";

    document.getElementById("loginButton").addEventListener("click",() => {
      window.location.href = "mainMenu.php";
    });
  }

}// ---- End Login ---- //

let app = (function() {
  "use strict"; 

  let login = new Login("login","loginPage");

})();





let login = (function() {
  "use strict"; 
  let login = new Login("loginPage");

  // ---- Return Public Items ---- //
  return {
  };
})();

// ---- End Login ---- //

