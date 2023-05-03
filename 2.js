const test = {
    a: 1,
    b: 2,
    c: 3,
  }
function obj(test, stroka){
    return (stroka in test);
    }
console.log('Есть ли у переданного объекта свойство с данным именем');
console.log (obj(test, 'a'));