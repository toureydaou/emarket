// For Add Item to Cart

export const addCart = (product) => {
    return { 
        type : "ADDCART",
        payload : product
    }
}


// For delete item from cart

export const delCart = (product) => {
    return {
        type : "DELITEM",
        payload : product
    }
}