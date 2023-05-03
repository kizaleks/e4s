//Класс девайс
class Device{
    constructor(name) {
    this.name = name;
  //   this.electric = electric;
  //   this.switchon = switchon;
    }
  }  
  //Клас электронные девайсы    
  class ElectricDevice extends Device{    
    constructor(name, power, electric, switchon ){
    super(name);
    this.power = power;
    this.electric = electric;
    this.switchon = switchon;    
    this. showPower = function(){
      console.log(power)
    }    
  }
    electricDeviceWork(){
    let work = false
      if (this.electric && this.switchon) {
        work = true;
      }
     return work;
  }
}
function sumPower(ElecDiv){
      let sum = 0;
     for(let value of ElecDiv){
      if (value.electricDeviceWork()){
          sum += value.power;
      }else{
          sum;
      }  
     }
    return sum;
  }
  const lamp = new ElectricDevice("lampa", 30, true, true);
  const comp = new ElectricDevice("compyter", 20, true, true);
  const flight = new ElectricDevice("televisor", 10, true, false);
 let ElecDiv = [lamp, comp, flight];
 console.log('Проверяем включена ли лампа?');
 console.log(lamp.electricDeviceWork());
 console.log('Потребляемая мощъность включенных электроприборов');
 console.log(sumPower(ElecDiv));
console.log('Мощъность лампы');
lamp.showPower();
 