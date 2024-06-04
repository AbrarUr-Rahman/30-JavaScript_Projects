const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

const getQuote = async (url) => {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data.content);
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
};

getQuote(api_url);

const tweet = () => {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "---- by " +
      author.innerHTML,
    "Tweet Window",
    "width=600,height=300"
  );
};
