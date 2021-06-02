document
  .querySelector(".quote__generate")
  .addEventListener("click", generateQuote);

async function fetchQuote() {
  const response = await fetch(
    "https://api.whatdoestrumpthink.com/api/v1/quotes/random"
  );

  if (!response.ok) {
    throw new Error(`HTTP error! ${response.status}`);
  }

  const json = await response.json();
  return json;
}

function generateQuote() {
  fetchQuote()
    .then((res) => {
      document.querySelector(".quote__text").textContent = res.message;
    })
    .catch((err) => err);
}
