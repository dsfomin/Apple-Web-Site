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

function clearBox(elementID) {document.getElementById(elementID).innerHTML = "";}

function createProductItem(name, price) {
	var productItem = document.createElement('div');
	productItem.className = "product-item";
	var img = document.createElement('img');
	img.src = "data:image/png;base64,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";
	var productList = document.createElement('div');
	productList.className = "product-list";
	var description = document.createElement('h3');
	description.innerHTML = name;
	var _price = document.createElement('span');
	_price.className = "price";
	_price.innerHTML = "₽ " + price;
	var a = document.createElement('a');
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

document.querySelector('#macbookair').addEventListener('click', function () {
	clearBox('content');
	data['macbookair'].forEach(element => {
		const productItem = createProductItem(element.name, element.price);
		content.appendChild(productItem);
	});
});
document.querySelector('#macbookpro').addEventListener('click', function () {
	clearBox('content');
	data['macbookpro'].forEach(element => {
		const productItem = createProductItem(element.name, element.price);
		content.appendChild(productItem);
	});
});
document.querySelector('#imac').addEventListener('click', function () {
	clearBox('content');
	data['imac'].forEach(element => {
		const productItem = createProductItem(element.name, element.price);
		content.appendChild(productItem);
	});
});
document.querySelector('#proxdr').addEventListener('click', function () {
	clearBox('content');
	data['proxdr'].forEach(element => {
		const productItem = createProductItem(element.name, element.price);
		content.appendChild(productItem);
	});
});
document.querySelector('#ipadair').addEventListener('click', function () {
	clearBox('content');
	data['ipadair'].forEach(element => {
		const productItem = createProductItem(element.name, element.price);
		content.appendChild(productItem);
	});
});
document.querySelector('#ipadpro').addEventListener('click', function () {
	clearBox('content');
	data['ipadpro'].forEach(element => {
		const productItem = createProductItem(element.name, element.price);
		content.appendChild(productItem);
	});
});
document.querySelector('#ipadmini').addEventListener('click', function () {
	clearBox('content');
	data['ipadmini'].forEach(element => {
		const productItem = createProductItem(element.name, element.price);
		content.appendChild(productItem);
	});
});
document.querySelector('#ipad').addEventListener('click', function () {
	clearBox('content');
	data['ipad'].forEach(element => {
		const productItem = createProductItem(element.name, element.price);
		content.appendChild(productItem);
	});
});
document.querySelector('#iphone11').addEventListener('click', function () {
	clearBox('content');
	data['iphone11'].forEach(element => {
		const productItem = createProductItem(element.name, element.price);
		content.appendChild(productItem);
	});
});
document.querySelector('#iphone11pro').addEventListener('click', function () {
	clearBox('content');
	data['iphone11pro'].forEach(element => {
		const productItem = createProductItem(element.name, element.price);
		content.appendChild(productItem);
	});
});
document.querySelector('#iphonex').addEventListener('click', function () {
	clearBox('content');
	data['iphonex'].forEach(element => {
		const productItem = createProductItem(element.name, element.price);
		content.appendChild(productItem);
	});
});
document.querySelector('#iphonese').addEventListener('click', function () {
	clearBox('content');
	data['iphonese'].forEach(element => {
		const productItem = createProductItem(element.name, element.price);
		content.appendChild(productItem);
	});
});
document.querySelector('#iphonexr').addEventListener('click', function () {
	clearBox('content');
	data['iphonexr'].forEach(element => {
		const productItem = createProductItem(element.name, element.price);
		content.appendChild(productItem);
	});
});
document.querySelector('#aw5').addEventListener('click', function () {
	clearBox('content');
	data['aw5'].forEach(element => {
		const productItem = createProductItem(element.name, element.price);
		content.appendChild(productItem);
	});
});
document.querySelector('#aw3').addEventListener('click', function () {
	clearBox('content');
	data['aw3'].forEach(element => {
		const productItem = createProductItem(element.name, element.price);
		content.appendChild(productItem);
	});
});
document.querySelector('#aws').addEventListener('click', function () {
	clearBox('content');
	data['aws'].forEach(element => {
		const productItem = createProductItem(element.name, element.price);
		content.appendChild(productItem);
	});
});
document.querySelector('#awn').addEventListener('click', function () {
	clearBox('content');
	data['awn'].forEach(element => {
		const productItem = createProductItem(element.name, element.price);
		content.appendChild(productItem);
	});
});
document.querySelector('#awh').addEventListener('click', function () {
	clearBox('content');
	data['awh'].forEach(element => {
		const productItem = createProductItem(element.name, element.price);
		content.appendChild(productItem);
	});
});
document.querySelector('#awe').addEventListener('click', function () {
	clearBox('content');
	data['awe'].forEach(element => {
		const productItem = createProductItem(element.name, element.price);
		content.appendChild(productItem);
	});
});
document.querySelector('#tvplus').addEventListener('click', function () {
	clearBox('content');
	data['tvplus'].forEach(element => {
		const productItem = createProductItem(element.name, element.price);
		content.appendChild(productItem);
	});
});
document.querySelector('#tvapp').addEventListener('click', function () {
	clearBox('content');
	data['tvapp'].forEach(element => {
		const productItem = createProductItem(element.name, element.price);
		content.appendChild(productItem);
	});
});
document.querySelector('#tv4k').addEventListener('click', function () {
	clearBox('content');
	data['tv4k'].forEach(element => {
		const productItem = createProductItem(element.name, element.price);
		content.appendChild(productItem);
	});
});
document.querySelector('#tvhd').addEventListener('click', function () {
	clearBox('content');
	data['tvhd'].forEach(element => {
		const productItem = createProductItem(element.name, element.price);
		content.appendChild(productItem);
	});
});