document.addEventListener('DOMContentLoaded', function() {
    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    var userTable = document.getElementById('user-table');

    if (existingUsers.length > 0) {
        existingUsers.forEach(function(userData, index) {
            var tableRow = document.createElement('tr');
            tableRow.innerHTML = `
                <td>${userData.student_name}</td>
                <td>${userData.student_Id}</td>
                <td>${userData.phone_number}</td>
                <td>${userData.Pc_name}</td>
                <td>${userData.Pc_serial}</td>
                <td>${userData.Pc_model}</td>
                <td>${userData.additional_info}</td>
                <td><button onclick="deleteUser(${index})">Delete</button></td>
            `;
            userTable.appendChild(tableRow);
        });
    }
});

function deleteUser(index) {
    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    existingUsers.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    window.location.reload(); // Reload the page to reflect changes
}