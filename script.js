document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript geladen!"); // Controle: wordt het script geladen?

    const sections = document.querySelectorAll('.content-section');

    const showSection = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.classList.add('visible'); // Voeg de class toe
                console.log('Sectie zichtbaar:', section); // Debug
            }
        });
    };

    window.addEventListener('scroll', showSection); // Activeer bij scrollen
    showSection(); // Zorg dat zichtbare secties direct geladen worden
});
