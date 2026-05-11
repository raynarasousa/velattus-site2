/* ─── FEATURED SLIDESHOW ─── */
const _fslides = {};

function _fInit(id) {
  if (_fslides[id]) return _fslides[id];
  const wrap = document.getElementById(id);
  const slides = Array.from(wrap.querySelectorAll('.fslide'));
  const dots   = Array.from(wrap.querySelectorAll('.fslide-dot'));
  _fslides[id] = { wrap, slides, dots, current: 0, timer: null };
  return _fslides[id];
}

function goSlide(id, index) {
  const s = _fInit(id);
  s.slides[s.current].classList.remove('active');
  s.dots[s.current] && s.dots[s.current].classList.remove('active');
  s.current = (index + s.slides.length) % s.slides.length;
  s.slides[s.current].classList.add('active');
  s.dots[s.current] && s.dots[s.current].classList.add('active');
}

function stepSlide(id, dir) {
  const s = _fInit(id);
  goSlide(id, s.current + dir);
}

function startFeaturedAuto(id, ms) {
  const s = _fInit(id);
  s.timer = setInterval(() => stepSlide(id, 1), ms);
  s.wrap.addEventListener('mouseenter', () => clearInterval(s.timer));
  s.wrap.addEventListener('mouseleave', () => { s.timer = setInterval(() => stepSlide(id, 1), ms); });
}

document.addEventListener('DOMContentLoaded', function () {
  startFeaturedAuto('fslide-bronze', 5000);
  startFeaturedAuto('fslide-prata',  3400);
});

/* ─── FILTRO POR SEÇÃO ─── */
function filterSection(type, btn) {
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  const urnas   = document.getElementById('section-urnas');
  const coroas  = document.getElementById('section-coroas');
  const divider = document.querySelector('.divider');
  const label   = document.getElementById('count-label');

  if (type === 'all') {
    urnas.style.display   = '';
    coroas.style.display  = '';
    divider.style.display = '';
    label.textContent = 'Exibindo todos os produtos';
  } else if (type === 'urnas') {
    urnas.style.display   = '';
    coroas.style.display  = 'none';
    divider.style.display = 'none';
    label.textContent = 'Urnas Funerárias';
  } else if (type === 'coroas') {
    urnas.style.display   = 'none';
    coroas.style.display  = '';
    divider.style.display = 'none';
    label.textContent = 'Coroas de Flores';
  } else {
    urnas.style.display   = 'none';
    coroas.style.display  = 'none';
    divider.style.display = 'none';
    label.textContent = 'Nenhum produto nesta categoria ainda';
  }
}