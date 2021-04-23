"use strict";

const form = document.querySelector('form');
const input = document.querySelector('input');
const list = document.querySelector('ul');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  const inputValue = input.value.trim();
  e.preventDefault();
  if (inputValue == '') {
    return;
  }

  const listItem = document.createElement('li');
  listItem.classList.add('text-xl', 'flex', 'justify-between', 'mb-3');
  listItem.appendChild(document.createTextNode(inputValue));

  const crossIcon = document.createElement('a');
  crossIcon.className = 'cursor-pointer';
  crossIcon.innerHTML = `<i class="fas fa-times text-lg text-red-400 delete"></i>`;

  listItem.appendChild(crossIcon);
  list.appendChild(listItem);
  input.value = '';
}

list.addEventListener('click', handleClick);

function handleClick(e) {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.parentElement.remove();
  }
}