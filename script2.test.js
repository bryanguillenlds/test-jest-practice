const swapi = require('./script2.js');
const fetch = require('node-fetch');

describe('SWAPI TESTS', () => {
  // Passing done so that we can tell jest to wait for the promise to return and only then be done with the test.
  it('should return count', (done) => {
    swapi.getPeople(fetch).then(data => {
      expect(data.count).toEqual(87);
      done();
    })
  });

  it('should return people with a promise', (done) => {
    swapi.getPeoplePromise(fetch).then(data => {
      expect(data.count).toEqual(87);
      done();
    })
  })
})