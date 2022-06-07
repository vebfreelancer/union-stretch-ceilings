//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) { }

let tabsSlider = new Swiper('.tabs-block__slider', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	slidesPerView: 1,
	spaceBetween: 10,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	// preloadImages: false,
	lazy: {
		// loadOnTransitionStart: false,
		// loadPrevNext: false,
	},
	// Dotts
	//pagination: {
	//	el: '.slider-quality__pagging',
	//	clickable: true,
	//},
	// Arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});

let trustSlider = new Swiper('.trust-slider', {
	slidesPerView: 1,
	spaceBetween: 10,
	// Arrows
	navigation: {
		nextEl: '.trust-button-next',
		prevEl: '.trust-button-prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 4,
		},
		992: {
			slidesPerView: 5,
			spaceBetween: 15,
		},
		1100: {
			slidesPerView: 5,
			spaceBetween: 19,
		},
	},
});

let sliderWorks = new Swiper('.slider-works', {
	slidesPerView: 2,
	speed: 800,
	// Arrows
	navigation: {
		nextEl: '.works-button-next',
		prevEl: '.works-button-prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		992: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1100: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
	},
});

let sliderRewievs = new Swiper('.reviews-slider', {
	// slidesPerView: 3,
	spaceBetween: 30,
	// Arrows
	navigation: {
		nextEl: '.reviews-button-next',
		prevEl: '.reviews-button-prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		680: {
			slidesPerView: 2,
			
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 10,
		},
		1100: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
});

function productSlider(){
	let thumbsBig = new Swiper('.thumbs-big', {
		slidesPerView: 1,
		spaceBetween: 10,
		simulateTouch: false,
		// Arrows
		navigation: {
			prevEl: '.thumbs-button-prev',
			nextEl: '.thumbs-button-next',
		},
		thumbs: {
			swiper: {
				el: '.thumbs-small',
				slidesPerView: 'auto',
				allowTouchMove: false,
			},
		},
	});
}
productSlider();