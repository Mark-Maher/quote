var output = document.getElementById("quoteLine");
var author = document.getElementById("quoteAuthor");
var Quotes = [
  {
    qoute:
      "“There is never a time or place for true love. It happens accidentally, in a heartbeat”",
    author: "Sarah Dessen, The Truth About Forever",
  },
  {
    qoute: "“You only live once, but if you do it right, once is enough.”",
    author: "Mae West",
  },
  {
    qoute: "“Be the change that you wish to see in the world.”",
    author: "Mahatma Gandhi",
  },
  {
    qoute: "“If you tell the truth, you don't have to remember anything.”",
    author: "Mark Twain",
  },
  {
    qoute:
      "“In three words I can sum up everything I've learned about life: it goes on.”",
    author: "Robert Frost",
  },
  {
    qoute:
      "“It is better to be hated for what you are than to be loved for what you are not.”",
    author: "Andre Gide, Autumn Leaves",
  },
  {
    qoute:
      "“There are only two ways to live your life. One is as though nothing is a miracle.   .”",
    author: "Albert Einstein",
  },
  {
    qoute: "“Without music, life would be a mistake.”",
    author: "Friedrich Nietzsche",
  },
  {
    qoute:
      "“The fool doth think he is wise, but the wise man knows himself to be a fool.”",
    author: "William Shakespeare, As You Like It",
  },
  {
    qoute: "“I have not failed. I've just found 10,000 ways that won't work.”",
    author: "Thomas A. Edison",
  },
  {
    qoute:
      "“I'm not upset that you lied to me, I'm upset that from now on I can't believe you.”",
    author: "Friedrich Nietzsche",
  },
];
var usedNumbers = [];
function getQuote() {
  var randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * Quotes.length);
  } while (usedNumbers.includes(randomNumber));
  usedNumbers.push(randomNumber);
  output.innerHTML = Quotes[randomNumber].qoute;
  author.innerHTML = Quotes[randomNumber].author;
  if (usedNumbers.length === Quotes.length) {
    usedNumbers = [];
  }
}
