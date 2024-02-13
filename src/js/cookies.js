 function acceptCookies() {
            // Hier könntest du Cookies setzen oder andere Aktionen durchführen
            // Zum Beispiel: localStorage.setItem('cookiesAccepted', true);
            document.getElementById('cookie-banner').style.display = 'none';
        }

        // Hier könntest du prüfen, ob der Benutzer bereits Cookies akzeptiert hat und das Banner entsprechend ausblenden
        // Zum Beispiel: if (localStorage.getItem('cookiesAccepted')) { document.getElementById('cookie-banner').style.display = 'none'; }