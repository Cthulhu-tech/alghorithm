class Programm {

    constructor(n:number) {
      this._n = n;
      this.polyEval = this.RandomArray(this._n);
    }
  
    private _n:number;
    private polyEval:number[];
  
    private twoMax(poly:number[]){
  
      const notDyplicateArray = this.RemoveDuplicate(poly);
      
      let prevMax = 0;
      let prevMaxIndex = 0;
      let lastMax = 0;
      let lastMaxIndex = 0;

      console.log(notDyplicateArray)

      for(let i = 0; i < notDyplicateArray.length; i++){

        if(notDyplicateArray[i] > lastMax){
          
          prevMax = lastMax;
          prevMaxIndex = lastMaxIndex;
          lastMax = notDyplicateArray[i];
          lastMaxIndex = i;
          
        }

        if(notDyplicateArray[i] > prevMax && lastMax > notDyplicateArray[i]){

          prevMax = notDyplicateArray[i];
          prevMaxIndex = i;

        }

      }

      console.log({lastMax, lastMaxIndex}, {prevMax, prevMaxIndex}, "my programm");
      let max = Math.max(...notDyplicateArray);
      let indexMax = notDyplicateArray.indexOf(max);
      notDyplicateArray.splice(indexMax,1);
      let min = Math.max(...notDyplicateArray);
      let indexMin = notDyplicateArray.indexOf(min);
      console.log(notDyplicateArray);
      console.log({max,indexMax}, {min,indexMin}, "javascript method");


  
    }
    private RemoveDuplicate(poly:number[]){
        let i = 1
        let j = 0
        while(i < poly.length){
           if(poly[j] === poly[i]){
               i++
           }else{
               j++
               poly[j] = poly[i]
           }
        }
        return poly;
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
  
  const random_N:number = Math.floor(Math.random() * (1 - 100) + 100);
  const poly = new Programm(random_N);
  poly.Main();