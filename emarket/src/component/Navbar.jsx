

const Navbar = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg px-4 py-3 navbar-dark" style={{
                backgroundColor : "#efefef"
            }}>
                <a className="navbar-brand text-dark" href="#">eMarket </a>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-dark" href="#" aria-current="page">Home <span className="visually-hidden">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black-50" href="#">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black-50" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black-50" href="#">Contact</a>
                        </li>
                    </ul>
                    <div className="buttons">
                        <button className="btn btn-outline-dark me-2">
                            <i className="fa fa-cart-plus me-1" aria-hidden="true"></i>  Cart (0)
                        </button>
                        <button className="btn btn-primary me-2">
                            <i className="fa fa-sign-in me-1"></i> Sign In
                        </button>
                        <button className="btn btn-outline-dark">
                            <i className="fa fa-sign-up"></i> Sign Up
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;