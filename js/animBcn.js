var layer;
var stage;

/*
  Nombre función: 
    animBarcelona(l, y)
  Entradas:
     l -> donde vamos a dibujar 
         (objeto) Kinetic.Layer()
     s -> Lienzo donde se ponen los layer
         (objeto) Kinetic.Stage()
  Salidas:
   - no data -
  Descripción:
    Se crea un objeto Kinetic.Group() donde introduciremos todas las luces que adornan la ciudad de barcelona
    de esta manera ahorraremos recursos al animarlo todo a la vez
*/
function animBarcelona(l, s)
{
	layer = l;
	stage = s;
	var bcn = new Kinetic.Group({
		x: 0,
		y: 0
	});
	var torres = animTorres();
	var agbar = animAgbar();
	var collserola = animCollserola();
	for(var i = 0; i < torres.length; i++)
	{
		bcn.add(torres[i]);
	}
	for(var i = 0; i < agbar.length; i++)
	{
		bcn.add(agbar[i]);
	}
	for(var i = 0; i < collserola.length; i++)
	{
		bcn.add(collserola[i]);
	}
	bcn.add(animHotel());
	bcn.add(animCalatrava());

	var opacidad = false;

	var anim = new Kinetic.Animation(function(frame) {
		if(opacidad == false)
		{
			bcn.setOpacity(bcn.getOpacity() - 0.01);
			if(bcn.getOpacity() <= 0)
			{
				bcn.setOpacity(0);
				opacidad = true;
			}
		}
		else
		{
			bcn.setOpacity(bcn.getOpacity() + 0.01);
			if(bcn.getOpacity() >= 1)
			{
				bcn.setOpacity(1);
				opacidad = false;
			}
		}
      }, layer);

	layer.add(bcn); 
	stage.add(layer);
	anim.start();
}

function animCollserola()
{
	var circle1 = new Kinetic.Circle({
        x: 836,
        y: 400,
        radius: 2,
        fill: 'red'
      });

    var circle2 = new Kinetic.Circle({
        x: 836,
        y: 410,
        radius: 2,
        fill: '#58ACFA'
      }); 

    return new Array(circle1, circle2);
}

function animHotel()
{
	var simpleText = new Kinetic.Text({
        x: 100,
        y: 520,
        text: 'W',
        fontSize: 10,
        fontFamily: 'Calibri',
        fill: 'white'
     });
	return simpleText;
}

function animCalatrava()
{
	var circle = new Kinetic.Circle({
        x: 471,
        y: 490,
        radius: 2,
        fill: 'red'
      });

	return circle;
}

function animTorres()
{
	var circle1 = new Kinetic.Circle({
        x: 160,
        y: 470,
        radius: 2,
        fill: 'red'
      });

    var circle2 = new Kinetic.Circle({
        x: 181,
        y: 470,
        radius: 2,
        fill: 'red'
      }); 

      var circle3 = new Kinetic.Circle({
        x: 215,
        y: 467,
        radius: 2,
        fill: 'red'
      }); 

      var circle4 = new Kinetic.Circle({
        x: 229,
        y: 467,
        radius: 2,
        fill: 'red'
      });

      return new Array(circle1, circle2, circle3, circle4);
}

function animAgbar()
{
	var circle1 = new Kinetic.Circle({
        x: 285,
        y: 450,
        radius: 2,
        fill: 'red'
      });

    var circle2 = new Kinetic.Circle({
        x: 290,
        y: 465,
        radius: 3,
        fill: '#58ACFA'
      }); 

      var circle3 = new Kinetic.Circle({
        x: 275,
        y: 500,
        radius: 3,
        fill: '#DF7401'
      }); 

      var circle4 = new Kinetic.Circle({
        x: 273,
        y: 530,
        radius: 3,
        fill: '#FF0040'
      });

      var circle5 = new Kinetic.Circle({
        x: 297,
        y: 552,
        radius: 3,
        fill: '#D8F781'
      });

      var circle6 = new Kinetic.Circle({
        x: 290,
        y: 510,
        radius: 3,
        fill: '#86B404'
      });

      return new Array(circle1, circle2, circle3, circle4, circle5, circle6);
}