const fetch = require('node-fetch');

fetch('https://api.github.com/users/manoelalmeida-io')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log('Erro:', err);
  });