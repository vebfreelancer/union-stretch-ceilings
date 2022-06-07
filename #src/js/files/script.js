/* ####################################################### LAZY LOAD MAP ####################################################### */

const lazyLoadMap = () => {
	const sectionMap = document.getElementById('section-map');
	const map = document.querySelector('#map iframe');
	const src = map.dataset.src;
	let scrollPage = window.scrollY;

	if (scrollPage > sectionMap.offsetTop - 1000){
		map.setAttribute('src', src);
		map.removeAttribute('data-src');
	}

	function checkScrollY(){
		scrollPage = window.scrollY;

		if (scrollPage > window.innerHeight){
			map.setAttribute('src', src);
			map.removeAttribute('data-src');
			window.removeEventListener('scroll', checkScrollY);
		}
	}

	if (sectionMap){
		window.addEventListener('scroll', checkScrollY);
	}
};
lazyLoadMap();

/* ####################################################### LAZY LOAD IMAGES ####################################################### */

const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

/* ####################################################### PRICE CALCULATION ####################################################### */

const calcForm = document.querySelector('.calc__form');
const typeCanvas = document.querySelectorAll('.canvas__checkbox');
const canvasCheckbox = document.querySelectorAll('.canvas__checkbox');
const square = document.getElementById('square');
const corners = document.getElementById('corners');
const countSquare = document.getElementById('count_square');
const countCorners = document.getElementById('count_corners');
const fixtures_and_pipes = document.querySelectorAll('.count-item__flex');
let calcPrice = document.getElementById('price');
let trackCorners = document.getElementById('track_corners');
const calcBlock = document.querySelector('.calc-spoller-body');

if (calcForm){
	if (window.innerWidth >= 480) calcBlock.dataset.screen = 'desctop';
	else calcBlock.dataset.screen = 'mobile';
}

function squareTrack(){
    let trackSquare = document.getElementById('track_square');
    if (trackSquare){
        let percentsquare = square.value * 100 / 150;
        countSquare.innerHTML = square.value + ' sq m';

        square.addEventListener('input', function(){
            percentsquare = square.value * 100 / 150;
            this.nextElementSibling.style.width = percentsquare + '%';
            countSquare.innerHTML = this.value + ' sq m';
			if (+square.value === 1){
				this.nextElementSibling.removeAttribute('style');
			}
        });
    }
}
squareTrack();

function cornersTrackWidth(){

    if (trackCorners){
        let cornersWidth = corners.clientWidth / 5;
		if (window.innerWidth >= 480 && calcBlock.dataset.screen === 'desctop'){
			trackCorners.style.width = (corners.value - 1) * cornersWidth + 'px';
		}

		if (window.innerWidth >= 480 && calcBlock.dataset.screen === 'mobile'){
			calcBlock.dataset.screen = 'desctop';
			setTimeout(() => {
				cornersWidth = corners.clientWidth / 5;
				trackCorners.style.width = (corners.value - 1) * cornersWidth + 'px';
			}, 100);
		}

		let calcMobNav = document.querySelector('.calc-spoller-nav');
		const mobileWidth = (calcMobNav.clientWidth - 30) / 5;

		if (window.innerWidth < 480){
			trackCorners.style.width = (corners.value - 1) * mobileWidth + 'px';
		}
		if (window.innerWidth < 480 && calcBlock.dataset.screen === 'desctop'){
			calcBlock.dataset.screen = 'mobile';
		}

        corners.addEventListener('input', function(event){
            const target = event.target;
            
			if (window.innerWidth >= 480){
				this.nextElementSibling.style.width = (target.value - 1) * (cornersWidth - 2) + 'px';
			}
			if (window.innerWidth < 480){
				trackCorners.style.width = (corners.value - 1) * mobileWidth + 'px';
			}
            innerCorner();
        });
    }
}
cornersTrackWidth();

function innerCorner(){
    if (countCorners){
        const cornerArray = [' corner', ' corners'];
        if (+corners.value === 1){
            countCorners.innerHTML = corners.value + cornerArray[0];
        } else {
            countCorners.innerHTML = corners.value + cornerArray[1];
        }
    }
}
innerCorner();

