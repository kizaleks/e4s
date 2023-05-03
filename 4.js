function Device(name) {
    this.name = name;
  //   this.electric = electric;
  //   this.switchon = switchon;     
  }
  
  Device.prototype.electricDeviceWork = function () {
      let work = false
      if (this.electric && this.switchon) {
        work = true;
      } 
     return (work);
     }
   
  function EleDevice(name, power, electric, switchon) {
    this.name = name;
    this.power = power;
    this.electric = electric;
    this.switchon = switchon;
    this. showPower = function(){
      console.log(power)
    }
  }
    
  EleDevice.prototype = new Device();
  
    let sumPower = function(){
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
  const lamp = new EleDevice(name = "lampa", power = 30, electric = true, switchon = true);
  const comp = new EleDevice(name = "compyter", power = 20, electric = true, switchon = false);
  let ElecDiv = [lamp, comp];
  console.log('Проверяем включена ли лампа?');
  console.log(lamp.electricDeviceWork());
  console.log('Потребляемая мощъность включенных электроприборов');
  console.log(sumPower(ElecDiv));
  console.log('Мощъность лампы');
  lamp.showPower();