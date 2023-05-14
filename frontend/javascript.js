document.getElementById('getBtn').addEventListener('click', function () {
    fetch(`http://localhost:5000/persons/`)
        .then(response => response.json())
        .then(data => {
            let tableBody = document.getElementById('responseTableBody');
            tableBody.innerHTML = '';
            data.forEach(item => {
                let row = tableBody.insertRow();
                let idCell = row.insertCell();
                let nameCell = row.insertCell();
                let ageCell = row.insertCell();
                let genderCell = row.insertCell();
                let emailCell = row.insertCell();
                idCell.innerHTML = item.id;
                nameCell.innerHTML = item.name;
                ageCell.innerHTML = item.age;
                genderCell.innerHTML = item.gender;
                emailCell.innerHTML = item.email;
            });
        })
        .catch(error => {
            console.error(error);
        });
});

document.getElementById('postForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const personData = Object.fromEntries(formData.entries());

    fetch(`http://localhost:5000/persons/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(personData)
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('response').textContent = JSON.stringify(data);
        })
        .catch(error => {
            console.error(error);
        });
});

document.getElementById('saveChanges').addEventListener('click', function (event) {
    event.preventDefault();

    const updateId = document.getElementById('updID').value;

    
    let updateData = {
        name: document.getElementById('updName').value,
        email: document.getElementById('updEmail').value,
        gender: document.getElementById('updGender').value,
        age: document.getElementById('updAge').value
    };
    updateperson(updateId, updateData);
});


async function updateperson(id, updateData) {
    console.log(updateData);
    let apiResponse = await fetch(`http://localhost:5000/persons/${id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        }, body: JSON.stringify(updateData)
    });
    let response = await apiResponse.json();
}

document.getElementById('deleteBtn').addEventListener('click', function () {
    const deleteId = prompt("Please enter the ID of the user you would like to delete:");
    if (deleteId) {
        fetch(`http://localhost:5000/persons/${deleteId}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                document.getElementById('response').textContent = JSON.stringify(data);
            })
            .catch(error => {
                console.error(error);
            });
    }
});