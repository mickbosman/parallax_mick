// var images = document.querySelectorAll('img');
// var instance = new simpleParallax(images);
//
var image_1 = document.getElementsByClassName('foto_1');
new simpleParallax(image_1, {
	orientation: 'right',
});

var image = document.getElementsByClassName('foto_2');
new simpleParallax(image, {
	scale: 1.8
});

var image_3 = document.getElementsByClassName('foto_3');
new simpleParallax(image_3, {
		orientation: 'right',
		overflow: true
});

var image_4 = document.getElementsByClassName('foto_4');
new simpleParallax(image_4, {
	orientation: 'left',
			overflow: true
});

var image_5 = document.getElementsByClassName('foto_5');
new simpleParallax(image_5, {
	delay: .1,
	transition: 'cubic-bezier(0,0,0,1)'
});
