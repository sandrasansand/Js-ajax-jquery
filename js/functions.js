function objFormulario(nombre, apellidos, dni, telefono, correo, sexo)
{
  this.nombre=nombre;
  this.apellidos=apellidos;
  this.dni=dni;
  this.telefono=telefono;
  this.correo=correo;
  this.sexo=sexo;
}


DATOS = new Array();
posicion =0;

function guardarDatos(f)
{

  if (!validar()) return;

  var sexo;
  if (f.male.checked) sexo="male";
  else sexo="female";

  objeto=new objFormulario(f.nombre.value,f.apellidos.value,f.dni.value,f.telefono.value,f.correo.value,sexo);
  
  posicion=DATOS.push(objeto);
  alert("Se han guardado "+(posicion)+" objetos");
  
}


function siguiente(f)
{
  
  if ((posicion+1)>=DATOS.length)
  {
     alert("No quedan más datos, ya has llegado al final");
  }
  else
  {
     posicion++;
     f.nombre.value=DATOS[posicion].nombre;
     f.apellidos.value=DATOS[posicion].apellidos;
     f.dni.value=DATOS[posicion].dni;
     f.telefono.value=DATOS[posicion].telefono;
     f.correo.value=DATOS[posicion].correo;

     if (DATOS[posicion].sexo=="male") f.male.checked=true
     else f.female.checked=true;
  }
}

function anterior(f)
{
  if (posicion<=0)
  {
     alert("No quedan más datos, ya has llegado al principio");
  }
  else
  {
     posicion--;
     f.nombre.value=DATOS[posicion].nombre;
     f.apellidos.value=DATOS[posicion].apellidos;
     f.dni.value=DATOS[posicion].dni;
     f.telefono.value=DATOS[posicion].telefono;
     f.correo.value=DATOS[posicion].correo;

     if (DATOS[posicion].sexo=="male") f.male.checked=true
     else f.female.checked=true;
  }
}


function completo(campoform)
{
   valor = document.getElementById(campoform).value;
   if (valor ==null || valor.length ==0)
   {
      alert("El campo '"+ campoform  +"' no puede ser vacío");
      return false;
   }
   return true;
}


function validaRadio(v1,v2)
{
   if ((document.getElementById(v1).checked || document.getElementById(v2).checked)==false)
   {
      alert("El campo 'Sexo' no puede ser vacío");
      return false;
   }
   return true;
}


function validaDNI(valor)
{
  valor = document.getElementById("dni").value;
  var letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
  
  if (!(/^\d{8}[A-Z]$/.test(valor)))
  {
     alert("El dni introducido no es válido");
     return false;
  }

  if (valor.charAt(8) != letras[(valor.substring(0,8))%23]) 
  {
     alert("La letra del dni no es correcta");
     return false;
  }

  return true;
}


function validaTelefono(valor)
{
  valor = document.getElementById("telefono").value;
  if (!(/^\d{9}$/.test(valor)))
  {
     alert("El número de teléfono debe tener 9 dígitos");
     return false;
  }
  return true;
}


function validaCorreo(valor)
{
  valor = document.getElementById("correo").value;
  
 
 if (! (/\w+([-\.]\w+)*@\w+([-\.]\w+)*\.\w+([-\.]\w+)*/.test(valor))  )
  {
    alert("El formato de la dirección de e-mail no es correcto");
    return false;
  }
  return true;
}


function validar()
{
  if (!completo("nombre")) return false;
    
  if (!completo("apellidos")) return false;
      
  if (!completo("dni")) return false;
        
  if (!completo("telefono")) return false;
          
  if (!completo("correo")) return false;
            
 // if (!completo("foto")) return false;
            
  
  if(!validaRadio("male","female")) return false;
 
  if(!validaDNI("dni")) return false;
      
  if(!validaTelefono("telefono")) return false;

  if(!validaCorreo("correo")) return false;
        

  return true;
}