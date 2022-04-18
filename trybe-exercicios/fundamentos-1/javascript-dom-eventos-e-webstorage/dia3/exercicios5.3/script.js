function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let dayz = document.getElementById('days');

for (let i of dezDaysList) {
  let elemento = document.createElement('li');
  elemento.innerHTML = i;
  dayz.appendChild(elemento);
  elemento.className = 'day';
  if (i === 24 || i === 25 || i === 31) {
    elemento.className += ' holiday';
  }
  if (i === 4 || i === 11 || i === 18 || i === 25) {
    elemento.className += ' friday';
  }
}

function holidayButton(string) {
  button = document.createElement('button');
  document.getElementsByClassName('buttons-container')[0].appendChild(button);
  button.id = 'btn-holiday';
  button.innerHTML = string;
  button.addEventListener('click', aoClicar);
}
holidayButton('Feriados');

function aoClicar() {
  let holy = document.querySelectorAll('.holiday');
  for (let i = 0; i < holy.length; i += 1) {
    if (holy[i].style.backgroundColor !== 'green') {
      holy[i].style.backgroundColor = "green"; holy[i].style.color = "white";
    } else {
      holy[i].style.backgroundColor = 'rgb(238,238,238)'; holy[i].style.color = '#777';
    }
  }
}

function friday(string) {
  let fridayButton = document.createElement('button');
  document.querySelector('.buttons-container').appendChild(fridayButton);
  fridayButton.id = 'btn-friday';
  fridayButton.innerHTML = string;
  fridayButton.addEventListener('click', aoClicar2);
}
friday('Sexta-feira')

let fridaysArray = [ 4, 11, 18, 25 ];
function aoClicar2() {
  let sexta = document.getElementsByClassName('friday');
  
  for (let i = 0; i < sexta.length; i += 1) {
    if (sexta[i].innerHTML === 'SEXTOU') {
      sexta[i].innerHTML = fridaysArray[i];
    } else {
      sexta[i].innerHTML = 'SEXTOU';
    }
  }
}

let dias = document.getElementsByClassName('day');

for (let i = 0; i < dias.length; i += 1) {
  dias[i].addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
  })
  dias[i].addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
  })
}

function tasks (string) {
  let task = document.createElement('span');
  document.querySelector('.my-tasks').appendChild(task);
  task.innerHTML = string;
}
tasks('cozinhar');

function taskColor (cor) {
  let color = document.createElement('div');
  color.className = 'task'
  document.querySelector('.my-tasks').appendChild(color);
  color.style.backgroundColor = cor;
}
taskColor('green');

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();