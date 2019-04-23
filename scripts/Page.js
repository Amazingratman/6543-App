  /* ---- Page ---- //
  Page controler
  */
 class Page {
  constructor(id, parent) {
    this.id = id;
    this.parent = parent;
  }
  showOrHide(name) {
    if (this.id === name) {
      $("#" + this.id).show();
    }
    else {
      $("#" + this.id).hide();
    }
  }
}// ---- End Page ---- //
