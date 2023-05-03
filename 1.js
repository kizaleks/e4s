const test = {
    a: 1,
    b: 2,
    c: 3,
  }
  
  function obj(test){
    for (let key in test) {
        if (test.hasOwnProperty(key)) {
            console.log(key, test[key]); 
        }   
    }
    }
console.log (obj(test));
