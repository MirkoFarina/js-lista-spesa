const cEl = document.createElement.bind(document);
const listaAlimenti = [
  'latte',
  'uova',
  'farina',
  'burro',
  'nutella',
  'arachidi',
  'coca-cola'
];
const main = document.querySelector('main');
const container = cEl('div');
const h1 = cEl('h1');
const div = cEl('div');
const ol = cEl('ol');
const h2 = cEl('h2');
const ul = cEl('ul');

container.classList.add('container');
h1.innerText = 'Lista della spesa (con ciclo for)';
h2.innerText = 'Lista della spesa (con ciclo while)';


main.append(container);
container.append(div);
div.append(h1);
div.append(ol);
div.append(h2);
div.append(ul);


//CICLO FOR
for(let i = 0; i < listaAlimenti.length; i++){
  const li = cEl('li');
  
  li.innerText += listaAlimenti[i];
  
  ol.append(li);
}

//CICLO WHILE
let c = 0;

while(c < listaAlimenti.length){
  const li = cEl('li');

  li.innerHTML += listaAlimenti[c];

  c++;


  ul.append(li);
}

