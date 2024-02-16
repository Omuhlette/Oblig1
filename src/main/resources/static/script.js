// script.js

let ticketArray = [];

//Getting variables ready for further use
let selectedMovie = '';
let selectedAmount = 0;

function chooseMovie() {
    let selectMovie = document.getElementById("movie");
    selectedMovie = selectMovie.options[selectMovie.selectedIndex].text;
    console.log("Selected Movie: " + selectedMovie);
}

function chooseAmount(){
    let selectAmount = document.getElementById("amount")
    selectedAmount = selectAmount.value;
    console.log("Amount: " + selectedAmount);
}

function newTicket() {
    let movie = document.getElementById("movie").value;
    let amount = document.getElementById("amount").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    let checkName = /^[A-Za-z]+$/;

    if (!checkName.test(firstName)) {
        alert('Please enter a valid first name!');
        return;
    }
    if(!checkName.test(lastName)) {
        alert('Please enter valid last name!');
        return;
    }

    let checkPhone = /^\d{8}$/;

    if (!checkPhone.test(phone)) {
        alert('Please enter valid phone number!');
        return;
    }

    let checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!checkEmail.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    else{
        console.log(firstName);
        console.log(lastName);
        console.log(phone);
        console.log(email);
    }


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

function showSummary() {
    // Check if a movie is selected before showing the summary
    if (selectedMovie === "") {
        alert('No movie chosen!');
    }
    else if (selectedAmount < 1) {
        alert('No tickets chosen');
    }

    else {
        newTicket();
    }
}
function deleteTickets(){
    ticketArray = [];
    document.getElementById("delete").innerText = 'Tickets deleted';
    document.getElementById("output").innerText = '';
    console.log(ticketArray);
}
            


