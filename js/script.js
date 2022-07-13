let body = document.querySelector('body');
let icon = document.querySelector('.menu__icon');
let source = document.querySelector('source');

let i = 1;

function click(){
	body.classList.toggle('active');
	if (i % 2 ==0){
		source.setAttribute('srcset', 'img/header/header6.svg');
	}
	else{
		source.setAttribute('srcset', 'img/header/header5.svg');
	}
	i++;
}

icon.onclick = click;

new Swiper('.swiper-container',{
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	spaceBetween: 30,
	breakpoints: {
		320:{
			slidesPerView: 1,
		},
		850:{
			slidesPerView: 2,
		}
	},
});

new Swiper('.swiper',{
	slidesPerView: 3,
	initialSlide: 2,
	navigation:{
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
});
