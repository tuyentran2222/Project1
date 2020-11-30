import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from './DataProvider'

export default function Navbar1() {
    const [menu, setMenu] = useState(false);
    const value = useContext(DataContext);


    const toggleMenu = () =>{
        setMenu(!menu)
    }

    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <header>
            <div className="menu" onClick={toggleMenu}>
                <i className="fas fa-bars" width="30"></i>
            </div>
            <div className="logo">
                <h1><Link to="/">Đồng hồ</Link></h1>
            </div>
            <ul style={styleMenu}>
                <li><Link to="/">Trang chủ</Link></li>
                <li><Link to="/manWatch">Đồng hồ nam</Link></li>
                <li><Link to="/womenWatch">Đồng hồ nữ</Link></li>
                <li><Link to="/contact">Liên hệ</Link></li>
                <li><Link to="/login">Đăng nhập/Đăng ký</Link></li>
                <li onClick={toggleMenu}>
                    <i className="fas fa-times menu" width="30"></i>
                </li>
            </ul>

            <div className="cart-icon">
                <span></span>
                <Link to="/cart">
                    <i className="fas fa-cart-plus" width="30"></i>
                </Link>
            </div>
            
      </header>
    )
}