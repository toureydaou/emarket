import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart, delCart } from '../redux/action'


export default function Cart() {
  
    const state = useSelector(state => state.handleCart)

    const dispatch = useDispatch();

     const removeProduct = product => {
        dispatch(delCart(product))
    }

    const addProduct = product => {
        dispatch(addCart(product))
    }

    
  
    return (
        <div>
            {state.map((product) => {
                return (
                    <>
                        <div className="row" key={product.id}>
                            <div className="col-md-4">
                                <img src={product.image} alt={product.title} height="200px" width="180px" />
                            </div>
                            <div className="col-md-4">
                                <h3>{product.title}</h3>
                                <p className="lead fw-bold">
                                    {product.qty} X ${product.price} = ${product.qty * product.price}
                                </p>
                                <button className="btn btn-outline-dark me-4" onClick={() => removeProduct(product)} >
                                    <i className="fa fa-minus"></i>
                                </button>
                                <button className="btn btn-outline-dark me-4" onClick={() => addProduct(product)} >
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </>
                )
            })}
            
        </div>
    )
}
