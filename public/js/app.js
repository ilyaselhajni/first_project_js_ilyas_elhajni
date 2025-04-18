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
            console.log("Full name: " + fullname.trim());
        }  else if (/[^a-zA-Z\s]/.test(fullname)){
            alert('Your name must not contain numbers or special characters.');
            const fullname = prompt("Enter your full name: ");
        } else {
            console.log("Full name: " + capitalizedFullname.trim());
            alert('Your name is valid.');
        }
        const email = prompt("Enter your email: ");
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const lowwwermail = email
            .split(' ')
            .map(word => word.toLowerCase())
            .join(' ');
        if (emailRegex.test(email)) {
            console.log("Email: " + lowwwermail.trim());
            alert('Your email is valid.');
        }
        else if (email.length < 10) {
            alert('Your email must contain a minimum of 10 characters.');
            const email = prompt("Enter your email: ");
            console.log("Email: " + lowwwermail.trim());
        } 
        else if (!email.includes('@')) {
            alert('Your email must contain a domain name.');
            const email = prompt("Enter your email: ");
            console.log("Email: " + lowwwermail.trim());
        }
        else {
            alert('Your email is invalid.');
        }

        const age = prompt("Enter your age: ");
        if (isNaN(age) || age.trim().length === 0 || age.trim().length >= 3) {
            alert('Your age must be a number and contain 1 or 2 characters.');
            const age = prompt("Enter your age: ");
        } else {
            alert('Your age is valid.');
            console.log("Age: " + age.trim());
        }
        
    }
