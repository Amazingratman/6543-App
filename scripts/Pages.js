
  /* ---- Pages ---- //
    Manages all pages.
  */
 class Pages {
  constructor(startPage) {
    // Order matters for button attachment
    this.pages = {
      landing: new Landing("landingPage", this),
      main: new Main("mainMPage", this),
      hamburger: new Hamburger("hamburgerPage", this),
      login: new Login("loginPage", this),
    };
    this.pages.hamburgerMenu.visible = false;
    this.setCurrent(startPage);
  }

  setCurrent(currentPage) {
    //console.log("setCurrent:  "+ currentPage);
    this.current = currentPage;
    for (let i in this.pages) {
      //console.log("current: " + this.current);
      this.pages[i].showOrHide(this.current);
    }
  }

  back() {
    this.setCurrent("mainPage");
  }
}// ---- End Pages ---- //
