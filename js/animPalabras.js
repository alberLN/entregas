/*
	Nombre función: 
		letrasAnim(layer, stage);
	Entradas:
		Layer -> donde vamos a dibujar 
				 (objeto) Kinetic.Layer()
		stage -> Lienzo donde se ponen los layer
				 (objeto) Kinetic.Stage()
	Salidas:
		- no data -
	Descripción:
		Creación y animación las felicitaciones navideñas
*/

function letrasAnim(layer, stage)
{
	var group = new Kinetic.Group({
		x: 0,
		y: 0
	});
	
	var text2 = new Kinetic.Text({
		x: 200,
		y: 180,
		text: "DAW2A us desitja un",
		fontSize: 0,
        fontFamily: 'Ruge Boogie',
        fill: '#FFBF00',
        stroke: 'white',
        strokeWidth: 1
	});
	
	var texto = new Kinetic.Text({
        x: 50,
        y: 300,
        text: 'Bon Nadal i Feliç Any Nou!!!',
        fontSize: 0,
        fontFamily: 'Ruge Boogie',
        fill: '#FFBF00',
        stroke: 'white',
        strokeWidth: 1
    });

    group.add(text2);
    group.add(texto);
	layer.add(group);
	stage.add(layer);

	var scale;
	var anim = new Kinetic.Animation(function(frame) {
		if(texto.getFontSize() <= 90)
		{
			text2.setFontSize(text2.getFontSize() + 1);
    		texto.setFontSize(texto.getFontSize() + 1);
    	}
    	else
    	{
    		 anim.stop();
    	}
    }, layer);
    anim.start();
}