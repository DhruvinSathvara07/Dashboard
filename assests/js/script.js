//  Open modal when "Create New Society" is selected
document.getElementById('society').addEventListener('change', function () {
    if (this.value === 'new') {
        new bootstrap.Modal(document.getElementById('createSocietyModal')).show();
    }
});

// Handle new society form submission
document.getElementById('newSocietyForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const societyName = document.getElementById('newSocietyName').value;

    if (societyName) {
        // Add new society to the dropdown
        const societyDropdown = document.getElementById('society');
        const newOption = document.createElement('option');
        newOption.value = societyName;
        newOption.textContent = societyName;
        societyDropdown.appendChild(newOption);

        // Select the newly added society
        societyDropdown.value = societyName;

        // Hide the modal
        bootstrap.Modal.getInstance(document.getElementById('createSocietyModal')).hide();

        // Reset the form
        this.reset();
    }
});

document.getElementById('society').addEventListener('change', function () {
    if (this.value === 'new') {
        // Show modal if "Create New Society" is selected
        new bootstrap.Modal(document.getElementById('createSocietyModal')).show();
    }
});

document.getElementById('newSocietyForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const newSocietyName = document.getElementById('newSocietyName').value;

    if (newSocietyName) {
        // Add new society to the dropdown
        const societyDropdown = document.getElementById('society');
        const newOption = document.createElement('option');
        newOption.value = newSocietyName;
        newOption.textContent = newSocietyName;
        societyDropdown.appendChild(newOption);

        // Select the newly added option
        societyDropdown.value = newSocietyName;

        // Hide the modal
        bootstrap.Modal.getInstance(document.getElementById('createSocietyModal')).hide();

        // Clear the form
        this.reset();
    }
});

const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    mainContent.classList.toggle('active');
});