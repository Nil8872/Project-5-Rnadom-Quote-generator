const btn = document.getElementById('btn');
const quote = document.querySelector(".quote");
const author = document.querySelector(".authorName");

// const apikey = "hK+ZW7/96xF23tzJx12k4w==n8ThhyYzuyXreaVL";
// const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"
// const option = {
//     method: 'GET',
//     headers: { 'X-Api-Key': apikey },
// };
const getQuote = async () => {
    try {
        quote.innerHTML = "Updating...";
        btn.disabled = true;
        btn.innerText = "loading...";
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        btn.disabled = false;
        btn.innerText = "Next Quote";
        quote.innerHTML = data.content;
        author.innerHTML = data.author;
    }catch(err0r){
        quote.innerHTML = "Check your Internet and try again..."
        btn.disabled = false;
        btn.innerText = "Tell A Joke Me";
    };
}
btn.addEventListener('click', () => {

    getQuote();

})