$(document).ready(onLoad);

function onLoad() {
    var stats = new Stats();
    document.body.appendChild( stats.domElement );
	stats.domElement.style.position = "absolute";
    stats.domElement.style.top = "0px";
    
    requestAnimationFrame(function loop() {
        stats.update();
        requestAnimationFrame(loop)
    });

}