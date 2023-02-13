const User = require('../src/User')

// User tests here
describe ('User', function () {
    test ('test username is valid', function(){
        const User1 = new User('Adam');
        expect(typeof User1.username).toBe('string');
    })
    test ('test password is valid', function(){
        const User2 = new User('Dave', 'securepass');
        expect(typeof User2.password).toBe('string');
    })
    test ('age is valid and meets requirements', function(){
        const User3 = new User('Sarah', 'spass', 18);
        expect(typeof User3.age).toBe('number');
        expect(User3.age >= 18).toBe(true);
    })
    test ('check login function works', function(){
        const User4 = new User('Alan', 'alanpass', 25);
        expect(User4.loggedIn == false).toBe(true);
        User4.login('wrongpass');
        expect(User4.loggedIn == false).toBe(true);
        User4.login('alanpass');
        expect(User4.loggedIn == true).toBe(true);
    })
    test ('test logout function works', function(){
        const User5 = new User('Susan', 'susanpass', 94);
        User5.login('susanpass');
        User5.logout();
        expect(User5.loggedIn == true).toBe(false);
    })
})
// test username

// test password

// test age

// test login

// test logout
