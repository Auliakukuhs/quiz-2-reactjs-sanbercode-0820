class BangunDatar {
  constructor(nama){
    this.nama = nama;
  }
  
  get luas() {
    return "";
  }

  get keliling() {
    return "";
  }
}

class Lingkaran extends BangunDatar {
  constructor(nama, r){
    super(nama);
    this.r = r;
  }

  get luas(){
    return (Math.PI * this.r * this.r).toFixed(2);  
  }

  /**
   * @param {any} r
   */
  set jariJari(r){
    this.r = r;
  }

  get keliling(){
    return (2 * Math.PI * this.r).toFixed(2)
  }
}

class Persegi extends BangunDatar {
  constructor(nama, s){
    super(nama);
    this.s = s;
  }

  get luas(){
    return (this.s*this.s).toFixed(2);  
  }

  /**
   * @param {any} s
   */
  set panjang(s){
    this.s = s;
  }

  get keliling(){
    return (4*this.s).toFixed(2)
  }
}

const lingkaran1 = new Lingkaran()

lingkaran1.r = 4

console.log(lingkaran1.luas, lingkaran1.keliling)

const persegi1 = new Persegi()

persegi1.s = 5

console.log(persegi1.luas, persegi1.keliling)