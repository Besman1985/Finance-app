

import { NavLink } from "react-router";
import "./MainNav.css"







function MainNav() {






    return (

        <nav className="nav-menu">
            <NavLink to="/" id="dashboard" className="nav-item"><i className="fas fa-home"></i>Главная</NavLink>
            <NavLink to="transaction" id="transaction" className="nav-item"><i className="fas fa-exchange-alt"></i>История операция</NavLink>
            <NavLink to="budget" className="nav-item "><i className="fas fa-wallet"></i>Бюджеты</NavLink>
            <NavLink to="statistick" className="nav-item"><i className="fas fa-chart-bar"></i>Статистика</NavLink>
        </nav>
    )
};




export default MainNav;