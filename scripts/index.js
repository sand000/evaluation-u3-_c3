// Store the wallet amount to your local storage with key "amount"

// book movies 
function book_movies(){
    window.location.href="movies.html";
  }


// add to wallet

    //  JSON.parse(localStorage.getItem("amount")) || [];

    let total = Number(0);

    function add_to_wallet(){
    
    let amount = document.getElementById("amount").value;
    let wallet = document.getElementById("wallet");

    total = total + Number(amount);

    wallet.innerText = total;

    localStorage.setItem("amount",JSON.stringify(total));
  }
