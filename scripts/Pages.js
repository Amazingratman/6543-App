
  /* ---- Pages ---- //
    page manager
  */
 class Pages {
  constructor(startPage) {
    this.pages = {
      landing: new Landing("landingPage", this),
      main: new Main("mainMPage", this),
      login: new Login("loginPage", this),
    };
    this.setCurrent(startPage);
  }

  setCurrent(currentPage) {
    this.current = currentPage;
    for (let i in this.pages) {
      this.pages[i].showOrHide(this.current);
    }
  }

  back() {
    this.setCurrent("mainPage");
  }
}// ---- End Pages ---- //
