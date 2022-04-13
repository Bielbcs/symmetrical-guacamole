document.querySelector('#header-container').style.backgroundColor = 'green';

function changeClassColors(element, color) {
    teste = document.getElementsByClassName(element);
    for (let i = 0; i < teste.length; i += 1) {
        teste[i].style.backgroundColor = color;
    }
}

changeClassColors('emergency-tasks', 'orange');
changeClassColors('no-emergency-tasks', 'yellow')
changeClassColors('urgent-important', 'purple');
changeClassColors('no', 'black')

document.querySelector('#footer-container').style.backgroundColor = '#036b52';