const bilderOrdner = 'slider';

        // Bilder dynamisch einfügen
        const slider = document.getElementById('imageSlider');
        fetchImages(bilderOrdner);

        async function fetchImages(ordnerPfad) {
            try {
                const response = await fetch(ordnerPfad);
                const bilderNamen = await response.json();

                bilderNamen.forEach((bildName) => {
                    const img = document.createElement('img');
                    img.src = ordnerPfad + bildName;
                    slider.appendChild(img);
                });
            } catch (error) {
                console.error('Fehler beim Laden der Bilder:', error);
            }
        }

        // Automatisches Scrollen alle 3 Sekunden (kann angepasst werden)
        let currentIndex = 0;
        setInterval(() => {
            currentIndex = (currentIndex + 1) % slider.children.length;
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }, 3000);
