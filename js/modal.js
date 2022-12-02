const modalBtn = document.querySelector('.more');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal__close');

modalBtn.addEventListener('click', () => modal.classList.remove('hidden'));

modal.addEventListener('click', (e) => {
  e.preventDefault();
  const target = e.target;

  if (
    target.classList.contains('overlay') ||
    target.classList.contains('modal__close')
  ) {
    modal.classList.add('hidden');
  }
});
