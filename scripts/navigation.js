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



document.querySelector('#macbookair').addEventListener('click', function (e) {
	console.log(data.macbookair[0].name);
});