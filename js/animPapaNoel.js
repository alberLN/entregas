var layer;
var stage;
var animLeft;
var animRight;

/*
	Nombre función: 
		animPapanoel(l, s)
	Entradas:
		l -> donde vamos a dibujar 
				 (objeto) Kinetic.Layer()
		s -> Lienzo donde se ponen los layer
				 (objeto) Kinetic.Stage()
	Salidas:
		- no data -
	Descripción:
		Inicializa todas la variables que vamos a usar para las animaciones del señor santa
*/
function animPapanoel(l, s)
{
	layer = l;
	stage = s;
	papanoelLR();
	papanoelRL();
}

/*
	Nombre función: 
		papanoelLR()
	Entradas:
		- no data -
	Salidas:
		- no data -
	Descripción:
		Crea, anima e introduce un papa noel, que irá de izquierda a derecha
*/
function papanoelLR()
{
	var noelLeft = new Image();
	var posY;
	var tempPosY = 300;
	var subirBajar;
	noelLeft.onload = function(){
		var left = new Kinetic.Image({
			x: -200,
			y: 300,
			image:noelLeft,
			width: 200,
			height: 130,
		});
		layer.add(left);
		stage.add(layer);

		animLeft = new Kinetic.Animation(function(frame) 
		{
			left.setX(left.getX() + 4);
			if(!subirBajar)
			{
				left.setY(left.getY() - 0.5);
				if((tempPosY - 5) >= left.getY())
				{
					subirBajar = true;
				}
			}
			else
			{
				left.setY(left.getY() + 0.5);
				if((tempPosY + 5) <= left.getY())
				{
					subirBajar = false;
				}
			}

			if(left.getX() >= 1000)
			{
				left.setWidth(100);
				left.setHeight(50);
				posY = tempPosY = getRandomY(posY);
				left.setY(posY);
				animLeft.stop();
				left.setX(-100);
				animRight.start();
			}
		}, layer);
		animLeft.start();
	}
	noelLeft.src = "img/santaR.png";
}

/*
	Nombre función: 
		papanoelRL()
	Entradas:
		- no data -
	Salidas:
		- no data -
	Descripción:
		Crea, anima e introduce un papa noel, que irá de dercha a izquierda
*/
function papanoelRL()
{
	var noelLeft = new Image();
	var posY;
	var tempPosY = 20;
	var subirBajar = false;
	noelLeft.onload = function(){
		var right = new Kinetic.Image({
			x: 1000,
			y: 20,
			image:noelLeft,
			width: 100,
			height: 50,
		});

		layer.add(right);
		stage.add(layer);

		animRight = new Kinetic.Animation(function(frame) 
		{
			right.setX(right.getX() - 4);
			if(!subirBajar)
			{
				right.setY(right.getY() - 0.5);
				if((tempPosY - 5) >= right.getY())
				{
					subirBajar = true;
				}
			}
			else
			{
				right.setY(right.getY() + 0.5);
				if((tempPosY + 5) <= right.getY())
				{
					subirBajar = false;
				}
			}

			if(right.getX() + 100 <= 0)
			{
				posY = tempPosY = getRandomY(posY);
				right.setY(posY);
				animRight.stop();
				right.setX(1000);
				animLeft.start();
			}
		}, layer);
	}
	noelLeft.src = "img/santaL.png";
}

/*
	Nombre función: 
		getRandomY(posY)
	Entradas:
		posY -> posición Y actual del imágen
			 -> number
	Salidas:
		auxPosY -> posición y nueva para la imágen
	Descripción:
		La animación nos da la posición actual de la imágen, se hará un random y se retornara una nueva posición
*/
function getRandomY(posY)
{
	var auxPosY = posY;
	while(posY == auxPosY)//se hace un bucle para que no se repita el numero puesto que no existe el randomize en javascript
	{
		auxPosY = Math.floor((Math.random()*450)+20);
	}
	return auxPosY;
}