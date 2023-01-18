import '../App.css'
import Products from './Products';


function Home() {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white border-0">
              <img className="card-img" src="/images/bg.jpg" alt="background" height={'550px'}/>
              <div className="card-img-overlay d-flex flex-column justify-content-center">
                <div className="container">
                <h4 className="card-title display-3 text-black fw-bolder mb-0">We got new arrivals</h4>
                <p className="card-text text-black-50 fs-2">Check the printer collection</p>
                </div>
              </div>
            </div>
            <Products />
        </div>
    )
}

export default Home;