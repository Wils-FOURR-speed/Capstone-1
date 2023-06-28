const hamburger = document.getElementById('menu');
// const closeBtn = document.getElementById('close');
const menuItem = document.getElementById('item');
const items = document.querySelectorAll('.item');
const Spcan = document.getElementById('Spcann');

items.forEach((elmt) => {
  elmt.addEventListener('click', () => {
    menuItem.style = 'display: none;';
  });
});

hamburger.addEventListener('click', () => {
  menuItem.style = 'display: block;';
  hamburger.src = './Images/close.svg';
});

// closeBtn.addEventListener('click', () => {
//   menuItem.style = 'display: none;';
// });

const Speakers = [
  {
    name: 'Neymar Jr',
    image: './Images/NeymarJr.jpg',
    discrip: 'He is a professional footballer who has a lot of skills in his career of life',
    title: 'Fulltime professional footballer',
  },
  {
    name: 'Jack Dorsey',
    image: './Images/CEOtwitter.jpg',
    discrip: 'The founder and CEO of the well known social media app Twitter.',
    title: 'CEO of Twitter',
  },
  {
    name: 'Jeff Bezos',
    image: './Images/Bezos.jpg',
    discrip: 'A strong business man who succeeded in his own business',
    title: 'One of the richest men in the world presently',
  },
  {
    name: 'Bill Gate',
    image: './Images/BillGate.jpg',
    discrip: 'The founder of the Windows Operating System which has developed the world we live in today.',
    title: 'Founder of Windows and a rich man too.',
  },
  {
    name: 'Elon Musk',
    image: './Images/ElonMusk.jpg',
    discrip: 'He owns one of the best electric motor and airship companies, Tesla and Space-X',
    title: 'CEO of Tesla and Space-X',
  },
  {
    name: 'Mark Zuckerberg',
    image: './Images/Mark.jpg',
    discrip: 'The founder and CEO of the well known social media app Facebook.',
    title: 'CEO of facebook platform',
  },
];

Speakers.forEach((obj) => {
  const div = document.createElement('div');

  const speak1 = document.createElement('div');
  speak1.classList.add('speaker1');
  speak1.classList.add('d-flex');
  div.appendChild(speak1);

  const person = document.createElement('div');
  person.classList.add('person');
  speak1.appendChild(person);

  const backimg = document.createElement('div');
  backimg.classList.add('backImg');
  person.appendChild(backimg);

  const img = document.createElement('img');
  img.src = obj.image;
  person.appendChild(img);

  const diffpoint = document.createElement('div');
  diffpoint.classList.add('diffpoints');
  speak1.appendChild(diffpoint);

  const intro = document.createElement('div');
  intro.classList.add('intro');
  diffpoint.appendChild(intro);

  const h4 = document.createElement('h4');
  h4.innerHTML = obj.name;
  intro.appendChild(h4);

  const p = document.createElement('p');
  p.innerHTML = obj.title;
  intro.appendChild(p);

  const line = document.createElement('hr');
  diffpoint.appendChild(line);

  const p2 = document.createElement('p');
  p2.innerHTML = obj.discrip;
  diffpoint.appendChild(p2);

  Spcan.appendChild(div);
});

const drop = document.getElementById('See-more-Btn');
drop.addEventListener('click', () => {
  Spcan.classList.toggle('drop');

  if (drop.textContent === 'See More') {
    drop.textContent = 'See Less';
  } else {
    drop.textContent = 'See More';
  }
});
