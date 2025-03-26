
document.addEventListener('DOMContentLoaded', function () {
    const cvButton = document.getElementById('cvButton');
    const pdfOverlay = document.getElementById('pdfOverlay');
    const pdfViewer = document.getElementById('pdfViewer');
    const closePdfOverlay = document.getElementById('closePdfOverlay');

    cvButton.addEventListener('click', function () {
        pdfViewer.src = 'PDF/CV - Valentin Lefort - FR.pdf'; // Replace with the correct path to your PDF
        pdfOverlay.classList.remove('hidden');
    });

    closePdfOverlay.addEventListener('click', function () {
        pdfOverlay.classList.add('hidden');
        pdfViewer.src = ''; // Clear the PDF to prevent it from showing when re-opened
    });

    pdfOverlay.addEventListener('click', function (event) {
        if (event.target === pdfOverlay) {
            pdfOverlay.classList.add('hidden');
            pdfViewer.src = '';
        }
    });
});