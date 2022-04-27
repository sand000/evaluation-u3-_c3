// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


// wallet

var amount  = JSON.parse(localStorage.getItem("amount"));

var wallet = document.getElementById("wallet");
wallet.innerText=amount;

var number_of_seats = document.getElementById("number_of_seats").value;

var total_amount  = number_of_seats*100;
console.log(total_amount);


// condition 
var arr = JSON.parse(localStorage.getItem("movie"));

// console.log(arr);

function confirm(){

     if(amount < total_amount){

        alert("Insufficient Balance!")
    }

     else if(amount > total_amount)
        {
            var amount1 = amount-total_amount;
            wallet.innerText = amount1;
            alert("Booking Succesfull!")
        }
  
  
  
}


let movie = document.getElementById("movie");
arr.map(function (arr){
  
  
  let each_div = document.createElement("div");

  movie.innerText = "";
let image = document.createElement("img");
image.src = arr.Poster;
// image.setAttribute("id","image")

let title = document.createElement("p");
title.innerText = `Title: ${arr.Title}`;

each_div.append(image, title);

movie.append(each_div);
// document.querySelector("#movie").append(each_div);
})
  