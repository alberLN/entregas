var click = false;
/*
	Nombre función: 
		eventMusic(layer, stage);
	Entradas:
		Layer -> donde vamos a dibujar 
				 (objeto) Kinetic.Layer()
		stage -> Lienzo donde se ponen los layer
				 (objeto) Kinetic.Stage()
	Salidas:
		- no data -
	Descripción:
		Añade las imágenes de altavoz, a parte de que se añade una evento para parar la música por
		si el usuario quiere parar o no la misma
*/
function eventMusic(layer, stage)
{
	var music = new Array();
	music = document.getElementsByTagName("audio");
	var imageAltavoz = new Image();
	imageAltavoz.onload = function(){
		var altavoz = new Kinetic.Image({
			x: 850,
			y: 540,
			image:imageAltavoz,
			width: 30,
			height: 30
		});

		altavoz.on('click', function(evt) {
			
			if(click)
			{
				imageAltavoz.src = "img/altavozOn.png";
				music[0].play();
				click = false;
			}
			else
			{
				imageAltavoz.src = "img/altavozOff.png";
				music[0].pause();
				click = true;
			}
        	
        	altavoz.setImage(imageAltavoz);
        	evt.cancelBubble = true;
      	});

		altavoz.on('mouseover', function() {
          document.body.style.cursor = "hand";
        });
		
		altavoz.on('mouseout', function() {
          document.body.style.cursor = "default";
        });

		layer.add(altavoz);
		stage.add(layer);
	};
	imageAltavoz.src = "img/altavozOn.png";
}