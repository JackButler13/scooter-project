const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor(){
    this.stations = {
      StationA: [],
      StationB: [],
      StationC: []
    }
    this.registeredUsers = {}
  }
  registerUser(username, password, age){
    if (!(username in this.registeredUsers) == false){
      throw new Error('user already registered');
    }
    else if (age < 18){
      throw new Error('too young to register');
    }
    else {
      
      console.log('user has been created');
      this.registeredUsers[username] = new User(username, password, age);
      return new User(username, password, age);
    }
  }
}


module.exports = ScooterApp
