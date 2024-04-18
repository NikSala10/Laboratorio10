const divss = document.querySelector("div")
const section = document.querySelector (".Productos")

let url = 'https://api.escuelajs.co/api/v1/products';
let resultado = null;

let promesa = fetch(url)
    .then(respuesta => respuesta.json())
    .then(datos => {
        resultado = datos;
        console.log('Datos guardados:', resultado);

        console.log('Variable resultado fuera de todo:', resultado);


        //creacion elementos 
      // div = document.createElement("div")
       ///img= document.createElement("img")
      // div_1 = document.createElement("div")
      for (let i=0;Object.keys(resultado).length; i++) {
       div_products = document.createElement("div")
       div_products.classList.add("Subproduct-1")

      // button = document.createElement("input")
    
       //asignacion de caracteristicas
       
       
       div_products.innerHTML = `
       
        <a href="../Detalle/product_detail.html">
            <img src="${resultado[i].images}" alt=""  id="id-img">
        </a>  
        <div>
            <p class="Nombre-producto">${resultado[i].title}</p>
            <p id="precio">${resultado[i].price}</p>
            <p id="description">${resultado[i].description}</p>
        </div>
        <div class="Compra">
            <a ><input id="detalle" type="button" value="See more details" onclick ="contar()"></a>
            <div >
                <svg class="carrito-compra" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                </svg> 
            </div>
        </div>
        
   
       
       `


       section.appendChild(div_products)
      /* div.classList.add("Subproduct-1")
       img.src = resultado[1].images
       img.id ='id-img'
       div_1.classList.add("Compra")
       button.id = 'detalle'
       button.type = "button"
       console.log(button)*/
      }

//asignar los hijos
       section.appendChild(div)
       div.appendChild(img)
       section.appendChild(div_1)
       div_1.appendChild(button)


console.log(img)
       /* for (let i=0;Object.keys(resultado).length; i++){
            h1= document.crateElement("h1")
            h1_1= document.createElement("h1")
            img= document.createElement("img")
            h1.textContent  = resultado[i].title
            h1_1.textContent  = resultado[i].id
            img.src = resultado[i].images
         divss.appendChild(h1) 
         divss.appendChild(h1_1)
         divss.appendChild(img)
        }*/




     
       
       

    })
    .catch(error => {
        console.log('Error al obtener los datos:', error);
    });
    const precio = document.getElementById ("precio")
var con= 0
function contar(){
  

    con = con+1
    precio.textContent=con
   console.log(con)
   
}




