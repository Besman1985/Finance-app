


import "./Logo.css"



function Logo({onChengeDemo,demo}) {

    return (
        <div className="logo">
            <i className="fas fa-leaf"></i>
            MONETA
            <label className="switch">
                <input checked={demo? "checked" : null} onChange={onChengeDemo} type="checkbox"/>
                    <span className="slider round"></span>
            </label>
        </div>
    )


};


export default Logo;