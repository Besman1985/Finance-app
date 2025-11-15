
import { useState, useEffect } from "react";
import "./UserProfile.css"



function UserProfile() {


    const [theme, setTheme] = useState("dark-theme")

    const localTheme = window.localStorage.getItem("theme") ? window.localStorage.getItem("theme") : theme
    const body = document.querySelector("body")

    const check = (theme) => {
        return localTheme == theme ? "cheked" : ""
    }

    body.classList.add(localTheme)


    const onChengeTheme = (e) => {
        localStorage.setItem("theme", e.target.value)
        setTheme(e.target.value)
        window.location.reload()
    }






    return (
        <div className="theme-switch-container">
            <label className="theme-option">
                <input onClick={onChengeTheme} type="radio" name="theme-switch" value="red-theme" checked={check("red-theme")} />
                <span>Red</span>
            </label>
            <label className="theme-option">
                <input onClick={onChengeTheme} type="radio" name="theme-switch" value="dark-theme" checked={check("dark-theme")} />
                <span>Dark</span>
            </label>
            <label className="theme-option">
                <input onClick={onChengeTheme} type="radio" name="theme-switch" value="brown-theme" checked={check("brown-theme")} />
                <span>Brown</span>
            </label>
            <label className="theme-option">
                <input onClick={onChengeTheme} type="radio" name="theme-switch" value="blue-theme" checked={check("blue-theme")} />
                <span>Blue</span>
            </label>
        </div>
    )
};



export default UserProfile;