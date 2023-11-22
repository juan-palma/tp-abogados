
function iniciar() {
	
	function btnMobileActive(e) {
		this.classList.toggle('activo');
	}
	const btnMobile = document.getElementById('menuBoxMobile');
	btnMobile.addEventListener('click', btnMobileActive);

}

//codigo para avtivar el correo
function openMailer(element) {
	const mail = atob("bWFpbHRvOnZlbnRhc0BhbWF0aXN0YS1lbnZhc2VzLmNvbQ==");
	element.setAttribute("href", mail);
	element.setAttribute("onclick", "");
};







// iniciar la solicitud de los modulos y la ejecucion inicial del sistema.
//importamos los archivos y librerias necesarios
requirejs.config({
	baseUrl: "assets/js/owner",
	paths: { a: "../animaciones", l: "../librerias", n: "/node_modules"},
});
requirejs(["l/modernizr", "l/precarga", "validaciones", "alertas", "peticiones", "l/brands.min", "l/solid.min", "l/fontawesome"], iniciar);

