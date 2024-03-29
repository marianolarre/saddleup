var colores = [
    {
    	nombre: "Rojo",
   		hex: "#d00000",
   		precio: 110
    },
    {
    	nombre: "Azul",
   		hex: "#3f6be1",
   		precio: 120
    },
    {
    	nombre: "Verde",
   		hex: "#3fc741",
   		precio: 130
    },
    {
    	nombre: "Celeste",
   		hex: "#78c9e1",
   		precio: 140
    },
    {
    	nombre: "Blanco",
   		hex: "#eaeaea",
   		precio: 150
    },
    {
    	nombre: "Amarillo",
   		hex: "#f2de13",
   		precio: 160
    },
    {
    	nombre: "Naranja",
   		hex: "#ee9f27",
   		precio: 170
    },
    {
    	nombre: "Marron",
   		hex: "#8b6325",
   		precio: 500
    }
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
  console.log(indiceColor);
	var color = hexToRgb(colores[indiceColor].hex)
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