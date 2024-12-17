/* 1.1 Inserta dinamicamente en un html un div vacio con javascript. */

const divVacio = document.createElement('div')
document.body.appendChild(divVacio)

console.log('div añadido:', divVacio)

/* 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript. */

const divp = document.createElement('div')
const parrafo = document.createElement('p')

divp.appendChild(parrafo)
document.body.appendChild(divp)

console.log(divp)

/* 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
	loop con javascript. */

const div = document.createElement('div')

for (let i = 1; i <= 5; i++) {
  const p6 = document.createElement('p')
  div.appendChild(p6)
}

document.body.appendChild(div)

console.log(div)

/* 1.4 Inserta dinamicamente con javascript en un html una p con el 
	texto 'Soy dinámico!'. */

const p = document.createElement('p')
p.textContent = 'Soy dinamico'

document.body.appendChild(p)

console.log(p)
/* 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'. */

const h2 = document.querySelector('.fn-insert-here')
h2.textContent = 'Wubba Lubba dub dub'

console.log(h2)

/* 1.6 Basandote en el siguiente array crea una lista ul > li con 
los textos del array.*/

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

const ul = document.createElement('ul')

for (let i = 0; i < apps.length; i++) {
  const li = document.createElement('li')
  li.textContent = apps[i]

  ul.appendChild(li)
}

document.body.appendChild(ul)

/* 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me */

const eliminarps = document.querySelectorAll('.fn-remove-me')

for (const eliminarp of eliminarps) {
  console.log('Eliminando:', eliminarp)
  eliminarp.remove()
}

/* 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild. */

const divs = document.querySelectorAll('div')
const pMid = document.createElement('p')
pMid.textContent = 'Voy en medio'

document.body.insertBefore(pMid, divs[1])
console.log('Elemento insertado:', pMid)
/* 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
	.fn-insert-here */

const insertdivs = document.querySelectorAll('div.fn-insert-here')
for (const div of insertdivsdiv) {
  const p = document.createElement('p')
  p.textContent = 'Voy dentro'

  div.appendChild(p)
}
