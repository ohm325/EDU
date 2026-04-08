function showAlert(moduleName) {
    document.getElementById('alertModName').textContent = moduleName;
    document.getElementById('alertModText').textContent = moduleName;

    const modal = document.getElementById('alertModal');
    modal.style.display = 'flex';
    void modal.offsetWidth; // trigger reflow
    modal.classList.add('active');
    setTimeout(() => modal.classList.add('visible'), 10);
}

function closeAlert() {
    const modal = document.getElementById('alertModal');
    modal.classList.remove('visible');
    setTimeout(() => {
        modal.classList.remove('active');
        modal.style.display = 'none';
    }, 300);
}
