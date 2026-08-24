const formulario = document.querySelector('#formulario-contacto');

formulario?.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const datos = new FormData(formulario);
    const nombre = String(datos.get('nombre') || '').trim();
    const mensaje = String(datos.get('mensaje') || '').trim();

    if (!nombre || !mensaje) return;

    const texto = `Hola Jonathan, soy ${nombre}. ${mensaje}`;
    const url = `https://wa.me/5492983548917?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
});