function calculate(){
    if (calcForm){
        let number = +calcPrice.value;
        let cornersPrice = +corners.getAttribute('data-price');
        let fixtures = document.getElementById('fixtures');
        let fixturesPrice = +fixtures.getAttribute('data-price');
        let addFixtures = +fixtures.value;
        let pipes = document.getElementById('pipes');
        let pipesPrice = + pipes.getAttribute('data-price');
        let addPipes = +pipes.value;

        typeCanvas.forEach(checkbox => {
            if (checkbox.hasAttribute('checked')){
                number = +checkbox.value;
            }
    
            checkbox.addEventListener('change', function(){
                if ( this.checked ) {
                    number = +checkbox.value;
                    endSum();
                }
            });
        });
    
        square.addEventListener('change', function(){
            endSum();
        });
    
        corners.addEventListener('change', function(){
            endSum();
        });
        
        function endSum(){
            let resultStart = number * +square.value + (+corners.value * cornersPrice) + addFixtures + addPipes;
            calcPrice.value = resultStart;
			outputPrice();
        }
        endSum();
    
        let plus = 0;
        fixtures_and_pipes.forEach(el => {
            el.addEventListener('click', function(e){
                const target = e.target;
    
                if (target.closest('.count-item__plus')){
                    plus = +this.querySelector('input').value + 1;
                    this.querySelector('input').value = plus;
                    addFixtures = +fixtures.value * fixturesPrice;
                    addPipes = +pipes.value * pipesPrice;
                    endSum(addFixtures, addPipes);
                }
    
                if (target.closest('.count-item__minus')){
                    plus = +this.querySelector('input').value - 1;
                    this.querySelector('input').value = plus;
                    if (plus < 0){
                        this.querySelector('input').value = 0;
                    }
                    addFixtures = +fixtures.value * fixturesPrice;
                    addPipes = +pipes.value * pipesPrice;
                    endSum(addFixtures, addPipes);
                }
            });
        });
		
		function outputPrice(){
			const priceOutput = document.querySelector('#price_output');
			const installmentPlan = document.querySelector('#installment_plan');
			const installmentOutput = document.querySelector('#installment_output');
			priceOutput.textContent = calcPrice.value;
			installmentOutput.textContent = installmentPlan.value;
		}
		outputPrice();
    }
}
calculate();

/* ####################################################### REASON TABLE ####################################################### */

function tableOverlay(){
    const table = document.querySelector('.comparison-table__wrapper');
    const overlay = document.querySelector('.content-table__overlay');

    if (table) overlay.style.height = table.clientHeight + 'px';
}
setTimeout(tableOverlay, 500);

const faqMobMenu = document.querySelector('.faq__mob-menu');
const faqMobSelect = document.querySelector('.menu-mob__select');
const faqSelectMarker = document.querySelector('.menu-mob__select span');
const faqMobList = document.querySelector('.menu-mob__list');
const faqmobArrow = document.querySelector('.menu-mob__arrow');

if (faqMobMenu){
    faqMobMenu.addEventListener('click', function(e){
        const target = e.target;
    
        faqMobList.classList.toggle('_active');
        faqmobArrow.classList.toggle('_active');
    
        if (target.closest('.aside-faq__link')){
            faqMobSelect.innerHTML = '<span>' + target.previousElementSibling.textContent + '</span>' + target.textContent;
            faqMobList.classList.remove('_active');
            faqmobArrow.classList.remove('_active');
        }
    });
}

const navTypes = document.querySelector('.tabs-inner__nav-mobile');
const catalogTypes = document.querySelector('.tabs-inner__active-select');
const menuTypes = document.querySelector('.tabs-inner__menu-mob');

if (menuTypes){
	window.addEventListener('click', (event) => {
		const target = event.target;
		if (!target.closest('.tabs-inner__nav-mobile') && navTypes.classList.contains('_active')){
			menuTypes.classList.remove('_active');
            navTypes.classList.remove('_active');
		}
	});
    navTypes.addEventListener('click', () => {
        menuTypes.classList.toggle('_active');
        navTypes.classList.toggle('_active');
    });
    
    menuTypes.addEventListener('click', function(event){
        const target = event.target;
        if (target.closest('.tabs-inner__title-nav')){
            catalogTypes.textContent = target.textContent;
            menuTypes.classList.remove('_active');
            navTypes.classList.remove('_active');
        }
    });
}

