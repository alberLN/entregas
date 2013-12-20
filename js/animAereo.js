/*
	Nombre función: 
		animAereo(layer, scene)
	Entradas:
		layer -> donde vamos a dibujar 
				 (objeto) Kinetic.Layer()
		scene-> Lienzo donde se ponen los layer
				 (objeto) Kinetic.Stage()
	Salidas:
		- no data -
	Descripción:
		Creación y animación del arero de barcelona
*/
function animAereo(layer, scene)
{
	var img = new Image();
	img.onload = function(){
		var aereo = new Kinetic.Image({
			x: 402,
			y: 479,
			image:img,
			width: 10,
			height: 10
		});
		layer.add(aereo);
		scene.add(layer);

		var limitX = aereo.getX();
		var move = false;
		var pause = 0;

		var anim = new Kinetic.Animation(function(frame) 
		{
			if(move)
			{	
				if(aereo.getX() <= 630)
				{
					aereo.setX(aereo.getX() + 0.6);
					aereo.setY(aereo.getY() - 0.11);
				}
				else
				{
					if(pause >= 10)
					{
						pause = 0;
						move = false;
					}
					else
					{
						pause = pause + 0.2;
					}
				}
			}
			else
			{
				if(aereo.getX() >= limitX)
				{
					aereo.setX(aereo.getX() - 0.6);
					aereo.setY(aereo.getY() + 0.11);
				}
				else
				{
					if(pause >= 10)
					{
						pause = 0;
						move = true;
					}
					else
					{
						pause = pause + 0.2;
					}
				}
			}
			
		}, layer);

		anim.start();
	}
	img.src = "img/aereo.png";
}