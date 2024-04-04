const baseURL = 'https://www.omdbapi.com/';
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

function displayResults(json)
{
    console.log(json);
    while (section.firstChild) 
    {
        section.removeChild(section.firstChild);
    };
    let details = json.Search;
    console.log(details);
    if (details.length === 0)
    {
        const para = document.createElement('p');
        para.textContent = 'No results returned.'
        section.appendChild(para);
    } 
    else 
    {
        for (let i = 0; i < details.length; i++) 
        {
            const article = document.createElement('article');
            const heading = document.createElement('h1');
            const para1 = document.createElement('p');
            const para2 = document.createElement('p');
            const para3 = document.createElement('p');
            const img = document.createElement('img');
            const movietrailer = document.createElement('a');
            const br = document.createElement('br');
            
            heading.textContent = 'Movie name:'+ details[i].Title;
            para1.textContent = 'Year: ' + details[i].Year;
            para2.textContent = 'Type: ' + details[i].Type;
            para3.textContent = 'IMDB ID: ' + details[i].imdbID;
            img.src = details[i].Poster;
            movietrailer.textContent = 'Click here to watch movie trailer';
            movietrailer.href = `https://www.youtube.com/results?search_query=${details[i].Title}+trailer`;
            movietrailer.target = '_blank'; // Open the link in a new tab


            article.appendChild(heading);
            article.appendChild(img);
            article.appendChild(para1);
            article.appendChild(para2);
            article.appendChild(para3);
            article.appendChild(movietrailer);
            article.appendChild(br);
            section.appendChild(article);
            
        };
    };

};
