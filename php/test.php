<!DOCTYPE html>
<html>
    <head>
        <title>Arc tournant</title>
        <meta charset="UTF-8">   
    </head>
    <body>
        <canvas id="canvas" width="450" height="450">
            <p> votre navigateur ne supporte pas Canvas. Mettez-le à jour</p>
        </canvas>
        <script type="text/javascript">
            var mainCanvas = document.querySelector('#canvas');
            var mainContext = canvas.getContext('2d');
            var radius = 175;
            var theta = 0;  //angle de rotation en radian
            var canvasWidth = mainCanvas.width;
	    var canvasHeight = mainCanvas.height;
            var pi=Math.PI;
 
         function drawCircle() {
 
			mainContext.clearRect(0, 0, canvasWidth, canvasHeight);
			
                        mainContext.save();//avant modif de translation et de rotation
			// draw the circle
			mainContext.translate(225,225);//pour que la rotation se fasse sur le centre du canvas 
                        mainContext.rotate(theta);
			mainContext.beginPath();
 
			mainContext.arc(0,0, radius,0,pi * 1.9, false);
			mainContext.fillStyle = "white";
			mainContext.fill();
			mainContext.strokeStyle="#FF0000";
			mainContext.stroke();
            mainContext.restore();  //on restitue l'état du dernier contexte sans translation ni rotation pour redessiner le fond     
	}
 
            function render()
            {
                drawCircle();
                window.requestAnimationFrame(render);
                theta+=pi/180;
            }
 
            render();
 
            window.requestAnimFrame =
                    window.requestAnimationFrame || // La fonction standard
                    window.webkitRequestAnimationFrame || // Chrome et Safari.
                    window.mozRequestAnimationFrame || //  Firefox.
                    window.ORequestAnimationFrame || //  Opera.
                    window.msRequestAnimationFrame; // Internet Explorer. 
        </script>
    </body>
</html>