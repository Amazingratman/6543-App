/* ---- DB ---- //
 */
 class DB {
  constructor(tableName) {
    this.name = tableName;
    this.table = localforage.createInstance({name: tableName});
    this.loaded = false;
    this.size = 0;
  }

  testIfDone(value) {
    this.size ++;
    if (this.size === value.length) {
      this.loaded = true;
      console.log(this.name + " loaded");
    }
  }

  error(err) {
    console.log(err);
  }
} // ---- End DB ---- //