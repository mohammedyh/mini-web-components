const modal = document.querySelector('.card');
const openModalBtn = document.querySelector('.open-modal');

modal.addEventListener('click', e => {
  if(!e.target.classList.contains('cross')) return;
  modal.classList.add('hidden');
	openModalBtn.classList.remove('hidden');
});

openModalBtn.addEventListener('click', e => {
  modal.classList.remove('hidden');
  openModalBtn.classList.add('hidden');
});