var htmldomtooltip = document.createElement("div");
htmldomtooltip.style = "font-size: 120%; padding: 5px; background-color: darkslategray; opacity: 0.9; color: white; position: fixed; left: 0px; top: 0px; font-family: monospace; display: inline-block";
document.body.appendChild(htmldomtooltip);
var mousex = 0;
var mousey = 0;
document.addEventListener("mousemove", () => {
	mousex = event.clientX;
	mousey = event.clientY;
});
var htmldomtooltipx = 0;
var htmldomtooltipy = 0;
var htmldomtooltipinterval = setInterval(function() {
	htmldomtooltipx = mousex;
	htmldomtooltipy = mousey;
	elementMouseIsOver = document.elementFromPoint(htmldomtooltipx, htmldomtooltipy);
	htmldomtooltip.innerHTML = elementMouseIsOver;
	htmldomtooltip.style.top = (mousey+10) + "px";
	htmldomtooltip.style.left = (mousex+10) + "px";
}, 10);
