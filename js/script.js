// Initialize welcome message with name from prompt
function initializeName() {
    const userName = prompt("Please enter your name:");
    if (userName && userName.trim() !== "") {
        document.getElementById('welcomeText').textContent = `Hi ${userName}, Welcome To Website`;
    }
}

// Update current time
function updateTime() {
    const now = new Date();
    const options = { 
        weekday: 'short', 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'Asia/Jakarta'
    };
    const timeString = now.toLocaleString('en-US', options);
    
    // Update time in result box
    const currentTimeElement = document.getElementById('currentTime');
    if (currentTimeElement) {
        currentTimeElement.textContent = 'Current time: ' + timeString;
    }
    
    // Update date in hero section
    const currentDateElement = document.getElementById('currentDate');
    if (currentDateElement) {
        currentDateElement.textContent = now.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: '2-digit', 
            day: '2-digit' 
        });
    }
}

// Toggle mobile menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Navigation functions
function showHome() {
    document.getElementById('homePage').style.display = 'block';
    document.getElementById('profilePage').style.display = 'none';
    document.getElementById('navLinks').classList.remove('active');
}

function showProfile() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('profilePage').style.display = 'block';
    document.getElementById('navLinks').classList.remove('active');
    window.scrollTo(0, 0);
}

// Form validation
function validateForm() {
    let isValid = true;

    // Reset errors
    document.querySelectorAll('.error').forEach(error => error.style.display = 'none');

    // Validate name
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    // Validate birthdate
    const birthdate = document.getElementById('birthdate').value;
    if (birthdate === '') {
        document.getElementById('birthdateError').style.display = 'block';
        isValid = false;
    }

    // Validate gender
    const gender = document.getElementById('gender').value;
    if (gender === '') {
        document.getElementById('genderError').style.display = 'block';
        isValid = false;
    }

    // Validate message
    const message = document.getElementById('message').value.trim();
    if (message === '') {
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }

    return isValid;
}

// Format date to MM/DD/YYYY
function formatDate(dateString) {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}

// Display result in the result box
function displayResult(data) {
    const resultDiv = document.getElementById('result');
    
    resultDiv.innerHTML = `
        <div class="result-item">
            <strong>Nama:</strong>
            ${data.name}
        </div>
        <div class="result-item">
            <strong>Tanggal Lahir:</strong>
            ${formatDate(data.birthdate)}
        </div>
        <div class="result-item">
            <strong>Jenis Kelamin:</strong>
            ${data.gender}
        </div>
        <div class="result-item">
            <strong>Pesan:</strong>
            ${data.message}
        </div>
    `;
}

// Close modal (kept for compatibility)
function closeModal() {
    const modal = document.getElementById('resultModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', function() {
    // Initialize name prompt
    initializeName();
    
    // Start clock
    updateTime();
    setInterval(updateTime, 1000);
    
    // Form submission handler
    const messageForm = document.getElementById('messageForm');
    if (messageForm) {
        messageForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm()) {
                const formData = {
                    name: document.getElementById('name').value.trim(),
                    birthdate: document.getElementById('birthdate').value,
                    gender: document.getElementById('gender').value,
                    message: document.getElementById('message').value.trim()
                };

                // Display result in the result box
                displayResult(formData);
                
                // Reset form
                this.reset();
                
                // Scroll to result
                document.getElementById('result').scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest' 
                });
            }
        });
    }
});