window.onload = function(){
	var canvas = document.getElementById("canvas"),
	    context = canvas.getContext("2d"),
	    width = canvas.width = window.innerWidth,
	    height = canvas.height = window.innerHeight,

	    centerX = width / 2,
	    centerY = height / 2,
	    radius = 200,
	    angle  = 0,
	    /*xradius = 200,
	    yradius = 400, 
        xspeed  = 0.01,
        yspeed  = 0.03,
        xangle  = 0,
        yangle  = 0,*/
        x, y ;

        var numObject = 20, 
        slice = 2* Math.PI/numObject;

        context.clearRect(0,0, width, height);
        for(var i = 0; i < numObject; i += 1){
        	angle = i * slice ;
        	x = centerX +  Math.cos(angle) * radius;
        	y = centerY +  Math.sin(angle) * radius;
        	        	
        	context.beginPath();
           	context.arc(x,y, 10, 0, Math.PI * 2, false);
        	context.fill();
        }

       /* render();

        function render(){
        	context.clearRect(0,0, width, height);
        	x = centerX +  Math.cos(xangle) * xradius;
        	y = centerY +  Math.sin(yangle) * yradius;
        	context.beginPath();
        	//context.arc(centerX,centerY, radius, 0, Math.PI * angle/180 , false);
        	//context.strokeStyle="green"; // Green path
            context.moveTo(centerX,centerY);
            context.lineTo(x,y);
            context.stroke(); // Draw it
        	
        	//contex.beginPath();
        	context.moveTo(x,y);
        	context.arc(x,y, 10, 0, Math.PI * 2, false);
        	context.fill();
        	

        	xangle += xspeed;
        	yangle += yspeed;
        	requestAnimationFrame(render);
        }
*/


}