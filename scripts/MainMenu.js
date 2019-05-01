 
  /* ---- MainMenu ---- //
    Implements main menu.
  */
 class MainMenu {
  constructor() {
    this.id = "mainMenu";
    this.generateHtml();
    this.hideSubmenus();
    this.attachSubmenuToggle();
    this.rotateDropdownButton();
    this.activeColorChange();
  }

  setElement(id, content) {
    console.log(this.id+id);
    document.getElementById(this.id+id).innerHTML = content;
  }


  generateHtml() {
    this.setSubmenus("");
    this.setSubmenus("");
    this.setSubmenus("");

    this.setElement("", );
    this.setElement("", );
    this.setElement("", );
    
    this.setElement("", );
  }
 
};
  
let app = (function() {
  "use strict"; 

  let mainMenu = new MainMenu();

})();


