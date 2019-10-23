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
    var imgData = ctx.getImageData(0, 0, 300, 300); // Obtengo los datos de la imagen. Es un array con formato r, g, b, a, r, g, b, a, etc
    for (var index = 0; index < imgData.width*imgData.height*4; index+=4) {
		// If its all red, tint to the color
		const pixred = imgData.data[index]
		const pixgreen = imgData.data[index + 1]
		const pixblue = imgData.data[index + 2]

		if (pixgreen == 0 && pixblue == 0) {
		   	imgData.data[index] = pixred*red/255;
		    imgData.data[index + 1] = pixred*green/255;
		    imgData.data[index + 2] = pixred*blue/255;
		} else if (pixred == 255 && pixgreen == pixblue) {
			imgData.data[index] = pixred*red/255+pixgreen;
		    imgData.data[index + 1] = pixred*green/255+pixgreen;
		    imgData.data[index + 2] = pixred*blue/255+pixgreen;
		}
	}

  	ctx.putImageData(imgData, 0, 0);
}