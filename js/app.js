let nombre = document.getElementById("nombre")
let telefono= document.getElementById("telefono")
let correo = document.getElementById("correo")
let mensaje = document.getElementById("menasaje")
let botonEnviar = document.getElementById("btnEnviar")
function vaciar(){
  document.getElementById("nombre").value=""
  document.getElementById("telefono").value=""
   document.getElementById("correo").value=""
   
}

botonEnviar.addEventListener("click",()=>{
  if (nombre.value != "" && correo.value != "" && telefono.value != "" ){
  Swal.fire(
     `Perfecto!! ${nombre.value}` ,
    `Completaste con exito el envio de datos, recibiras todas nuestras novedades al Correo: ${correo.value} `,
    'success',
   
  
  )}
  else{
    Swal.fire({
      icon: 'error',
      title: 'Ups.. algo salio mal',
      text: 'Faltan datos por ingresar, por favor revisa el formulario',
     
    })
  }

})
