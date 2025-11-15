

import "./MainNav.css"


function MainNav() {


    return (

        <nav className="main-nav">
            <ul>
                <li className="active"><a href="#"><i className="fas fa-home"></i>Обзор</a></li>
                <li><a href="#"><i className="fas fa-wallet"></i>Операции</a></li>
                <li><a href="#"><i className="fas fa-exchange-alt"></i>Счета</a></li>
                <li><a href="#"><i className="fas fa-money-check-alt"></i>Бюджеты</a></li>
                <li><a href="#"><i className="fas fa-chart-bar"></i>Отчеты</a></li>
                <li><a href="#"><i className="fas fa-file-invoice-dollar"></i>Цели и Долги</a></li>
                <li><a href="#"><i className="fas fa-cog"></i>Настройки</a></li>
            </ul>
        </nav>
    )
};




export default MainNav;