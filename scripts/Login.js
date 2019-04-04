/* ---- Login ---- //
    Implements login screen.
  */
 class Login extends Page {
  constructor(id, parent) {
    super (id, parent);
    document.getElementById("loginButton").innerHTML = strings[loc].login;

    document.getElementById("loginButton").addEventListener("click",() => {
      window.location.href = "mainMenu.php";
    });
  }

}// ---- End Login ---- //

var app = (function() {
  "use strict"; 

  var login = new Login("login","loginPage");

})();





let login = (function() {
  "use strict"; 
  // ---- Global Variables ---- //


  // ---- Main ---- //
  //var fontInfo = new FontInfo();
  //loadJSON("/resources/fonts/bravura_metadata.json", fontInfo.storeContent.bind(fontInfo));
  let login = new Login("loginPage");

  // ---- Return Public Items ---- //
  return {
  };
})();

// ---- End Login ---- //



   /* ---- FontInfo ---- //
    Database tables with font information
  */
 class FontInfo {
  constructor(filename) {
    console.log("FontInfo");
    this.filename = filename;
    this.engravingDefaults = new DB("engravingDefaults");
    this.glyphs = new DB("glyphs");
    this.loadPromise = false;
  }

  async storeContent() {
    let data = await loadJson(this.filename);
    for (var item in data) {
      console.log(item);
      if (item === "glyphs") {
        for (var glyph in data[item]) {
          try {
            await this[this.glyphs.name].table.setItem(glyph, data[item][glyph]);
            //this.glyphs.testIfDone(entry); // don't need?
            //break;
          }
          catch (err) {
            console.log(err);
          }
        }
      }
      else if (item === "engravingDefaults") {
        for (var engravingDefault in data[item]) {
          try{
            await this[this.engravingDefaults.name].table.setItem(engravingDefault, data[item][engravingDefault]);
            //break;
          }
          catch (err) {
            console.log(err);
          }
        }
      }
      else if (item === "fontName") this.fontName = data[item];
      else if (item === "fontVersion") this.fontVersion = data[item];
      //else if (item === "engravingDefaults") this.engravingDefaults = data[item];
      else print("Extra data: " + item);
    }
  }

  //async makeSubDB(db, entry) {


/*    entry.forEach(async (item) => {
      await this[db.name].table.setItem()


      app.fontInfo.engravingDefaults.getItem(item).then(function(value) {
        this[item] = value;

      }).catch(function(err) {
        console.log("loadEngradingDefaults ");
        console.log(err);
      });
    }).bind(this);

    /*for (var glyph in entry) {
      this[db.name].table.setItem(glyph, entry[glyph]).then(db.testIfDone.bind(db)).catch(db.error.bind(db));
    }*/
  //}
} // ---- End FontInfo ---- //
