// ── SCROLL REVEAL ──
    const revealEls = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(r => obs.observe(r));

    // ── NAV SCROLL ──
    window.addEventListener('scroll', () => {
      document.querySelector('nav').style.boxShadow =
        window.scrollY > 40 ? '0 2px 20px rgba(0,0,0,0.5)' : 'none';
    });
    function seleccionarTalla(btn) {
  const opciones = btn.parentElement.querySelectorAll('.talla-btn');
  opciones.forEach(b => b.classList.remove('activo'));
  btn.classList.add('activo');
}