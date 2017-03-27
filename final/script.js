function resize_canvas() {
	canvas = document.getElementById("canvas");
	if (canvas.width < window.innerWidth) {
		canvas.width = window.innerWidth;
	}
	if (canvas.height < window.innerHeight) {
		canvas.height = window.innerHeight;
	}
};
window.onload = function () {
	var c = document.getElementById('imageView');
	var cxt = c.getContext('2d');
	var img = new Image();
	img.src = "map.jpg";
	cxt.drawImage(img, 0, 0);
};

function () {
	document.getElementById('mydivtag').innerHTML = "<li><a href='someLink'>Some Link</a></li>";
}