function tabsMenu(){
    const mobMenuTabs = document.querySelector('.tabs-block__nav-mobile');
    const selectedItem = document.querySelector('.selected-item');
    const menuSelect = document.querySelector('.tabs-block__menu-mob');

    if (menuSelect){
		window.addEventListener('click', (event) => {
			const target = event.target;
			if (!target.closest('.tabs-block__nav-mobile') && mobMenuTabs.classList.contains('_active')){
				menuSelect.classList.remove('_active');
                mobMenuTabs.classList.remove('_active');
			}
		});
        mobMenuTabs.addEventListener('click', () => {
            menuSelect.classList.toggle('_active');
            mobMenuTabs.classList.toggle('_active');
			
        });
        
        menuSelect.addEventListener('click', function(event){
            const target = event.target;
            if (target.closest('._tabs-item')){
                selectedItem.textContent = target.textContent;
                menuSelect.classList.remove('_active');
                mobMenuTabs.classList.remove('_active');
            }
        });
    }
}
tabsMenu();

/* ####################################################### UPDATE RESIZE ####################################################### */
window.addEventListener('resize', () => {
	actionsHeader();
    cornersTrackWidth();
    tableOverlay();
    productSlider();
});

/* ######################################################### VIDEO ######################################################### */

const popupVideo = document.querySelector('.popup-video');
const play = document.querySelectorAll('.play-video');
const workClose = document.querySelector('.popup-video__close');

const playVideo = () => {
	let iframe = document.querySelectorAll('iframe');
	Array.prototype.forEach.call(iframe, iframe => {
		iframe.contentWindow.postMessage(JSON.stringify({
			event: 'command',
			func: 'playVideo',
			args: ''
		}), '*');
	});
}

const stopVideo = () => {
	let iframe = document.querySelectorAll('iframe');
	Array.prototype.forEach.call(iframe, iframe => {
		iframe.contentWindow.postMessage(JSON.stringify({
			event: 'command',
			func: 'stopVideo'
		}), '*');
	});
}

play.forEach(el => {
	el.addEventListener('click', function(){
		let idVideo = this.dataset.videoId;
		const videoContainer = document.querySelector('.popup-video__container');
		popupVideo.classList.toggle('_active');
		videoContainer.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + idVideo +'?enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
		playVideo();
	});
})

popupVideo.addEventListener('click', function(e){
	const target = e.target;

	if (target.closest('.popup-video') || target.closest('.popup-video__close')) {
		popupVideo.classList.remove('_active');
		stopVideo();
	}
});

/* ####################################################### ACTIVE ITEM MENU ####################################################### */

function shineLinks(){
    const el = document.querySelectorAll('.active-item a');
        const url = document.location.href;
        for (let i = 0; i < el.length; i++){
            if (url === el[i].href){
                el[i].classList.add('_active');
            };
        }
}
shineLinks();

/* ####################################################### FORMS VALIDATE ####################################################### */

function form_validate(form) {
	let error = 0;
	let form_req = form.querySelectorAll('._req');
	if (form_req.length > 0) {
		for (let index = 0; index < form_req.length; index++) {
			const el = form_req[index];
			if (!_is_hidden(el)) {
				error += form_validate_input(el);
			}
		}
	}
	return error;
}
function form_validate_input(input) {
	let error = 0;
	let input_g_value = input.getAttribute('data-value');

	if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
		if (input.value != input_g_value) {
			let em = input.value.replace(" ", "");
			input.value = em;
		}
		if (email_test(input) || input.value == input_g_value) {
			form_add_error(input);
			error++;
		} else {
			form_remove_error(input);
		}
	} else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
		form_add_error(input);
		error++;
	} else {
		if (input.value == '' || input.value == input_g_value) {
			form_add_error(input);
			error++;
		} else {
			form_remove_error(input);
		}
	}
	return error;
}
function form_add_error(input) {
	input.classList.add('_error');
	input.parentElement.classList.add('_error');

	let input_error = input.parentElement.querySelector('.form__error');
	if (input_error) {
		input.parentElement.removeChild(input_error);
	}
	let input_error_text = input.getAttribute('data-error');
	if (input_error_text && input_error_text != '') {
		input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + input_error_text + '</div>');
	}
}
function form_remove_error(input) {
	input.classList.remove('_error');
	input.parentElement.classList.remove('_error');

	let input_error = input.parentElement.querySelector('.form__error');
	if (input_error) {
		input.parentElement.removeChild(input_error);
	}
}
function form_clean(form) {
	let inputs = form.querySelectorAll('input,textarea');
	for (let index = 0; index < inputs.length; index++) {
		const el = inputs[index];
		el.parentElement.classList.remove('_focus');
		el.classList.remove('_focus');
		el.value = el.getAttribute('data-value');
	}
	let checkboxes = form.querySelectorAll('.checkbox__input');
	if (checkboxes.length > 0) {
		for (let index = 0; index < checkboxes.length; index++) {
			const checkbox = checkboxes[index];
			checkbox.checked = false;
		}
	}
	let selects = form.querySelectorAll('select');
	if (selects.length > 0) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_default_value = select.getAttribute('data-default');
			select.value = select_default_value;
			select_item(select);
		}
	}
}

