/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Quotes array with quote objects. Not every object contains a citation or a year, however every quote contains the quote text and source.
***/

const quotes = [
  {
    quote: "You can never understand everything. But, you should push yourself to understand the system.",
    source: "Ryan Dahl",
    citation: "Creator of Node.js",
  },
  { 
    quote: "Before software can be reusable it first has to be usable.",
    source: "Ralph Johnson",
    citation: "",
  },
  {
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    source: "Martin Fowler",
    citation: "Author of Refactoring",
  },
  {
    quote: "... programming requires more concentration than other activities. It's the reason programmers get upset about 'quick interruptions' - such interruptions are tantamount to asking a juggler to keep three balls in the air and hold your groceries at the same time.",
    source: "Steven C. McConnell",
    citation: "Author of Code Complete",
  },
  {
    quote: "Why do we never have time to do it right, but always have time to do it over?",
    source: "Anonymous",
    citation: "",
  },
  {
    quote: "Simple things should be simple, complex things should be possible.",
    source: "The Wiki Way: Quick Collaboration on the Web",
    citation: "",
  },
  {
    quote: "One principle problem of educating software engineers is that they will not use a new method until they believe it works and, more importantly, that they will not believe the method will work until they see it for themselves.",
    source: "Humphrey, W.S.",
    citation: "The Personal Software Process",
  }
]


/***
  getRandomQuote()  generates a random number. The number is used to find the index of the quote array, thereby returning a random quote.
***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let quote = quotes[randomNumber];
  return quote
}

/*** 
 * Change background color
 * generate random rgb number from 0 to 255
 * select body and button
 * set opacity to .8 and color to empty variable
 * create random color by generating random numbers and printing an rgba(x,x,x,.8)
 * set new color to button and body
***/
function randomColor() {
  function randomNumber() {
    let number = Math.floor(Math.random() * 256);
    return number
  }
  let body = document.getElementsByTagName("BODY")[0];
  let button = document.getElementById('loadQuote');
  
  let opacity = .8;
  let color = '';
  color += "rgba(" + randomNumber() + "," + randomNumber() + "," + randomNumber() + "," + opacity +  ")";
  button.style.backgroundColor = color;
  body.style.backgroundColor = color;
}

/***
  printQuote() creates two <p> tags (and two <span> tags conditionally contained within the second <p> tag). 
  The function executes and builds html text. This text is built via string concatenation using the random quote generated from getRandomQuote().
  Finally, the function adds the content to the html element with id="quote-box".
***/

function printQuote() {
  let randomQuote = getRandomQuote();
  //Build html content by declaring empty variable and building variable from randomQuote 's content
  let theHTML = '';
  theHTML += "<p class='quote'>" + randomQuote.quote + "</p>";
  theHTML += "<p class='source'>" + randomQuote.source;
  if (randomQuote.citation) {
    theHTML += "<span class='citation'>" + randomQuote.citation + "</span>";
  }
  if (randomQuote.year) {
    theHTML += "<span class='citation'>" + randomQuote.year + "</span>";
  }
  theHTML += "</p>";
  //Load html into page when function executes
  var quoteBox = document.getElementById('quote-box');
  quoteBox.innerHTML = theHTML;
  randomColor();
}

//Change Quote every 7 seconds.
setInterval(printQuote,7000);

/***
  Find element with id="loadQuote" and add an eventlistener.
  On click, execute function "printQuote"
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);