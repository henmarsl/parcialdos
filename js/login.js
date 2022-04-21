login=window.localStorage;
function mostrarjs(){
   var usuario=document.getElementById('user').value
   var password=document.getElementById('pass').value
   fetch('../json/login.json')//se inserta la url o lugar del archivo del json (FUNCIONARA COMO CONEXION)
   .then(function(res){//nos traera el resultado
    return res.json()//este retorna para seguir obteniendo datos
   })
 .then(function(data){//traera los datos , el cual seran 3 objetos
   if(usuario=="" || password==""){//si el campo se encuentra vacio le pide que llene
      alert("Ingrese los datos completos")
   }else{
    for(i=0;i<data.length;i++){//recorre el vector
      if(data[i].usuario==usuario && data[i].password==password){//si el usuario registrado es igual al registrado en el campo entonces iniciara a comprobar
         alert("bienvenido señor(a) "+data[i].usuario)
         login.setItem('user',data[i].nombre + "" + data[i].apellido)
         
         window.location='index.html'
         break;
      }
      }
      if(data[i].usuario!=usuario && data[i].password!=password){
         alert("Usuario o contraseña incorrecta")
      }
   }
})
}
