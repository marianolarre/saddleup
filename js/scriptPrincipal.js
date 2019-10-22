var dinero = 0

// Importante! los cookies solo funcionan online, no local. Si probas esto directamente del archivo en tu computadora, los cookies no se guardan correctamente.

// Si no tengo dinero, lo inicializo en 100
if (Cookies.get('dinero') == null) {
	Cookies.set('dinero', 100)
}