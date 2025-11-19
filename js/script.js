function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById('formName').value;
    const birth = document.getElementById('formBirth').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById('formMessage').value;

    if (!name || !birth || !gender || !message) {
        alert("Semua field wajib diisi!");
        return;
    }

    const now = new Date().toString();
    document.getElementById("currentTime").innerHTML = `Current time:<br>${now}`;

    document.getElementById("result").innerHTML = `
        Nama: ${name} <br>
        Tanggal Lahir: ${birth} <br>
        Jenis Kelamin: ${gender.value} <br>
        Pesan: ${message}
    `;
}