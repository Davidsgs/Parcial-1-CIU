var boton = document.getElementById("logOut");
document.getElementById("bienvenidoUsuario").innerHTML = `Hola ${localStorage.getItem('nombre')}, bienvenido!`;
localStorage.removeItem('nombre');
boton.addEventListener("click",() => {
    window.location.href = "../index.html";
    console.log("HOLAAA");
});