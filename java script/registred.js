document.addEventListener("DOMContentLoaded", function () {
    
    var pcList = JSON.parse(localStorage.getItem('pcList')) || [];
    
    var tbody = document.getElementById('user-table');

    pcList.forEach(function (item, index) {
        var row = tbody.insertRow();

        row.insertCell().innerHTML = item.name;
        row.insertCell().innerHTML = item.Id;
        row.insertCell().innerHTML = item.phone_number;
        row.insertCell().innerHTML = item.Pc_name;
        row.insertCell().innerHTML = item.Pc_serial; // Ensure this matches register.js
        row.insertCell().innerHTML = item.Pc_model;
        row.insertCell().innerHTML = item.Pc_owned;
        row.insertCell().innerHTML = item.Pc_type;
        row.insertCell().innerHTML = item.additional_info;
        
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function () {
            deleteEntry(index);
        };
        var cell = row.insertCell();
        cell.appendChild(deleteBtn);
    });
});

function deleteEntry(index) {
    var pcList = JSON.parse(localStorage.getItem('pcList')) || [];

    pcList.splice(index, 1);

    localStorage.setItem('pcList', JSON.stringify(pcList));

    location.reload(); 
}