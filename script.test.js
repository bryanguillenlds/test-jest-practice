const googleSearch = require('./script');

const dbMock = [
  'cats.com',
  'dogs.com',
  'cheese.com',
  'disney.com',
  'dogpictures.com',
  'dogos.com'
]

describe('Google Search', () => {
  it('should return matches', () => {
    expect(googleSearch('dog', dbMock)).toEqual(['dogs.com', 'dogpictures.com', 'dogos.com']);
  });

  it('should work with undefined and null', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it('should return no more than 3 matches', () => {
    expect(googleSearch('dog', dbMock)).toHaveLength(3);
  })
})