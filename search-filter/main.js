const input = document.querySelector('input');
const listItems = [...document.querySelectorAll('li')];

input.addEventListener('keyup', filterItems);

function filterItems() {
  const valueToMatch = this.value.toLowerCase();
  listItems.forEach((item) =>
    item.textContent.toLowerCase().includes(valueToMatch)
      ? item.classList.remove('hidden')
      : item.classList.add('hidden')
  );
}
