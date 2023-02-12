class Scooter{
  static nextSerial = 1;
  constructor(station){
    this.station = station;
    this.serial = Scooter.nextSerial;
    this.user = null;
    this.charge = 100;
    this.isBroken = false;
    ++Scooter.nextSerial;
  }
  rent(user){
    if (this.charge <= 20){
      throw new Error('scooter needs to charge');
    }
    else if (this.isBroken == true){
      throw new Error('scooter needs repair');
    }
    else {
      this.user = user;
    }
  }
  dock(station){
    this.station = station;
    this.user = null;
  }
  async recharge(){
    console.log('Charging scooter');
    await new Promise(resolve => setTimeout(resolve, 3000));
    this.charge = 100;
    console.log('Charge complete');
  }
  async requestRepair(){
    console.log('Beginning repair');
    await new Promise(resolve => setTimeout(resolve, 5000));
    this.isBroken = false;
    console.log('Repair Completed')
  }
}

Scooter1 = new Scooter('station 1')
Scooter1.rent('Adam')
console.log(Scooter1)
module.exports = Scooter
