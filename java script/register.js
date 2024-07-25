document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Getting the information values
    var name = document.getElementById('student_name').value;
    var Id = document.getElementById('Id').value;
    var phone_number = document.getElementById('phone_number').value;
    var Pc_name = document.getElementById('Pc_name').value;
    var serial = document.getElementById('serial').value;
    var model = document.getElementById('Model').value;
    var additional_info = document.getElementById('additional_info').value;

    // Creating JavaScript object
    var userData = {
        student_name: name,
        student_Id: Id,
        phone_number: phone_number,
        Pc_name: Pc_name,
        Pc_serial: serial,
        Pc_model: model,
        additional_info: additional_info,
    };

    // Retrieve existing user data from localStorage or create an empty array
    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Append the new user to the existing array
    existingUsers.push(userData);

    // Save updated user data to localStorage
    localStorage.setItem('users', JSON.stringify(existingUsers));

    // Redirect to the registered page
    window.location.href = 'registred.html';
});