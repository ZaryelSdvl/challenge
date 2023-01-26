 
       //declaras las cosas que tienes en el html
       var mensajeDeentrada = document.querySelector("#palabra");
       var botonencriptar = document.querySelector("#cambio");
   
       var mensajeResultado = document.querySelector("#mostrar");
       var botondesencriptar = document.querySelector("#convertirnormal");

       var copi = document.querySelector("#copiar");
   
       
       //realizas la funcion de la encriptacion
       function Encriptar(){
            palabra = mensajeDeentrada.value
           var encriptacion = palabra.
           replaceAll("e","enter")
           .replaceAll("i","imes")
           .replaceAll("a","ai")
           .replaceAll("o","ober")
           .replaceAll("u","ufat");
   
           mensajeResultado.value = encriptacion;
   
       }
       function Desencriptar(){
           var  palabra = mensajeResultado.value
           var encriptacion = palabra.
           replaceAll("enter","e")
           .replaceAll("imes","i")
           .replaceAll("ai","a")
           .replaceAll("ober","o")
           .replaceAll("ufat","u");
   
           mensajeResultado.value = encriptacion;
           mensajeDeentrada.value  ="";
       }
       function Desencriptar2(){
        var  palabra = mensajeDeentrada.value
        var encriptacion = palabra.
        replaceAll("enter","e")
        .replaceAll("imes","i")
        .replaceAll("ai","a")
        .replaceAll("ober","o")
        .replaceAll("ufat","u");

        mensajeResultado.value = encriptacion;
        mensajeDeentrada.value  ="";
    }

       function copiar(){
        
       /* var mensajeencriptado=mensajeResultado.value;
        navigator.clipboard.writeText(mensajeencriptado);
        */
       var menseje_encriptado = mensajeResultado;
       menseje_encriptado.select();
       document.execCommand("copy");
    }
   
   
   botonencriptar.onclick =Encriptar; 
   botondesencriptar.onclick = Desencriptar;
   botondesencriptar.onclick = Desencriptar2;
   copi.onclick = copiar;
   //    <header>
   //<h1><img src="imagenes/Logo.png" alt=""></h1>
   //</header>