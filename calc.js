document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('calculator-form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const product = form.querySelector('input[name="product"]:checked').value;
        let totalPrice = 0;

        if (product === 'Imagefilm') {
            const type = form.querySelector('input[name="type"]:checked').value;
            const duration = form.querySelector('input[name="duration"]:checked').value;
            const state = form.querySelector('select[name="state"]').value;
            const addons = form.querySelectorAll('input[name="addons"]:checked');

            // Berechnung des Basispreises
            let basePrice = 0;
            if (type === 'interviewbasiert') {
                if (duration === '2min') basePrice = 2000;
                else if (duration === '3min') basePrice = 2250;
                else if (duration === '4min') basePrice = 2500;
            } else if (type === 'synchronisiert') {
                if (duration === '2min') basePrice = 5000;
                else if (duration === '3min') basePrice = 6000;
                else if (duration === '4min') basePrice = 7000;
            }

            // Berechnung der Bundeslandkosten
            let stateCost = 0;
            if (state === 'Saarland' || state === 'Thüringen' || state === 'Hamburg' || state === 'Schleswig-Holtstein' || state === 'Bremen' || state === 'Rheinlandpfalz' || state === 'Niedersachsen') {
                stateCost = 200;
            } else if (state !== 'NRW' && state !== 'Hessen') {
                stateCost = 400;
            }

            // Berechnung der Add-on-Kosten
            let addonCost = 0;
            addons.forEach(addon => {
                if (addon.value === 'Drohnenbilder') addonCost += 500;
                else if (addon.value === '4K videoqualität') addonCost += 500;
                else if (addon.value === 'Social Media Version') addonCost += 750;
                else if (addon.value === 'Social Media Paket mit einzelinterviews') addonCost += 1200;
            });

            totalPrice = basePrice + stateCost + addonCost;
        } else if (product === 'Recruitingfilm') {
            // Berechnungen für Recruitingfilm, ähnlich wie für Imagefilm
            // ...

        } else if (product === 'Produktvideo') {
            totalPrice = 750;
        } else if (product === 'Videopodcast') {
            const cameras = form.querySelector('input[name="cameras"]:checked').value;
            const hosting = form.querySelector('input[name="hosting"]:checked').value;
            const state = form.querySelector('select[name="state"]').value;
            const reels = form.querySelector('input[name="reels"]:checked').value;
            const podcastAddons = form.querySelectorAll('input[name="podcast-addons"]:checked');

            // Berechnung des Basispreises
            let basePrice = 0;
            if (cameras === 'eine Kamera') basePrice = 900;
            else if (cameras === 'zwei Kameras') basePrice = 1100;
            else if (cameras === 'drei Kameras') basePrice = 1300;

            // Berechnung der Bundeslandkosten
            let stateCost = 0;
            if (state === 'Saarland' || state === 'Thüringen' || state === 'Hamburg' || state === 'Schleswig-Holtstein' || state === 'Bremen' || state === 'Rheinlandpfalz' || state === 'Niedersachsen') {
                stateCost = 200;
            } else if (state !== 'NRW' && state !== 'Hessen') {
                stateCost = 400;
            }

            // Berechnung der Hosting-Kosten
            let hostingCost = hosting === 'ja' ? 100 : 0;

            // Berechnung der Reels-Kosten
            let reelsCost = 0;
            if (reels === '3 reels') reelsCost = 150;
            else if (reels === '6 reels') reelsCost = 250;

            // Berechnung der Podcast-Add-on-Kosten
            let podcastAddonCost = 0;
            podcastAddons.forEach(addon => {
                if (addon.value === 'jingle') podcastAddonCost += 200;
                else if (addon.value === 'Video coaching') podcastAddonCost += 1000;
            });

            totalPrice = basePrice + stateCost + hostingCost + reelsCost + podcastAddonCost;
        }

        // Ergebnis anzeigen
        resultDiv.innerHTML = `Dein Film kostet ca. ${totalPrice}€`;
    });
});