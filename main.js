function loguear(){
    let ye = true
    do {
        let user = prompt("Ingrese el usuario");
        let pass = prompt("Ingrese la contraseña");

        if(user=="coder" && pass=="house"){
            alert("Bienvenido " +user+ " a continuacion tiene las opciones que desee realizar")
            ye = false
        }
        else{
            alert("usuario o contraseña incorrecto")
        }       
    }while(ye)
}

function CambiarPrecio(){
    let ye = true 
    let wos = true
    do{
                let palabra = prompt("¿Que producto busca?").toUpperCase()
                let busqueda = prendas.filter( (x)=>x.nombre.toUpperCase().includes(palabra))

                if(busqueda.length > 0){
                    console.table(busqueda)
                    let prendaid = prompt("Ingrese el id de la prenda a cambiar de precio")

                    switch (prendaid) {
                        case "1":
                            do{
                                prenda1.precio = parseInt(prompt("Ingrese el nuevo precio"))
                                if(isNaN(prenda1.precio)){
                                    alert("Usted no ingreso un precio")
                                }
                                else{
                                    console.table(prenda1)
                                    ye=false
                                    wos=false
                                }
                            }while(wos)
                        break;
                
                        case "2":
                            do{
                                prenda2.precio = parseInt(prompt("Ingrese el nuevo precio"))
                                if(isNaN(prenda2.precio)){
                                    alert("Usted no ingreso un precio")
                                }
                                else{
                                    console.table(prenda2)
                                    ye=false
                                    wos=false
                                }
                            }while(wos)
                        break;
                
                        case "3":
                            do{
                                prenda3.precio = parseInt(prompt("Ingrese el nuevo precio"))
                                if(isNaN(prenda3.precio)){
                                    alert("Usted no ingreso un precio")
                                }
                                else{
                                    console.table(prenda3)
                                    ye=false
                                    wos=false
                                }
                            }while(wos)
                        break;
                
                        case "4":
                            do{
                                prenda4.precio = parseInt(prompt("Ingrese el nuevo precio"))
                                if(isNaN(prenda4.precio)){
                                    alert("Usted no ingreso un precio")
                                }
                                else{
                                    console.table(prenda4)
                                    ye=false
                                    wos=false
                                }
                            }while(wos)
                        break;
                
                        case "5":
                            do{
                                prenda5.precio = parseInt(prompt("Ingrese el nuevo precio"))
                                if(isNaN(prenda5.precio)){
                                    alert("Usted no ingreso un precio")
                                }
                                else{
                                    console.table(prenda5)
                                    ye=false
                                    wos=false
                                }
                            }while(wos)
                        break;
                
                        default:
                            alert("Elija una ID existente")
                        }
                }
                else{
                    alert("no hay resultados para '"+palabra+"'")
                }
    }while(ye)    
}

function CambiarStock(){
    let ye = true 
    let wos = true
    do{
        let palabra = prompt("¿Que producto busca?").toUpperCase()
        let busqueda = prendas.filter( (x)=>x.nombre.toUpperCase().includes(palabra))

        if(busqueda.length > 0){
            console.table(busqueda)
            let prendaid = prompt("Ingrese el id de la prenda a cambiar de stock")

                    switch (prendaid) {
                        case "1":
                            do{
                                let newcant = parseInt(prompt("Ingrese la nueva cantidad de producto"))
                                prenda1.cant = prenda1.cant + newcant
                                if(isNaN(newcant)){
                                    alert("Ingrese producto")
                                }
                                else {
                                    if (newcant <= 0){
                                        alert("Usted robo o no añadio nada")}
                                    else{
                                        console.table(prenda1)
                                        ye=false
                                        wos=false
                                    }
                                }

                            }while(wos)
                        break;
                
                        case "2":
                            do{
                                let newcant = parseInt(prompt("Ingrese la nueva cantidad de producto"))
                                prenda2.cant = prenda2.cant + newcant
                                if(isNaN(newcant)){
                                    alert("Ingrese producto")
                                }
                                else {
                                    if (newcant <= 0){
                                        alert("Usted robo o no añadio nada")}
                                    else{
                                        console.table(prenda2)
                                        ye=false
                                        wos=false
                                    }
                                }

                            }while(wos)
                        break;
                
                        case "3":
                            do{
                                let newcant = parseInt(prompt("Ingrese la nueva cantidad de producto"))
                                prenda3.cant = prenda3.cant + newcant
                                if(isNaN(newcant)){
                                    alert("Ingrese producto")
                                }
                                else {
                                    if (newcant <= 0){
                                        alert("Usted robo o no añadio nada")}
                                    else{
                                        console.table(prenda3)
                                        ye=false
                                        wos=false
                                    }
                                }

                            }while(wos)
                        break;
                
                        case "4":
                            do{
                                let newcant = parseInt(prompt("Ingrese la nueva cantidad de producto"))
                                prenda4.cant = prenda4.cant + newcant
                                if(isNaN(newcant)){
                                    alert("Ingrese producto")
                                }
                                else {
                                    if (newcant <= 0){
                                        alert("Usted robo o no añadio nada")}
                                    else{
                                        console.table(prenda4)
                                        ye=false
                                        wos=false
                                    }
                                }

                            }while(wos)
                        break;
                
                        case "5":
                            do{
                                let newcant = parseInt(prompt("Ingrese la nueva cantidad de producto"))
                                prenda5.cant = prenda5.cant + newcant
                                if(isNaN(newcant)){
                                    alert("Ingrese producto")
                                }
                                else {
                                    if (newcant <= 0){
                                        alert("Usted robo o no añadio nada")}
                                    else{
                                        console.table(prenda5)
                                        ye=false
                                        wos=false
                                    }
                                }

                            }while(wos)
                        break;
                
                        default:
                            alert("Elija una ID existente")
                        }
                }
                else{
                    alert("no hay resultados para '"+palabra+"'")
                }
    }while(ye)    
}

const Prenda = function(id,nombre,precio,marca,cant){
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.marca = marca
    this.cant = cant
}



let prenda1 =  new Prenda(1, "zapatillas negras", 55000, "nike", 2);
let prenda2 =  new Prenda(2, "pantalon cargo", 25000, "Levis", 10);
let prenda3 =  new Prenda(3, "buzo violeta", 12000, "vatra", 5);
let prenda4 =  new Prenda(4, "buzo negro", 12000, "vatra", 7);
let prenda5 =  new Prenda(5, "remera vatra violeta", 5000, "nike", 10);
let prendas = [prenda1, prenda2, prenda3, prenda4, prenda5];

let yay = true

alert("Se promete hacer sistema de login para manejar los productos user = coder // pass = house ");
loguear();


do{
    let rta = prompt("Elija una de las siguientes opciones escribiendo la opcion o la letra: A-Cambiar Precio, B-Reponer Stock, C-salir").toUpperCase()

    switch (rta) {
        case "A":
            CambiarPrecio();
            yay=false
        break;

        case "CAMBIAR PRECIO":
            CambiarPrecio();
            yay=false
        break;

        case "B":
            CambiarStock();
            yay=false
        break;

        case "REPONER STOCK":
            CambiarStock();
            yay=false
        break;

        case "C":
            alert("Chauuu!!!!")
            yay=false
        break;

        case "SALIR":
            alert("Chauuu!!!!")
            yay=false
        break;

        default:
            alert("Elija una de las 3 opciones dadas")
    }
}while(yay)