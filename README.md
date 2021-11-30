# skool-hax
bookmarklets to do in google. use them by making a bookmark and setting the url to the text in the files. if you want do use them in firefox then you have to put
```
javascript:(function(){<CODE>})();
```
instead of
```
javascript:<CODE>;
```
## autoclicker
hold down click for 100 cps. it cant be disabled without reloading.
### bookmarklet code:
```
javascript:var clickerCurrentMouseTarget = document.body;document.body.addEventListener('mouseup', () => {clickerIsMouseDown = false});document.body.addEventListener('mousedown', () => {clickerIsMouseDown = true;});document.body.addEventListener('mousemove', (e) => {clickerCurrentMouseTarget = e.target});setInterval(() => {if (clickerIsMouseDown) clickerCurrentMouseTarget.click()}, 0);
```
## developer console
like inspect element. can be used to run javascript.
### bookmarklet code
```
javascript:var x = document.createElement("script"); x.src = "https://cdn.jsdelivr.net/gh/SnowLord7/devconsole@master/main.js"; x.onload = alert("Loaded Developer Console!"); document.head.appendChild(x);
```
##
