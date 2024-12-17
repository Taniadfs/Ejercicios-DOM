/*1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.*/
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']

const ul = document.createElement('ul')
for (const countrie of countries) {
  const li = document.createElement('li')
  li.textContent = countrie
  ul.appendChild(li)
}
document.body.appendChild(ul)

/*1.2 Elimina el elemento que tenga la clase .fn-remove-me.*/

const p = document.querySelector('.fn-remove-me')
p.remove()

if (!document.querySelector('.fn-remove-me')) {
  console.log('El elemento ya no está en el DOM')
}

/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".*/
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']

const listaul = document.createElement('ul')

for (const car of cars) {
  const listali = document.createElement('li')
  listali.textContent = car
  listali.setAttribute('data-function', 'printHere')
  listaul.appendChild(listali)
  console.log('elemento creado:', listali)
}
document.body.appendChild(listaul)
/*1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.*/
const countries2 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

for (const countrie2 of countries2) {
  const div = document.createElement('div')
  const h4 = document.createElement('h4')
  const img = document.createElement('img')

  h4.textContent = countrie2.title
  img.setAttribute('src', countrie2.imgUrl)
  img.setAttribute('alt', countrie2.title)

  div.appendChild(h4)
  div.appendChild(img)

  console.log('Elemento creado:', div)

  document.body.appendChild(div)
}

/*1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la serie de divs.*/

const deletelastdivbutton = document.createElement('button')
deletelastdivbutton.textContent = 'div eliminado'

function eliminarUltimoDiv() {
  const allDivs = document.querySelectorAll('div')
  allDivs[allDivs.length - 1].remove()
}

deletelastdivbutton.addEventListener('click', eliminarUltimoDiv)
document.body.appendChild(deletelastdivbutton)

/*1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html.*/

const allDivsToRemove2 = document.querySelectorAll('div')

for (const div of allDivsToRemove2) {
  const button = document.createElement('button')
  button.textContent = 'Eliminar'
  button.addEventListener('click', (e) => {
    console.log('Elemento eliminado:', e.target.parentElement)
    e.target.parentElement.remove()
  })
  div.appendChild(button)
}
