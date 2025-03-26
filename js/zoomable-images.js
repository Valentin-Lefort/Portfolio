document.addEventListener('DOMContentLoaded', function () {
    const images = document.getElementsByClassName("zoomable");

    Array.from(images).forEach(img => {
        img.addEventListener('click', function () {
            // Créer l'overlay
            const overlay = document.createElement('div');
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
            `;

            // Créer l'image agrandie
            const enlargedImg = document.createElement('img');
            enlargedImg.src = this.src;
            enlargedImg.style.cssText = `
                max-width: 90%;
                max-height: 90%;
            `;

            // Ajouter l'image à l'overlay
            overlay.appendChild(enlargedImg);

            // Ajouter l'overlay au body
            document.body.appendChild(overlay);

            // Fermer l'overlay quand on clique dessus
            overlay.addEventListener('click', function () {
                document.body.removeChild(overlay);
            });
        });
    });
});