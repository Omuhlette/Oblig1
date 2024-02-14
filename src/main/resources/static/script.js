billettArray= [];
function nyBillett() {
    let movie = document.getElementById("movie").value;
    let amount = document.getElementById("amount").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    let output = document.getElementById("output")
    output.innerHTML = `
        <p>Movie: ${movie}</p>
        <p>Amount: ${amount}</p>
        <p>First Name: ${firstName}</p>
        <p>Last Name: ${lastName}</p>
        <p>Phone: ${phone}</p>
        <p>Email: ${email}</p>
    `;

}