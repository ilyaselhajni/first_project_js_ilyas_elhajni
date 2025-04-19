
let userDatabase = JSON.parse(localStorage.getItem("userDatabase")) || {};


function saveToLocalStorage() {
    localStorage.setItem("userDatabase", JSON.stringify(userDatabase));
}

// used functions
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

const action = prompt("Choose a number between the options:\n1. Sign Up\n2. Log In\n3. Change Password\n4. Exit");


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

        // confirm password
        let confirmPassword = prompt("Confirm your password:");
        while (confirmPassword !== password) {
            alert("Passwords do not match.");
            confirmPassword = prompt("Confirm your password again:");
        }

        alert("Password confirmed.");
        console.log("Confirmed Password: " + confirmPassword);

        // save to database
        userDatabase[email] = {
            fullName: fullName,
            email: email,
            age: age,
            password: password
        };

        saveToLocalStorage(); 
        alert("Sign Up Successful!");
        console.log("User saved:", userDatabase[email]);
    }
} else if (action === "2" || action.toLowerCase() === "log in") {
    let email = prompt("Enter your registered email:");

    email = email.trim().toLowerCase();

    if (!userDatabase[email]) {
        alert("Email not found in the database.");
    } else {
        let password = prompt("Enter your password:");

        if (password !== userDatabase[email].password) {
            alert("Incorrect password.");
        } else {
            alert("Login successful! Welcome back, " + userDatabase[email].fullName + ".");
        }
    }
} else if (action === "3" || action.toLowerCase() === "change password") {
    let email = prompt("Enter your registered email:");

    email = email.trim().toLowerCase();

    if (!userDatabase[email]) {
        alert("Email not found in the database.");
    } else {
        let oldPassword = prompt("Enter your current password:");

        if (oldPassword !== userDatabase[email].password) {
            alert("Incorrect current password.");
        } else {
            let newPassword = prompt("Enter your new password:\n(Min 8 characters, 1 uppercase, 1 lowercase, 1 number)");

            while (!isValidPassword(newPassword)) {
                alert("Password does not meet the criteria.");
                newPassword = prompt("Enter your new password again:");
            }

            let confirmNewPassword = prompt("Confirm your new password:");

            while (confirmNewPassword !== newPassword) {
                alert("New passwords do not match.");
                confirmNewPassword = prompt("Confirm your new password again:");
            }

            userDatabase[email].password = newPassword;
            saveToLocalStorage(); 
            alert("Password changed successfully!");
        }
    }
}
    
    else if (action === "4" || action.toLowerCase() === "exit") {
        alert("Exiting the current process. You can choose an option again.");
        location.reload(); 
    }