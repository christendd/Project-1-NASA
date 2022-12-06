// Test for connection

// alert('js is working')
// console.log('jquery', $)

// $(document).ready(function(){
//     $.ajax({
//         url:'https://api.nasa.gov/planetary/apod?api_key=J52YIQrpU9avynBAXeQP7R2ytiaeUKR9Ir64XGhM'})
//         .then(
//         (data) => {
//             console.log('works')
//         },
//         (error) => {
//             console.log('bad request', error);
//     })
// })

// Psuedocode
// 
// 1) Select dom elements that can use to be insert image based off date searched
// 2) Make ajax request to the api and get image based on date
// 3) Loop over the array  and generate an object for the date and image
// 3) Use selected dom elements to append my image to the dom 


// IPO-Input -> Process -> Output

// // Constants and Variables
const API_URL = "https://api.nasa.gov/planetary/apod?";
const API_Key = "api_key=J52YIQrpU9avynBAXeQP7R2ytiaeUKR9Ir64XGhM";

// // Cache DOM element reference
const $image = $("#image");
const $input= $('input[type="date"]')
const $form= $('form');

// // Register Event Listeners
$form.on('submit', getData)

// // Functions
function getData() {
    $.ajax(API_URL).then(function(data){
    console.log(data);
    }, function(error) {
    console.log(error);
    });
}

function getData() {
    var data = $input.val();
    console.log(date)
}




// + "date=" +date+ "&" + API_Key
// vent.preventDefault();
//     