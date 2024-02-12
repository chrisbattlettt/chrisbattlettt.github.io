document.getElementById('tattooForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    var formData = new FormData(this);
    
    // Send form data using Fetch API
    fetch('https://script.google.com/macros/s/AKfycby0y-rRWkAQr9PEaT7Gffj_uBpCKC1aVztR-AwJRI7wh0IUEZvFDu--_FHYYU7eXr_EJQ/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('message').innerHTML = "Anfrage erfolgreich gesendet.";
        } else {
            document.getElementById('message').innerHTML = "Fehler beim Senden der Anfrage.";
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('message').innerHTML = "Fehler beim Senden der Anfrage.";
    });
});