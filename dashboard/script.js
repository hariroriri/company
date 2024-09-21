let currentSection = 'dashboard';
const sections = {
    dashboard: [],
    clients: [],
    trainers: [],
    employees: [],
    students: [],
    projects: [],
    attendance: [],
    accounts: []
};

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

function showSection(section) {
    currentSection = section;
    document.getElementById('section-title').innerText = section.charAt(0).toUpperCase() + section.slice(1);
    renderTable();
}

function renderTable() {
    const tableBody = document.querySelector('#dataTable tbody');
    tableBody.innerHTML = '';
    sections[currentSection].forEach((item, index) => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>${item.company}</td>
            <td>${item.location}</td>
            <td>${item.contact}</td>
            <td><button class="btn btn-danger btn-sm" onclick="deleteRow(${index})">Delete</button></td>
        `;
    });
}

function addNewClient(event) {
    event.preventDefault();
    const name = document.getElementById('clientName').value;
    const company = document.getElementById('clientCompany').value;
    const location = document.getElementById('clientLocation').value;
    const contact = document.getElementById('clientContact').value;
    sections[currentSection].push({ name, company, location, contact });
    renderTable();
    $('#clientModal').modal('hide');
    document.getElementById('clientForm').reset();
}

function deleteRow(index) {
    sections[currentSection].splice(index, 1);
    renderTable();
}

document.getElementById('clientForm').addEventListener('submit', addNewClient);

document.addEventListener("DOMContentLoaded", function() {
    renderTable();
});
