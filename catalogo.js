function filterSection(type, btn, evt) {
  if (evt && typeof evt.preventDefault === 'function') {
    evt.preventDefault();
  }

  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  const urnas = document.getElementById('section-urnas');
  const coroas = document.getElementById('section-coroas');
  const divider = document.querySelector('.divider');
  const label = document.getElementById('count-label');

  if (type === 'all') {
    urnas.style.display = '';
    coroas.style.display = '';
    divider.style.display = '';
    label.textContent = 'Exibindo todos os produtos';
  } else if (type === 'urnas') {
    urnas.style.display = '';
    coroas.style.display = 'none';
    divider.style.display = 'none';
    label.textContent = 'Urnas Funerárias';
  } else if (type === 'coroas') {
    urnas.style.display = 'none';
    coroas.style.display = '';
    divider.style.display = 'none';
    label.textContent = 'Coroas de Flores';
  } else {
    urnas.style.display = 'none';
    coroas.style.display = 'none';
    divider.style.display = 'none';
    label.textContent = 'Nenhum produto nesta categoria ainda';
  }
}
