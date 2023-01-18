import React, {useState, useEffect} from 'react'








const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([data])
    const [loading, setLoading] = useState([false]);
    let componentMounted =true;

    useEffect(() => {
        async function getProducts() {
            setLoading(true);
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                if(componentMounted) {
                    setData(await response.clone().json())
                    setFilter(await response.json());
                }
                setLoading(false)
                console.log(filter)
                return () => {
                    componentMounted = false;
                }

            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
                return () => {
                    componentMounted = false;
                }
            }
        } getProducts();
    }, []); 

    const Loading = () => {
        return (
            <>
                Loading...
            </>
        )
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mt-5 pb-5">
                    <button className="btn btn-outline-dark me-2">All</button>
                    <button className="btn btn-outline-dark me-2">Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2">Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2">Jewelery</button>
                    <button className="btn btn-outline-dark me-2">Electronics</button>
                    <button className="btn btn-outline-dark me-2">Men's Clothing</button>
                </div>   
                {filter.map((product)=>{
                    return(
                        <>
                            <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                                <div class="card h-100 text-center
                                 p-4">
                                    <img class="card-img-top" src={product.image} alt={product.title} style={{height:"250px" }}/>
                                    <div class="card-body">
                                        <h4 class="card-title mb-0">{product.title.substring(0, 12)}...</h4>
                                        <p class="card-text">{product.price} $</p>
                                        <a href="#" class="btn btn-outline-dark">Details</a>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12" mb-5>
                        <h1 className='display-6 fw-bolder text-center '>LASTEST PRODUCTS</h1>
                        <hr />
                    </div>
                </div> 
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts/>}
                </div>
            </div>
        </div>
    )
}

export default Products