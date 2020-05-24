const macbookair = document.getElementById('macbookair');
const macbookpro = document.getElementById('macbookpro');
const imac = document.getElementById('imac');
const proxdr = document.getElementById('proxdr');

const ipadair = document.getElementById('ipadair');
const ipadpro = document.getElementById('ipadpro');
const ipadmini = document.getElementById('ipadmini');
const ipad = document.getElementById('ipad');

const iphone11 = document.getElementById('iphone11');
const iphone11pro = document.getElementById('iphone11pro');
const iphonex = document.getElementById('iphonex');
const iphonese = document.getElementById('iphonese');
const iphonexr = document.getElementById('iphonexr');

const aw5 = document.getElementById('aw5');
const aw3 = document.getElementById('aw3');
const aws = document.getElementById('aws');
const awn = document.getElementById('awn');
const awh = document.getElementById('awh');
const awe = document.getElementById('awe');

const tvplus = document.getElementById('tvplus');
const tvapp = document.getElementById('tvapp');
const tv4k = document.getElementById('tv4k');
const tvhd = document.getElementById('tvhd');

document.querySelector('#macbookair').addEventListener('click', function (e) {e.preventDefault();}, false);
document.querySelector('#macbookpro').addEventListener('click', function (e) {e.preventDefault();}, false);
document.querySelector('#imac').addEventListener('click', function (e) {e.preventDefault();}, false);
document.querySelector('#proxdr').addEventListener('click', function (e) {e.preventDefault();}, false);

document.querySelector('#ipadair').addEventListener('click', function (e) {e.preventDefault();}, false);
document.querySelector('#ipadpro').addEventListener('click', function (e) {e.preventDefault();}, false);
document.querySelector('#ipadmini').addEventListener('click', function (e) {e.preventDefault();}, false);
document.querySelector('#ipad').addEventListener('click', function (e) {e.preventDefault();}, false);

document.querySelector('#iphone11').addEventListener('click', function (e) {e.preventDefault();}, false);
document.querySelector('#iphone11pro').addEventListener('click', function (e) {e.preventDefault();}, false);
document.querySelector('#iphonex').addEventListener('click', function (e) {e.preventDefault();}, false);
document.querySelector('#iphonese').addEventListener('click', function (e) {e.preventDefault();}, false);
document.querySelector('#iphonexr').addEventListener('click', function (e) {e.preventDefault();}, false);

document.querySelector('#aw5').addEventListener('click', function (e) {e.preventDefault();}, false);
document.querySelector('#aw3').addEventListener('click', function (e) {e.preventDefault();}, false);
document.querySelector('#aws').addEventListener('click', function (e) {e.preventDefault();}, false);
document.querySelector('#awn').addEventListener('click', function (e) {e.preventDefault();}, false);
document.querySelector('#awh').addEventListener('click', function (e) {e.preventDefault();}, false);
document.querySelector('#awe').addEventListener('click', function (e) {e.preventDefault();}, false);

document.querySelector('#tvplus').addEventListener('click', function (e) {e.preventDefault();}, false);
document.querySelector('#tvapp').addEventListener('click', function (e) {e.preventDefault();}, false);
document.querySelector('#tv4k').addEventListener('click', function (e) {e.preventDefault();}, false);
document.querySelector('#tvhd').addEventListener('click', function (e) {e.preventDefault();}, false);

const content = document.getElementById('content');
const path = document.getElementById('path');
const center = document.getElementById('center');
const content_description = document.getElementById('content_description');

function clearBox(elementID) {document.getElementById(elementID).innerHTML = "";}

function createProductItem(name, price, imgsrc) {
	const productItem = document.createElement('div');
	productItem.className = "product-item";
	const img = document.createElement('img');
	img.src = imgsrc;
	const productList = document.createElement('div');
	productList.className = "product-list";
	const description = document.createElement('h3');
	description.innerHTML = name;
	const _price = document.createElement('span');
	_price.className = "price";
	_price.innerHTML = "₽ " + price;
	const a = document.createElement('a');
	a.href = "#";
	a.innerHTML = "ADD TO BAG"; 
	a.className = "button";
	productList.appendChild(description);
	productList.appendChild(_price);
	productList.appendChild(a);

	productItem.appendChild(img);
	productItem.appendChild(productList);

	return productItem;
}

