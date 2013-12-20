var estrellas = 0;
var intervalEstrellas;
var layer;
var stage;

/*
  Nombre función:
    estrella(l, s)
  Entradas:
    l -> donde vamos a dibujar 
         (objeto) Kinetic.Layer()
    s -> Lienzo donde se ponen los layer
         (objeto) Kinetic.Stage()
  Salidas:
    - no data -
  Descripción:
    Se va llamando a la función de crear estrellas hasta que se haga el cupo, una vez llegado al cupo se limpia el intervalo
*/

function estrella(l, s)
{
  layer = l;
  stage = s;
  if(estrellas < 15)
  {
    createStars()
	}
  else
  {
    animPapanoel(layer, stage);
    letrasAnim(layer, stage);
    clearInterval(intervalEstrellas);
  }
}

/*
  Nombre función:
    createStars()
  Entradas:
    - no data - 
  Salidas:
    - no data -
  Descripción:
    Se crea, instera y anima la estrella
*/
function createStars()
{
  var posX = Math.floor((Math.random()*985)+20);
  var posY = Math.floor((Math.random()*350)+20);
  var puntas = Math.floor((Math.random()*7)+5);
  var star = new Kinetic.Star({
    x: posX,
    y: posY,
    numPoints: puntas,
    innerRadius: 5,
    outerRadius: 10,
    fill: 'yellow',
    stroke: 'yellow',
    strokeWidth: 0
  });

// add the shape to the layer
  layer.add(star);
// add the layer to the stage
  stage.add(layer);

  var period = 3000;

  var anim = new Kinetic.Animation(function(frame) {
  var scale = Math.sin(frame.time * 2 * Math.PI / period) + 0.0001;
    star.setScale(scale);
  }, layer);

  anim.start();

  estrellas++;
}