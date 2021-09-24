var usuario = document.getElementById("user");
var contraseña = document.getElementById("password");
var boton = document.getElementById("boton");
var usuarioNombre = usuario.value
boton.addEventListener("click", () => {
  if (validarUsuario(usuario) && validarPassword(password)) {
    window.location.href = "./paginaPrincipal/paginaPrincipal.html";
  }
});

function validarUsuario(usuario) {
  var salida = true;
  var reg = new RegExp("^[0-9]+$");
  if (!reg.test(usuario.value)) {
    alert("El usuario debe ser solo numeros.");
    salida = false;
  }
  return salida;
}

function validarPassword(password) {
  var salida = true;
  if (password.value.length < 4) {
    alert("La contraseña debe tener al menos 4 caracteres.");
    salida = false;
  }
  return salida;
}
