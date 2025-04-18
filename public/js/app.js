const action = prompt("Choose an option: \n -Sign Up \n -Log In \n -Change Password \n -exit" );

if (action === "exit") {
    alert("Exiting the application.");
        const newAction = prompt("Choose an option: \n1. Sign Up \n2. Log In \n3. Change Password \n4. exit");
}
if (action === "Sign Up") {
    const fullname = prompt("Enter your full name: ");
    const capitalizedFullname = fullname
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');

    if (fullname.length < 5) {
        alert('Your name must contain a minimum of 5 characters.');
        const fullname = prompt("Enter your full name: ");
        console.log("Full name: " + fullname);
    }  else if (/[^a-zA-Z\s]/.test(fullname)){
        alert('Your name must not contain numbers or special characters.');
        const fullname = prompt("Enter your full name: ");
    } else {
        console.log("Full name: " + capitalizedFullname);
        alert('Your name is valid.');
    }
}
