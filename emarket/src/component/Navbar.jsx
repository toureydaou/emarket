import { NavLink } from "react-router-dom";


const Navbar = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg px-4 py-3 navbar-dark" style={{
                backgroundColor : "#efefef"
            }}>
                <NavLink className="navbar-brand text-dark" to="#">eMarket </NavLink>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active text-dark" to="/" aria-current="page">Home <span className="visually-hidden">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-black-50" to="/products">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-black-50" to="/">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-black-50" to="/">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="buttons">
                        <NavLink className="btn btn-outline-dark me-2" to="/cart" >
                            <i className="fa fa-cart-plus me-1" aria-hidden="true"></i>  Cart (0)
                        </NavLink>
                        <NavLink className="btn btn-primary me-2" to="/login">
                            <i className="fa fa-sign-in me-1"></i> Sign In
                        </NavLink>
                        <NavLink className="btn btn-outline-dark" to="/register">
                            <i className="fa fa-sign-up"></i> Sign Up
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;