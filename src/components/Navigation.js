import React from 'react';
import '../styles/navigation.css'
const Navigation = (props) => {
    const { methodeFilter, setProduitAFiltrer, count } = props
    return (
        <>
            <nav className="navbar barNavigation navbar-light bg-light">
                <a href="" className="navbar-brand iconText">
                    <i class="fas fa-store"></i><span>Ibrahima Thiam Shop</span> </a>
                <form className="form-inline">
                    <input className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        onChange={(e) => {
                            setProduitAFiltrer(e.target.value.length > 0)
                            methodeFilter(e.target.value)
                        }}
                    />
                    <div className="panier">
                        <i class="fas fa-cart-arrow-down fa-2x"></i>
                        <span class="badge badge-success">{count}</span>
                    </div>
                </form>
            </nav>
        </>
    );
};

export default Navigation;