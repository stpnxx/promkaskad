let body = document.querySelector('body');
let icon = document.querySelector('.menu__icon');
let source = document.querySelector('source');

let i = 1;

function click(){
	body.classList.toggle('active');
	if (i % 2 ==0){
		source.setAttribute('srcset', 'img/header/header6.png');
	}
	else{
		source.setAttribute('srcset', 'img/header/header5.png');
	}
	i++;
}

icon.onclick = click;