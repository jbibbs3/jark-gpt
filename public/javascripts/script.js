let question1 = document.querySelector('.question-1');

let roles = document.querySelector('.roles');

var generateBtn = document.getElementById('generateSP');
generateBtn.addEventListener('click', fetch);

fetch('')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      response.json().then(function(data) {
        console.log(data);
        document.getElementById('w3review').value = data;
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

