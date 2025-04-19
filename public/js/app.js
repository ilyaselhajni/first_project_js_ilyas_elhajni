let userDatabase ={};

//  used finctions 
function capitalizeName(name) {
    return name
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}

function isValidEmail(email) {
    return email.includes("@") && email.includes(".");
}

function isValidPassword(password) {
    return password.length >= 7 &&
    /[!@#$%^&*(),.?":{}|<>]/.test(password)
}

let action = prompt(
    "Choose a number :\n1. Sign Up\n2. Log In\n3. Change Password\n4. Exit"
);

//sign up
if (action === "1" || action.toLowerCase() === "sign up") {

    let fullName = prompt("Enter your full name:");

    while (
        fullName.length < 5 || 
        /[^a-zA-Z\s]/.test(fullName)
    ) {
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

    email = email.trim().toLowerCase();
    alert("Valid email entered.");
    console.log("Email:", email);

    if (userDatabase[email]) {
        alert("This email is already registered.");
    } 
    else {

        let age = prompt("Enter your age:");

        while (
            isNaN(age) || 
            age.length === 0 || 
            age.length >= 3
        ) {
            alert("Enter a valid age (1-2 digits).");
            age = prompt("Enter your age again:");
        }

        console.log("Age:", age);
        alert("Valid age entered.");

        let password = prompt("Enter your password:\n(Minimum 7 characters, at least one uppercase letter, one lowercase letter, and one number)");
        while (isValidPassword(password)) {
            alert("Invalid password format.");
            password = prompt("Enter your password again:");
        }
    
        alert("Password is valid.");
        console.log("Password: " + password);

        let confirmPassword = prompt("Confirm your password:");

        while (confirmPassword !== password) {
            alert("Passwords do not match.");
            confirmPassword = prompt("Confirm your password again:");
        }

        alert("Password confirmed.");
        console.log("Confirmed Password: " + confirmPassword);

        userDatabase[email] = {
            fullName: fullName,
            email: email,
            age: age,
            password: password
        };
        alert("Sign Up Successful!");
        console.log("User saved:", userDatabase[email]);
    }
}

// log in
else if (action === "2" || action.toLowerCase() === "log in") {

    let email = prompt("Enter your registered email:");
    email = email.trim().toLowerCase();

    if (!userDatabase[email]) {
        alert("Email not found in the database.");
    } 
    else {
        let password = prompt("Enter your password:");

        if (password !== userDatabase[email].password) {
            alert("Incorrect password.");
        } 
        else {
            alert("Login successful! Welcome back, " + userDatabase[email].fullName + ".");
        }
    }
}

//change password
else if (action === "3" || action.toLowerCase() === "change password") {

    let email = prompt("Enter your registered email:");
    email = email.trim().toLowerCase();

    if (!userDatabase[email]) {
        alert("Email not found in the database.");
    } 
    else {
        let oldPassword = prompt("Enter your current password:");

        if (oldPassword !== userDatabase[email].password) {
            alert("Incorrect current password.");
        } 
        else {
            let newPassword = prompt(
                "Enter your new password:\n(Min 8 characters, 1 uppercase, 1 lowercase, 1 number)"
            );

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

// exit
else if (action === "4" || action.toLowerCase() === "exit") {
    alert("Exiting the current process. You can choose an option again.");
    location.reload();
}
else {
    alert("Invalid option. Please try again.");
    location.reload();
}