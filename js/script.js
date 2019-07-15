/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

const quotes = [
  {
    quote: "You can never understand everything. But, you should push yourself to understand the system.",
    source: "Ryan Dahl",
    citation: "Creator of Node.js",
    year: ""
  },
  { 
    quote: "Before software can be reusable it first has to be usable.",
    source: "Ralph Johnson",
    citation: "",
    year: ""
  },
  {
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    source: "Martin Fowler",
    citation: "Author of numerous books on refactoring",
    year: ""
  },
  {
    quote: "... programming requires more concentration than other activities. It's the reason programmers get upset about 'quick interruptions' - such interruptions are tantamount to asking a juggler to keep three balls in the air and hold your groceries at the same time.",
    source: "Steven C. McConnell",
    citation: "Author of Code Complete",
    year: ""
  },
  {
    quote: "Why do we never have time to do it right, but always have time to do it over?",
    source: "Anonymous",
    citation: "",
    year: ""
  },
  {
    quote: "Simple things should be simple, complex things should be possible.",
    source: "The Wiki Way: Quick Collaboration on the Web, Bo Leuf, Ward Cunningham",
    citation: "",
    year: ""
  },
  {
    quote: "One principle problem of educating software engineers is that they will not use a new method until they believe it works and, more importantly, that they will not believe the method will work until they see it for themselves.",
    source: "Humphrey, W.S.",
    citation: "The Personal Software Process",
    year: ""
  }
]


/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Use the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let quote = quotes[randomNumber];
  return quote
}

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote variable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote() {
  let quote = getRandomQuote();
  let theHTML = '';
  theHTML += "<p class=\"quote\">" + quote.quote + "</p>";
  theHTML += "<p class=\"source\">" + quote.source;
  if (quote.citation) {
    theHTML += "<span class=\"citation\">" + quote.citation + "</span>";
  }
  if (quote.year) {
    theHTML += "<span class=\"citation\">" + quote.year + "</span>";
  }
  theHTML += "</p>";
  document.getElementById('quote-box').innerHTML = theHTML;
  console.log(theHTML);
}

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.