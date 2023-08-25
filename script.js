const googleDatabase = [
  'cats.com',
  'souprecipes.com',
  'flowers.com',
  'animals.com',
  'catpictures.com',
  'myfavouritecats.com'
];

const googleSearch = (searchTerm, database) => {
  const matches = database.filter((site) => {
    return site.includes(searchTerm);
  });

  return matches.length > 3 ? matches.slice(0, 3) : matches;
}

module.exports = googleSearch;