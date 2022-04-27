// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


let id;

// wallet

var amount  = JSON.parse(localStorage.getItem("amount"));
var wallet = document.getElementById("wallet");
wallet.innerText=amount;


let total = Number(0);

function add_to_wallet(){

let amount = document.getElementById("amount").value;
let wallet = document.getElementById("wallet");

total = total + Number(amount);

wallet.innerText = total;

localStorage.setItem("amount",JSON.stringify(total));
}



// fetch

  function search(){
    let movie = document.getElementById("search").value;

    const url = `https://www.omdbapi.com/?apikey=6a316f9&t=${movie}`;

    fetch(url)
     .then( function(res){
       return res.json();
     })
      .then( function(res){
        append(res);
      })
       .catch( function(err){
         console.log(err);
       });
  }


  // var selected = JSON.parse(localStorage.getItem("amount")) || []

  var arr = JSON.parse(localStorage.getItem("movie")) || [];

  function append(res){

    // console.log("hello");
   
    let each_div = document.createElement("div");
   
    each_div.innerText = "";
    let image = document.createElement("img");
    image.src = res.Poster;
    image.setAttribute("id","image")

    let title = document.createElement("p");
    title.innerText = `Title: ${res.Title}`;

    let btn = document.createElement("button");
    btn.innerText = "Book Now"
    btn.setAttribute("class","book_now");

    btn.addEventListener("click",function(){
      book_now(res);
    }) 

    each_div.append(image, title, btn);

    document.querySelector("#movies").append(each_div);

  }




  function book_now(res){

    arr.push(res);
    localStorage.setItem("movie",JSON.stringify(arr));
    window.location.href="checkout.html"
  }



  function debounce(append,delay){
   if(id){
   clearInterval(id);
 }
    setTimeout (function (){
      append();
    },delay)
  }