import { Link, NavLink } from "react-router-dom"
import { useState, useEffect } from "react";
import './navbar.css'
function NavBar(){

    return (
    <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <NavLink className="navbar-brand" to={'/'}>Trang chủ</NavLink>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to={'my-info'}>Thông tin sinh viên</NavLink>
                </li>
            </ul>
            <Link className="btn btn-success create-product" style={{marginLeft: '45%'}}  to={'/create-product'}>Thêm sản phẩm</Link>
        </nav>
    </>    
    )
}
export default NavBar