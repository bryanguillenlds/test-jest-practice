const swapi = require('./script2.js');
const fetch = require('node-fetch');
const {getPeople} = require("./script2");

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
  });

  it('tests getPeople (fetch) with by Mocking the API call', () => {
    // Mock Return Value has to be passed the value that the actual function that we are mocking should return.
    // In this case it is a promise that returns a promise containing the count and result.
    const mockFetch = jest.fn()
      .mockReturnValue(Promise.resolve({
        json: () => Promise.resolve({
          count: 87,
          results: [0, 1, 2, 3, 4, 5]
        })
      }));


    expect.assertions(4);

    // Test getpPeople method passing the mocked fetch call. Needs to be return because it is async.
    return swapi.getPeople(mockFetch)
      .then(data => {
        // We can also spy into mocked functions to check properties like how many times it has been called
        expect(mockFetch.mock.calls.length).toBe(1);
        expect(mockFetch).toBeCalledWith('https://swapi.py4e.com/api/people/');
        expect(data.count).toEqual(87);
        expect(data.results.length).toBeGreaterThan(5);
      });
  });
})