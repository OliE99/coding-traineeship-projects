const submitButton = document.getElementById('submit-quote');
const deletedQuoteContainer = document.getElementById('deleted-quote');

submitButton.addEventListener('click', () => {
    const quote = document.getElementById('quote').value;
    const person = document.getElementById('person').value;

  fetch(`/api/quotes/${quoteId}`, { method: 'DELETE' })
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(({ quote }) => {
      console.log(quote)
      const deletedQuote = document.createElement('div');
      deletedQuote.innerHTML = `
    <h3>'Quote deleted!'</h3>
    <div class="quote-text">${quote.quote}</div>
    <div class="attribution">- ${quote.person}</div>
    <p>Go to the <a href="index.html">home page</a> to request and view all quotes.</p>
    `
      deletedQuoteContainer.appendChild(deletedQuote);
    });
});