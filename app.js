const form = document.getElementById('addItems');
const input = form.querySelector('input');
const ul = document.getElementById('todoItems');

form.addEventListener('submit', (e) =>{
  e.preventDefault();
  const text = input.value;
  input.value = '';

  const li = createLI(text);
  ul.appendChild(li);

});
