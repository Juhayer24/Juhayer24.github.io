const ghpages = require('gh-pages');

ghpages.publish('build', function(err) {
  if (err) {
    console.error('Deploy failed:', err);
  } else {
    console.log('Deploy complete!');
  }
});
