// script.js

ticketArray = [];

//Getting variables ready for further use
let selectedMovie = '';
let selectedAmount = 0;
let selectedFirstName = '';
let selectedLastName = '';
let selectedPhoneNumber =12345678;
let selectedEmail = '';

function newTicket() {
    let movie = document.getElementById("movie").value;
    let amount = document.getElementById("amount").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    let ticket = {
        movie: movie,
        amount: amount,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email
    };

    ticketArray.push(ticket);

    //
    let output = document.getElementById("output");
    output.innerHTML = `
        <p>Movie: ${ticket.movie}</p>
        <p>Amount: ${ticket.amount}</p>
        <p>First Name: ${ticket.firstName}</p>
        <p>Last Name: ${ticket.lastName}</p>
        <p>Phone: ${ticket.phone}</p>
        <p>Email: ${ticket.email}</p>
    `;
}

function chooseMovie() {
    let selectElement = document.getElementById("movie");
    selectedMovie = selectElement.options[selectElement.selectedIndex].text;
    console.log("Selected Movie: " + selectedMovie);
}

function showSummary() {
    // Check if a movie is selected before showing the summary
    if (selectedMovie === "") {
        alert('No movie chosen!')
    }
    /*
    else if(selectedAmount === 0){
        alert('No tickets chosen')
    }
    */

}