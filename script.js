function filterCategory(id, element) {
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    element.classList.add('active');
    const target = document.getElementById(id);
    if(target) {
        window.scrollTo({ top: target.offsetTop - 100, behavior: 'smooth' });
    }
}