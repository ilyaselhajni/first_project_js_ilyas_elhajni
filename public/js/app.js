
let userDatabase = {};


// functions
function capitalizeName(name) {
    return name
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}

function isValidEmail(email) {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
}

function isValidPassword(password) {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return pattern.test(password);
}


const action = prompt("Choose an option:\n1. Sign Up\n2. Log In\n3. Change Password\n4. Exit");


if (action === "1" || action.toLowerCase() === "sign up") {
    let fullName = prompt("Enter your full name:");

    while (fullName.length < 5 || /[^a-zA-Z\s]/.test(fullName)) {
        alert("Name must be at least 5 characters and contain only letters.");
        fullName = prompt("Enter your full name again:");
    }

    fullName = capitalizeName(fullName);
    alert("Valid name entered.");
    console.log("Full Name:", fullName);

    let email = prompt("Enter your email:");
    while (!isValidEmail(email)) {
        alert("Please enter a valid email.");
        email = prompt("Enter your email again:");
        
    }
    console.log("Email:", email);
    alert("Valid email entered.");

    email = email.trim().toLowerCase();

    if (userDatabase[email]) {
        alert("This email is already registered.");
    } else {
        let age = prompt("Enter your age:");
        while (isNaN(age) || age.length === 0 || age.length >= 3) {
            alert("Enter a valid age (1-2 digits).");
            age = prompt("Enter your age again:");
        }
        console.log("Age:", age);
        alert("Valid age entered.");

        // password
        let password = prompt("Enter your password:\n(Minimum 8 characters, at least one uppercase letter, one lowercase letter, and one number)");
            while (isValidPassword(password)) {
                alert("Invalid password format.");
                password = prompt("Enter your password again:");
            }
        
            alert("Password is valid.");
            console.log("Password: " + password);
        }}