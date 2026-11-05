document.addEventListener('DOMContentLoaded', () => {
    const leadForm = document.getElementById('leadForm');

    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const cityField = document.getElementById('city');
            const cityValue = cityField ? cityField.value : 'North Utah County';

            const payload = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                city: cityValue,
                service: document.getElementById('service') ? document.getElementById('service').value : 'Tree Removal',
                timestamp: new Date().toISOString()
            };

            alert(`Thank you ${payload.name}. Our tree care team serving ${payload.city.toUpperCase()} will contact you shortly.`);
            leadForm.reset();
        });
    }

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then((reg) => console.log('Service Worker registrado:', reg.scope))
                .catch((err) => console.log('Error en Service Worker:', err));
        });
    }
});