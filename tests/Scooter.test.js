const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('Scooter tests', function(){
  test ('checking scooter is an object', function(){
    const scooter1 = new Scooter('station1');
    expect(typeof scooter1).toBe('object');
  })
  test ('check rent method works', function(){
    const scooter2 = new Scooter('station1');
    const user1 = new User('David', 'pass', 25);
    scooter2.rent(user1);
    expect(scooter2.user).toBe('David');
    expect(scooter2.station).toBe(null);
  })
  test ('check dock method works', function(){
    const scooter3 = new Scooter('station1');
    const user2 = new User('Sammy', 'pass', 25);
    scooter3.rent(user2);
    scooter3.dock('station1');
    expect(scooter3.station).toBe('station1');
    expect(scooter3.user).toBe(null);
  })
  // need to apply timer to below test
  // test ('check requestRepair method works', function(){
  //   const scooter4 = new Scooter('station1');
  //   scooter4.isBroken = true;
  //   scooter4.requestRepair();
  //   expect(scooter4.isBroken).toBe(false);
  // })
})

//Method tests

  // tests here!

  //rent method

  //dock method

  //requestRepair method

  //charge method


