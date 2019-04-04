  /* ---- Page ---- //
    Handles showing/hiding of pages.
  */
 class Page {
  constructor(id, parent) {
    //console.log("Page: " + id);
    this.id = id;
    this.parent = parent;
  }
  showOrHide(name) {
    //console.log("ShowOrHide: " + this.id);
    if (this.id === name) {
      $("#" + this.id).show();
    }
    else {
      $("#" + this.id).hide();
    }
  }
}// ---- End Page ---- //
