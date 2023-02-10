const cart  = [];

const handleCart =  (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDCART":
            // Check if the product already exists in the cart
            const exist = state.find((x) => x.id === product.id);
            if (exist){
                return state.map((x)=> 
                    x.id === product.id ? {...x, qty: x.qty + 1} : x 
                );
            } else {
                const product = action.payload;
                return[
                    ...state, 
                    {
                        ...product,
                        qty : 1,
                    }
                ]
            }


        
        case "DELITEM":
            const exist1 = state.find((x) => x.id === product.id);
            if(exist1.qty === 1)
            {
                return state.filter((x) => x.id !== product.id);

            } else {
                return state.map((x) => x.id === product.id ? {...x, qty: x.qty-1} : x);
            }

    
    default:
        return state;

    }
}

export default handleCart;