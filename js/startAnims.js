/*
  Nombre función:
    start()
  Entradas:
    - no data - 
  Salidas:
    - no data -
  Descripción:
    Inserta los subtitulos del centro a parte de que inicializa todas las animaciones.
*/
function start()
{
	var stage = new Kinetic.Stage({
		container: 'container',
		width: 1000,
		height: 600
	});
	var layer = new Kinetic.Layer();
	intervalEstrellas = setInterval("estrella(layer, stage)", 200);
	intervalNieve = setInterval("nieve(layer, stage)", 500);
	eventMusic(layer, stage);
	animBarcelona(layer, stage);
	animAereo(layer, stage);
	var yearText = new Kinetic.Text({
        x: 700,
        y: 580,
        text: "Centre d'Estudis politécnics 2013 - 2014",
        fontSize: 15,
        fontFamily: 'Calibri',
        fill: '#FFBF00'
    });
    
    layer.add(yearText);
    stage.add(layer)
}