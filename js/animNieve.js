var bolas = 0;
var intervalNieve;
var layer;
var stage;
/*
	Nombre función: 
		nieve(l, s);
	Entradas:
		l -> donde vamos a dibujar 
				 (objeto) Kinetic.Layer()
		s -> Lienzo donde se ponen los layer
				 (objeto) Kinetic.Stage()
	Salidas:
		- no data -
	Descripción:
		Si no supera el límite establecido irá llamando a la función que crea bolas de nieve, en cuanto se llega al límite de bolas de nieve
		eliminiamos el intervalo que llama a esta función 
*/
function nieve(l, s)
{
	if(bolas < 80)
	{
		layer = l;
		stage = s;
		animNieve();
		bolas++;
	}
	else
	{
		clearInterval(intervalNieve);
	}	
}

/*
	Nombre función: 
		animNieve()
	Entradas:
		- no data -
	Salidas:
		- no data -
	Descripción:
		crea, anima e introduce las bolas de nieve
*/
function animNieve()
{
	var posX = Math.floor((Math.random()*1000)+0);
	var circle = new Kinetic.Circle({
        x: posX,
        y: 0,
        radius: 2,
        fill: 'white'
      });

	
	layer.add(circle);

	stage.add(layer);
	var state = false;
	var contador = 0;
	var anim =  new Kinetic.Animation(function(frame) {
		if(state)
		{
			circle.setX(circle.getX() + 0.5);
			contador++;
			if(contador >= 30)
			{
				state = false;
			}
		}
		else
		{
			circle.setX(circle.getX() - 0.5);
			contador--;
			if(contador <= 0)
			{
				state = true;
			}
		}
		circle.setOpacity(circle.getOpacity() - 0.0007);
		circle.setY(circle.getY() + 0.5);
		if(circle.getY() >= 600)
		{
			circle.setOpacity(1);
			circle.setY(0);
			circle.setX(Math.floor((Math.random()*1000)+0));
		}
	}, layer);

	anim.start();
}