//Placeholers
let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
inputs_init(inputs);

function inputs_init(inputs) {
	if (inputs.length > 0) {
		for (let index = 0; index < inputs.length; index++) {
			const input = inputs[index];
			const input_g_value = input.getAttribute('data-value');
			input_placeholder_add(input);
			if (input.value != '' && input.value != input_g_value) {
				input_focus_add(input);
			}
			input.addEventListener('focus', function (e) {
				if (input.value == input_g_value) {
					input_focus_add(input);
					input.value = '';
				}
				if (input.getAttribute('data-type') === "pass") {
					if (input.parentElement.querySelector('._viewpass')) {
						if (!input.parentElement.querySelector('._viewpass').classList.contains('_active')) {
							input.setAttribute('type', 'password');
						}
					} else {
						input.setAttribute('type', 'password');
					}
				}
				if (input.classList.contains('_phone')) {
					//'+7(999) 999 9999'
					//'+38(999) 999 9999'
					//'+375(99)999-99-99'
					input.classList.add('_mask');
					Inputmask("+9(999) 999 9999", {
						//"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
				}
				if (input.classList.contains('_digital')) {
					input.classList.add('_mask');
					Inputmask("9{1,}", {
						"placeholder": '',
						clearIncomplete: true,
						clearMaskOnLostFocus: true,
						onincomplete: function () {
							input_clear_mask(input, input_g_value);
						}
					}).mask(input);
				}
				form_remove_error(input);
			});
			input.addEventListener('blur', function (e) {
				if (input.value == '') {
					input.value = input_g_value;
					input_focus_remove(input);
					if (input.classList.contains('_mask')) {
						input_clear_mask(input, input_g_value);
					}
					if (input.getAttribute('data-type') === "pass") {
						input.setAttribute('type', 'text');
					}
				}
			});
			if (input.classList.contains('_date')) {
				const calendarItem = datepicker(input, {
					customDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
					customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
					overlayButton: 'Применить',
					overlayPlaceholder: 'Год (4 цифры)',
					startDay: 1,
					formatter: (input, date, instance) => {
						const value = date.toLocaleDateString()
						input.value = value
					},
					onSelect: function (input, instance, date) {
						input_focus_add(input.el);
					}
				});
				const dataFrom = input.getAttribute('data-from');
				const dataTo = input.getAttribute('data-to');
				if (dataFrom) {
					calendarItem.setMin(new Date(dataFrom));
				}
				if (dataTo) {
					calendarItem.setMax(new Date(dataTo));
				}
			}
		}
	}
}
function input_placeholder_add(input) {
	const input_g_value = input.getAttribute('data-value');
	if (input.value == '' && input_g_value != '') {
		input.value = input_g_value;
	}
}
function input_focus_add(input) {
	input.classList.add('_focus');
	input.parentElement.classList.add('_focus');
}
function input_focus_remove(input) {
	input.classList.remove('_focus');
	input.parentElement.classList.remove('_focus');
}
function input_clear_mask(input, input_g_value) {
	input.inputmask.remove();
	input.value = input_g_value;
	input_focus_remove(input);
}