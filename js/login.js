document.getElementById('loginSubmit').addEventListener('click', function () {
    const emailField = document.getElementById('userEmail');
    const userEmail = emailField.value;
    //console.log(userEmail);
    const passField = document.getElementById('userPass');
    const userPassword = passField.value;
    //console.log(userPassword);

    if (userEmail == 'nil@gmil.com' && userPassword == '123') {
        window.location.href = 'banking.html';
    }


})