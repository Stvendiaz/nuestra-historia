// Fechas de inicio en la zona horaria de El Salvador (UTC-6).
const fechaNovia = new Date('2026-06-05T00:00:00-06:00');
const fechaBeso = new Date('2026-02-25T00:00:00-06:00');

function actualizarContador(id, fecha) {
  const contenedor = document.getElementById(id);
  const segundosTotales = Math.max(0, Math.floor((Date.now() - fecha.getTime()) / 1000));
  const valores = {
    dias: Math.floor(segundosTotales / 86400),
    horas: Math.floor((segundosTotales % 86400) / 3600),
    minutos: Math.floor((segundosTotales % 3600) / 60),
    segundos: segundosTotales % 60
  };
  Object.entries(valores).forEach(([unidad, valor]) => {
    contenedor.querySelector(`[data-unidad="${unidad}"]`).textContent = unidad === 'dias' ? valor : String(valor).padStart(2, '0');
  });
}
function actualizarTodo() {
  actualizarContador('contador-novia', fechaNovia);
  actualizarContador('contador-beso', fechaBeso);
}
actualizarTodo();
setInterval(actualizarTodo, 1000);

const botonCarta = document.getElementById('abrir-carta');
const carta = document.getElementById('carta');
botonCarta.addEventListener('click', () => {
  carta.hidden = !carta.hidden;
  botonCarta.setAttribute('aria-expanded', String(!carta.hidden));
  botonCarta.textContent = carta.hidden ? 'Abrir mi carta 💌' : 'Cerrar mi carta 💌';
});

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  setInterval(() => {
    if (document.hidden) return;
    const corazon = document.createElement('span');
    corazon.className = 'corazon';
    corazon.textContent = ['♥', '♡', '💕'][Math.floor(Math.random() * 3)];
    corazon.style.left = `${Math.random() * 100}%`;
    corazon.style.fontSize = `${14 + Math.random() * 22}px`;
    corazon.style.animationDuration = `${6 + Math.random() * 6}s`;
    document.getElementById('corazones').appendChild(corazon);
    setTimeout(() => corazon.remove(), 12000);
  }, 950);
}
