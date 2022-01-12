const BOOKCOLLECTION = [
    {
        title: 'The Prophet',
        author: 'Khalil Gibran',
        publishYear: 1994,
        authorAlive: 'no',
        genre: ['Philosophy', 'Life'],
        description: 'The Prophet is a collection of poetic essays that are philosophical, spiritual, and, above all, inspirational. Gibran’s musings are divided into twenty-eight chapters covering such sprawling topics as love, marriage, children, giving, eating and drinking, work, joy'
    },
    {
        title: 'Little Red Riding Hood',
        author: 'Brothers Grimm',
        publishYear: 1750,
        authorAlive: 'no',
        genre: ['Fairytale', 'Fantasy'],
        description: 'Little Red Riding Hood" is a European fairy tale about a young girl and a Big Bad Wolf. Its origins can be traced back to several pre-17th century European folk tales.'
    },
    {
        title: 'Dracula',
        author: 'Bram Stoker',
        publishYear: 1895,
        authorAlive: 'no',
        genre: ['Horror', 'Thriller'],
        description: 'Dracula comprises journal entries, letters, and telegrams written by the main characters. It begins with Jonathan Harker, a young English lawyer, as he travels to Transylvania. Harker plans to meet with Count Dracula, a client of his firm, in order to finalize a property transaction. When he arrives in Transylvania, the locals react with terror after he discloses his destination: Castle Dracula.'
    },
    {
        title: 'Think and Grow Rich',
        author: 'Napoleon Hill',
        publishYear: 1937,
        authorAlive: 'no',
        genre: ['Self-help', 'Succes'],
        description: 'Think and Grow Rich is based on Hill\'s earlier work The Law of Success, and is the result of more than twenty years of study of many individuals who had amassed personal fortunes.'
    },
    {
        title: 'Cooking with Cara Pills',
        author: 'Dorian Coppenrath',
        publishYear: 2021,
        authorAlive: 'yes',
        genre: ['Cooking', 'Beer'],
        description: "Eindelijk is het allereerste kookboek over Carapils te koop! Een musthave voor elke student en Cara fan. Een boek voor en door studenten vol leuke recepten zoals pasta Carabonara en Chili con Cara"
    },
]

// TODO: Place the elements from our book collection inside the container


for ( i = 0 ; i < BOOKCOLLECTION.length ; i++) {
    //  Create a new div
    const mainDiv = document.createElement("div");
    //  Within that div add another div with the card class
    const cardDiv = document.createElement("div")
    cardDiv.className = "uk-card uk-card-default uk-card-body";
    // Append the cardDiv in the main div (UIKit uses the extra div as margin for some reason)
    mainDiv.appendChild(cardDiv);
    
    //add the title  of the book in a H2 & publish date in a badge and append it to the carddiv
    //Title of the book
    const h2element = document.createElement("h2");
    h2element.innerHTML = BOOKCOLLECTION[i].title;
    h2element.className = "uk-card-title";
    cardDiv.appendChild(h2element);
    // Year Published
    const publishDateBadge = document.createElement("div");
    publishDateBadge.innerHTML = BOOKCOLLECTION[i].publishYear;
    publishDateBadge.className = "uk-card-badge uk-label";
    cardDiv.appendChild(publishDateBadge);
    // Author
    const author = document.createElement("p");
    author.innerHTML = BOOKCOLLECTION[i].author;
    author.className = "uk-text-meta uk-margin-remove-top"
    cardDiv.appendChild(author);
    // Description of the book
    const summary = document.createElement("p")
    summary.innerHTML = BOOKCOLLECTION[i].description;
    cardDiv.appendChild(summary);
    // Genres
    const genres = document.createElement("p")
    genres.innerHTML = "Genres: " + BOOKCOLLECTION[i].genre;
    genres.className = "uk-text-bold"
    cardDiv.appendChild(genres);




    
    
    
    
    
    
    
    
    // get the container element where the cards will be placed and append the new div
    const cardHolder = document.querySelector(".uk-grid-match");
    cardHolder.appendChild(mainDiv);

}


