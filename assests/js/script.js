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
