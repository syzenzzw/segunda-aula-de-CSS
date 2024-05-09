let count=1;
document.getelementById("radio1").checked = true;

setInterval(function(){

}, 2000)

function netImage(){
	count++;
	if (count>4) {
		count = 1;

	}

	document.getelementById("radio1").checked = true;
}