class Product  {

    constructor (title, price, description, imageUrl){
        this.title = title
        this.price = price
        this.description = description
        this.imagUrl = imageUrl
    }

    createHtml ()  {
        return `
        <div class="Subproduct-1" >
        <a href="../Detalle/product_detail.html">
            <img src="${this.imageUrl}" alt=""  id="id-img">
        </a>  
        <div>
            <p class="Nombre-producto">${this.title}</p>
            <p id="precio">${this.price}</p>
            <p id="description">${this.description}</p>

        </div>
        <div class="Compra">
            <a href="../Detalle/product_detail.html"><input id="detalle" type="button" value="See more details"></a>
            <div >
                <svg class="carrito-compra" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                </svg> 
            </div>
        </div>
        
    </div>
        `
    }
}