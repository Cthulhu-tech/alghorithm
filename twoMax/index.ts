const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Programm {

    constructor(n:number) {
      this._n = n;
      this.polyEval = this.RandomArray(this._n);
    }
  
    private _n:number;
    private polyEval:number[];
  
    private twoMax(poly:number[]){
  

      let prevMax = 0;
      let prevMaxIndex = 0;
      let lastMax = 0;
      let lastMaxIndex = 0;

      console.log(poly)

      for(let i = 0; i < poly.length; i++){

        if(poly[i] > lastMax){
          
          prevMax = lastMax;
          prevMaxIndex = lastMaxIndex;
          lastMax = poly[i];
          lastMaxIndex = i;
          
        }

        if(poly[i] > prevMax && lastMax > poly[i]){

          prevMax = poly[i];
          prevMaxIndex = i;

        }

      }

      console.log({lastMax, lastMaxIndex}, {prevMax, prevMaxIndex}, "my programm");
      let max = Math.max(...poly);
      let indexMax = poly.indexOf(max);
      poly.splice(indexMax ,1 , -1);
      let min = Math.max(...poly);
      let indexMin = poly.indexOf(min);
      console.log(poly);
      console.log({max,indexMax}, {min,indexMin}, "javascript method");

    } 
    private RandomArray(n: number):number[]{
      let result:number[] = new Array(n);
      for (let i = 0; i < n; i++){
  
          result[i] = Math.floor(Math.random() * (1000 - 100) + 100);
  
      }
      return result;
    }
  
    public Main() {
  
      this.twoMax(this.polyEval);
      
    }
  }
  
rl.question('Array length: ', (answer:number) => {
  const poly = new Programm(Number(answer));
  poly.Main();
  rl.close();
});