const form = document.getElementById('addItems');
const input = form.querySelector('input');
const ul = document.getElementById('todoItems');

function createLI(text){
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = text;
  li.appendChild(span);
  return li;
}

form.addEventListener('submit', (e) =>{
  e.preventDefault();
  const text = input.value;
  input.value = '';

  const li = createLI(text);
  ul.appendChild(li);

});
