 
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
    this.setSubmenus("intervals");
    this.setSubmenus("scales");
    this.setSubmenus("chords");

    this.setElement("Rd", strings[loc].rd);
    this.setElement("Md", strings[loc].md);
    this.setElement("Hd", strings[loc].hd);
    
    this.setElement("Help", strings[loc].help);
  }
 
};
  
let app = (function() {
  "use strict"; 

  let mainMenu = new MainMenu();

})();


