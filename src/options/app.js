/* eslint-disable no-undef */
let inputs = document.getElementsByTagName('input');

function saveOptions(e) {
	console.log('save options');
	e.preventDefault();
	for (i = 0; i < inputs.length; i++) {
		if (inputs.item(i).type == 'checkbox') {
			let settingID = inputs.item(i).id;
			let settingValue = inputs.item(i).checked;

			browser.storage.local.set({ [`${settingID}`]: settingValue });
		}
	}

	alert('Settings Saved\nReload the page');
}

function restoreOptions() {
	for (let i = 0; i < inputs.length; i++) {
		if (inputs.item(i).type == 'checkbox') {
			let settingID = inputs.item(i).id;

			browser.storage.local.get(settingID, function (result) {
				for (j = 0; j < inputs.length; j++) {
					if (inputs.item(i).id == settingID) {
						inputs.item(i).checked = result[settingID];
					}
				}
			});
		}
	}
}

// for (let i = 0; i < coll.length; i++) {
// 	coll[i].addEventListener('click', function () {
// 		for (let j = 0; j < coll.length; j++) {
// 			coll[j].classList.remove('active');
// 			let nextContent = coll[j].nextElementSibling;
// 			if (nextContent.style.maxHeight) {
// 				nextContent.style.maxHeight = null;
// 			}
// 		}
// 		coll[i].classList.toggle('active');
// 		let content = coll[i].nextElementSibling;
// 		if (content.style.maxHeight) {
// 			content.style.maxHeight = null;
// 		} else {
// 			content.style.maxHeight = content.scrollHeight + 'px';
// 		}
// 	});
// }

let coll = document.getElementsByClassName('collapsible');
let content = document.getElementsByClassName('content');

for (let i = 0; i < coll.length; i++) {
	coll[i].onclick = function () {
		let setClasses = !this.classList.contains('active');
		setClass(coll, 'active', 'remove');
		setClass(content, 'show', 'remove');

		if (setClasses) {
			this.classList.toggle('active');
			this.nextElementSibling.classList.toggle('show');
		}
	};
}

function setClass(els, className, fnName) {
	for (let i = 0; i < els.length; i++) {
		els[i].classList[fnName](className);
	}
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector('form').addEventListener('submit', saveOptions);
