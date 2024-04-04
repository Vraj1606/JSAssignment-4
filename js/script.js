const baseURL = 'http://www.omdbapi.com/';
const key = '43ce8922';

let url;

const searchTerm = document.querySelector('.search');
const submitBtn = document.querySelector('.submit');
const section = document.querySelector('section');
submitBtn.addEventListener( "click", fetchResults);

function fetchResults(event) 
{
    event.preventDefault();

    url = `${baseURL}?apikey=${key}&s=${searchTerm.value}`;
    console.log(url);
    fetch(url).then(response => {
        return response.json();
    }).then(json => displayResults(json))
};

function displayResults(json) {
    // STEP 5: Log to the console the results from the API
    console.log(json);
    /*
    // Clear out the old results…
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    };
    // STEP 6: Create the variable articles to capture the articles from the JSON object
    let articles = json.response.docs;

    if (articles.length === 0) {
        const para = document.createElement('p');
        para.textContent = 'No results returned.'
        section.appendChild(para);
    } else {
        for (let i = 0; i < articles.length; i++) {
            const article = document.createElement('article');
            const heading = document.createElement('h2');
            const link = document.createElement('a');
            const img = document.createElement('img');
            const para1 = document.createElement('p');

            const current = articles[i];
            console.log(current);
            // STEP 7: Look at the console output from the API…
            link.href = current.web_url;
            link.textContent = current.headline.main;
            para1.textContent = current.snippet;

            if (current.multimedia.length > 0) {
                img.src = 'https://www.nytimes.com/' + current.multimedia[0].url;
                img.alt = current.headline.main;
            };
            // STEP 8: Put each article together as an ARTICLE element and append it as a child of the SECTION element in the HTML
            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(img);
            article.appendChild(para1);
            section.appendChild(article);
        };
    };*/
};
