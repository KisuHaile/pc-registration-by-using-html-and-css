document.addEventListener("DOMContentLoaded", function () {
    
    const form = document.querySelector('.form');

    if (!form) {
        console.error("❌ Form element not found. Check your HTML.");
        return;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 
        
        var name = document.getElementById('name').value.trim();
        var Id = document.getElementById('Id').value.trim();
        var phone_number = document.getElementById('phone_number').value.trim();
        var Pc_name = document.getElementById('Pc_name').value.trim();
        var serial = document.getElementById('serial').value.trim();
        var model = document.getElementById('Model').value.trim();
        var role = document.getElementById('role').value.trim();
        var pc_type = document.getElementById('pc_type').value.trim();
        var additional_info = document.getElementById('additional_info').value.trim();

        
        if (!name || !Id || !phone_number || !Pc_name || !serial || !model || !role || !pc_type) {
            alert("Please fill out all required fields.");
            return;
        }
        
        const phoneRegex = /^(\+251|0)?9\d{8}$/;
        if (!phoneRegex.test(phone_number)) {
            alert("Please enter a valid Ethiopian phone number (e.g. 0912345678 or +251912345678).");
            return;
        }
        
        
        var userData = {
            name: name,
            Id: Id,
            phone_number: phone_number,
            Pc_name: Pc_name,
            Pc_serial: serial,
            Pc_model: model,
            Pc_owned: role,
            Pc_type: pc_type,
            additional_info: additional_info
        };
        
        var pcList = JSON.parse(localStorage.getItem('pcList')) || [];

        const duplicate = pcList.some(pc => pc.Pc_serial === serial);
        if (duplicate) {
            const serialInput = document.getElementById('serial');
            
            serialInput.style.border = "2px solid red";
            let errorMsg = document.getElementById('serial-error');

            if (!errorMsg) {
                errorMsg = document.createElement('div');
                errorMsg.id = 'serial-error';
                errorMsg.style.color = 'red';
                errorMsg.style.fontSize = '14px';
                errorMsg.textContent = '⚠️ This PC serial number is already registered.';
                serialInput.parentNode.appendChild(errorMsg);
            }
            serialInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            alert("⚠️ This PC with the same serial number is already registered!");

            return;
        }
        pcList.push(userData);
        localStorage.setItem('pcList', JSON.stringify(pcList));
        alert("✅ PC registered successfully!");
        window.location.href = "registred.html";
    });
});