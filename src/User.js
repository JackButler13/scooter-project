class User {
  constructor(name, password, age, loggedIn = false){
    this.name = name;
    this.password = password;
    this.age = age;
    this.loggedIn = loggedIn;
  }
  login(password){
    if (password == this.password){
      this.loggedIn = true;
    }
  }
  logout(){
    this.loggedIn = false;
  }
}

module.exports = User
