document.addEventListener('DOMContentLoaded', () => {
    const treeForm = document.getElementById('treeForm');

    treeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            city: document.getElementById('city').value,
            address: document.getElementById('address').value,
            type: 'Tree Removal Query'
        };

        alert(`Request received for ${formData.city.toUpperCase()}! An arborist will contact you shortly.`);
        treeForm.reset();
    });
});