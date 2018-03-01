import allItems from './pdd_items';

var result = "";

allItems().forEach(item => {
	result += '<div class="pdd-item">';
	result += '<div class="pdd-item__inner">';
	result += '<div class="pdd-item__title">' + item.title + '</div>';
	result += '<div class="pdd-item__image"><img src="assets/img/'+ item.image +'"></div>';
	result += '<ol class="pdd-item__answers">';
	
	item.answers.forEach(answer => {
		if(answer.status == "true") {
			result += '<li class="true">'+ answer.title +'</li>';
		} else {
			result += '<li>'+ answer.title +'</li>';
		}
	});

	result += '</ol>';
	result += '</div>';
	result += '</div>';
});

document.querySelector(".pdd-items").innerHTML = result;

function hideElement(el) {
	el.style.display = 'none';
}
function showElement(el) {
	el.style.display = 'block';
}
function searching(str, target) {
	return (str.indexOf(target, 0) == -1) ? false : true;
}

const input = document.querySelector("[name=pdd-search]");
const pdd_items = document.getElementsByClassName("pdd-item");
const clearButton = document.querySelector("[type=reset]");
const form = document.querySelector("form");

form.onsubmit = function(e) {
	e.preventDefault();
}

// reset form
clearButton.onclick = function() {
	input.value == '';
	for(var i = 0; i < pdd_items.length; i++) {
		showElement(pdd_items[i]);
	}
	input.focus();
}

input.oninput = function() {
	if(input.value == '') {
		for(var i = 0; i < pdd_items.length; i++) {
			showElement(pdd_items[i]);
		}
		return;
	}
	for(var i = 0; i < pdd_items.length; i++) {
		hideElement(pdd_items[i]);
	}
	for(var i = 0; i < pdd_items.length; i++) {
		var str = pdd_items[i].childNodes[0].childNodes[0].innerHTML.toLowerCase();
		var target = input.value.toLowerCase();
		if(searching(str, target)) {
			showElement(pdd_items[i]);
		} else {
			hideElement(pdd_items[i]);
		}
	}

}