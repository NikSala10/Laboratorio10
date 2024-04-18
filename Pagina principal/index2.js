
let listOfProducts = []

function createAllProducts ()  {
    const results = data.results
    for(let i = 0; i < results.lenght; i++)  {
        let object = results [i]
        let title = object.title
        let price = object.price
        let imageUrl = object.images
        let description = object.description
        let product = new Product (title, price, description, imageUrl)
        listOfProducts.push(product)
    }
}

    function fillScreenWithProducts ()  {
        const container = document.getElementById ("p1")
        for(let i = 0; i < listOfProducts.length; i++)  {
            let product = listOfProducts[i]
            container.innerHtml  += product.createHtml()
        }
    }

    createAllProducts()
    fillScreenWithProducts()