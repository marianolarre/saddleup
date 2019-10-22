var colores = [
    "#d00000", // rojo
    "#3f6be1", // azul
    "#3fc741", // verde
    "#78c9e1", // celeste
    "#eaeaea", // blanco
    "#f2de13", // amarillo
    "#ee9f27", // naranja
    "#8b6325"  // marron
]

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function pintarCaballo(indiceColor) {
	var color = hexToRgb(colores[indiceColor])
    dibujarCaballo(color.r, color.g, color.b)
}

function dibujarCaballo(red,green,blue) {
	ctx.drawImage(img,0,0) // Dibujo la imagen original al canvas
    var imgData = ctx.getImageData(10, 10, 50, 50); // Obtengo los datos de la imagen. Es un array con formato r, g, b, a, r, g, b, a, etc
  	
    for (var index = 0; index < image.width*image.height*4; index+=4) {
		// If its all red, tint to the color
		const pixred = image.pixels[index]
		const pixgreen = image.pixels[index + 1]
		const pixblue = image.pixels[index + 2]

		if (pixgreen == 0 && pixblue == 0) {
		   	image.pixels[index] = pixred*red/255;
		    image.pixels[index + 1] = pixred*green/255;
		    image.pixels[index + 2] = pixred*blue/255;
		} else if (pixred == 255 && pixgreen == pixblue) {
			image.pixels[index] = pixred*red/255+pixgreen;
		    image.pixels[index + 1] = pixred*green/255+pixgreen;
		    image.pixels[index + 2] = pixred*blue/255+pixgreen;
		}
	}

  	ctx.putImageData(imgData, 10, 70);
}