function updatePath(item, count, nthpage) {
	clearBox('path');
	clearBox('center');
	const hp = document.createElement('span');
	hp.innerHTML = "Home Page";
	const catalog = document.createElement('span');
	catalog.innerHTML = " / Catalog";
	const child = document.createElement('span');
	child.innerHTML = " / " + item.parentElement.parentElement.parentElement
	.firstElementChild.textContent + " / " + item.textContent;
	path.appendChild(hp);
	path.appendChild(catalog);
	path.appendChild(child);

	for (var i = 0; i < (count / 6); i++) {
		let span = document.createElement('span');
		span.className = (i + 1);
		span.textContent = (i + 1);
		if (i == nthpage) {
			span.classList.add("big");
		}
		center.append(span);
	}

	content.after(center);
}

function openNtnPage(elementID, nthpage) {
	clearBox('content');
	let counter = 0;
	const text = elementID.id;
	data[text].forEach(element => {
		if (counter < (6*nthpage + 6) && counter >= (6 * nthpage)) {
			const productItem = createProductItem(element.name, element.price, element.img);
			content.appendChild(productItem);
		}
		counter++;
	});
	updatePath(elementID, counter, nthpage);
}

document.querySelector('#macbookair').addEventListener('click', function () {
	openNtnPage(macbookair, 0);
	center.addEventListener('click', function(e) {
		if (e.target !== this) {
			const nthpage = parseInt(e.target.className);
			openNtnPage(macbookair, nthpage - 1);
		}
	}, false);
});
document.querySelector('#macbookpro').addEventListener('click', function () {
	openNtnPage(macbookpro, 0);
	center.addEventListener('click', function(e) {
		if (e.target !== this) {
			const nthpage = parseInt(e.target.className);
			openNtnPage(macbookpro, nthpage - 1);
		}
	}, false);
});
document.querySelector('#imac').addEventListener('click', function () {
	openNtnPage(imac, 0);
	center.addEventListener('click', function(e) {
		if (e.target !== this) {
			const nthpage = parseInt(e.target.className);
			openNtnPage(imac, nthpage - 1);
		}
	}, false);
});
document.querySelector('#proxdr').addEventListener('click', function () {
	openNtnPage(proxdr, 0);center.addEventListener('click', function(e) {
		if (e.target !== this) {
			const nthpage = parseInt(e.target.className);
			openNtnPage(proxdr, nthpage - 1);
		}
	}, false);
});
document.querySelector('#ipadair').addEventListener('click', function () {
	openNtnPage(ipadair, 0);center.addEventListener('click', function(e) {
		if (e.target !== this) {
			const nthpage = parseInt(e.target.className);
			openNtnPage(ipadair, nthpage - 1);
		}
	}, false);
});
document.querySelector('#ipadpro').addEventListener('click', function () {
	openNtnPage(ipadpro, 0);center.addEventListener('click', function(e) {
		if (e.target !== this) {
			const nthpage = parseInt(e.target.className);
			openNtnPage(ipadpro, nthpage - 1);
		}
	}, false);
});
document.querySelector('#ipadmini').addEventListener('click', function () {
	openNtnPage(ipadmini, 0);center.addEventListener('click', function(e) {
		if (e.target !== this) {
			const nthpage = parseInt(e.target.className);
			openNtnPage(ipadmini, nthpage - 1);
		}
	}, false);
});
document.querySelector('#ipad').addEventListener('click', function () {
	openNtnPage(ipad, 0);center.addEventListener('click', function(e) {
		if (e.target !== this) {
			const nthpage = parseInt(e.target.className);
			openNtnPage(ipad, nthpage - 1);
		}
	}, false);
});
document.querySelector('#iphone11').addEventListener('click', function () {
	openNtnPage(iphone11, 0);center.addEventListener('click', function(e) {
		if (e.target !== this) {
			const nthpage = parseInt(e.target.className);
			openNtnPage(iphone11, nthpage - 1);
		}
	}, false);
});
document.querySelector('#iphone11pro').addEventListener('click', function () {
	openNtnPage(iphone11pro, 0);center.addEventListener('click', function(e) {
		if (e.target !== this) {
			const nthpage = parseInt(e.target.className);
			openNtnPage(iphone11pro, nthpage - 1);
		}
	}, false);
});
document.querySelector('#iphonex').addEventListener('click', function () {
	openNtnPage(iphonex, 0);center.addEventListener('click', function(e) {
		if (e.target !== this) {
			const nthpage = parseInt(e.target.className);
			openNtnPage(iphonex, nthpage - 1);
		}
	}, false);
});
document.querySelector('#iphonese').addEventListener('click', function () {
	openNtnPage(iphonese, 0);center.addEventListener('click', function(e) {
		if (e.target !== this) {
			const nthpage = parseInt(e.target.className);
			openNtnPage(iphonese, nthpage - 1);
		}
	}, false);
});
document.querySelector('#iphonexr').addEventListener('click', function () {
	openNtnPage(iphonexr, 0);center.addEventListener('click', function(e) {
		if (e.target !== this) {
			const nthpage = parseInt(e.target.className);
			openNtnPage(iphonexr, nthpage - 1);
		}
	}, false);
});
document.querySelector('#aw5').addEventListener('click', function () {
	openNtnPage(aw5, 0);center.addEventListener('click', function(e) {
		if (e.target !== this) {
			const nthpage = parseInt(e.target.className);
			openNtnPage(aw5, nthpage - 1);
		}
	}, false);
});
document.querySelector('#aw3').addEventListener('click', function () {
	openNtnPage(aw3, 0);center.addEventListener('click', function(e) {
		if (e.target !== this) {
			const nthpage = parseInt(e.target.className);
			openNtnPage(aw3, nthpage - 1);
		}
	}, false);
});
document.querySelector('#aws').addEventListener('click', function () {
	openNtnPage(aws, 0);center.addEventListener('click', function(e) {
		if (e.target !== this) {
			const nthpage = parseInt(e.target.className);
			openNtnPage(aws, nthpage - 1);
		}
	}, false);
});
document.querySelector('#awn').addEventListener('click', function () {
	openNtnPage(awn, 0);center.addEventListener('click', function(e) {
		if (e.target !== this) {
			const nthpage = parseInt(e.target.className);
			openNtnPage(awn, nthpage - 1);
		}
	}, false);
});
document.querySelector('#awh').addEventListener('click', function () {
	openNtnPage(awh, 0);center.addEventListener('click', function(e) {
		if (e.target !== this) {
			const nthpage = parseInt(e.target.className);
			openNtnPage(awh, nthpage - 1);
		}
	}, false);
});
document.querySelector('#awe').addEventListener('click', function () {
	openNtnPage(awe, 0);center.addEventListener('click', function(e) {
		if (e.target !== this) {
			const nthpage = parseInt(e.target.className);
			openNtnPage(awe, nthpage - 1);
		}
	}, false);
});
document.querySelector('#tvplus').addEventListener('click', function () {
	openNtnPage(tvplus, 0);center.addEventListener('click', function(e) {
		if (e.target !== this) {
			const nthpage = parseInt(e.target.className);
			openNtnPage(tvplus, nthpage - 1);
		}
	}, false);
});
document.querySelector('#tvapp').addEventListener('click', function () {
	openNtnPage(tvapp, 0);center.addEventListener('click', function(e) {
		if (e.target !== this) {
			const nthpage = parseInt(e.target.className);
			openNtnPage(tvapp, nthpage - 1);
		}
	}, false);
});
document.querySelector('#tv4k').addEventListener('click', function () {
	openNtnPage(tv4k, 0);center.addEventListener('click', function(e) {
		if (e.target !== this) {
			const nthpage = parseInt(e.target.className);
			openNtnPage(tv4k, nthpage - 1);
		}
	}, false);
});
document.querySelector('#tvhd').addEventListener('click', function () {
	openNtnPage(tvhd, 0);center.addEventListener('click', function(e) {
		if (e.target !== this) {
			const nthpage = parseInt(e.target.className);
			openNtnPage(tvhd, nthpage - 1);
		}
	}, false);
});

$('.mac-list').click(function(){
	$('.navigation ul .mac-list-show').toggleClass("show");
	$('.navigation ul .mac-list').toggleClass("choosed");
});
$('.ipad-list').click(function(){
	$('.navigation ul .ipad-list-show').toggleClass("show");
	$('.navigation ul .ipad-list').toggleClass("choosed");
});
$('.iphone-list').click(function(){
	$('.navigation ul .iphone-list-show').toggleClass("show");
	$('.navigation ul .iphone-list').toggleClass("choosed");
});
$('.watch-list').click(function(){
	$('.navigation ul .watch-list-show').toggleClass("show");
	$('.navigation ul .watch-list').toggleClass("choosed");
});
$('.tv-list').click(function(){
	$('.navigation ul .tv-list-show').toggleClass("show");
	$('.navigation ul .tv-list').toggleClass("choosed");
});