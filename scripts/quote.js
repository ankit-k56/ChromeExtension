
let quote = document.getElementById('quote')
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '66f170cc9dmsh487c28e2f400f0cp1d56abjsnc3f0836c9b0a',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
    }
};

function fetchQuote(){fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        localStorage.setItem('quoteToday', response.content)
        renderQuote();
        
    })
    .catch(err => console.error(err));
}
function renderQuote(){
    let qt = localStorage.getItem('quoteToday');
    quote.innerText = `"${qt}"`;
}
let nextQuote = document.getElementById('nextQuote');
nextQuote.addEventListener('click', fetchQuote);
renderQuote();



