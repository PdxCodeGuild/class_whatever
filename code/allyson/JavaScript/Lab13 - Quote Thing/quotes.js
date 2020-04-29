const endpoint = 'http://quotes.stormconsultancy.co.uk/random.json';

function grabQuote() {
  fetch(endpoint)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      showQuote(data.message);
    })
    .catch(function () {
      console.log("I AM ERROR - ERROR");
    });
}

function showQuote(quote) {
  const quoteHere = document.querySelector('quote-here');
  quoteHere.textContent = quote;
}

const btnButton = document.querySelector('.refresh-quote');
btnButton.addEventListener('click, grabQuote')