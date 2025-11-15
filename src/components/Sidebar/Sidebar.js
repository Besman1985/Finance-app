

import "./sidebar.css";
import Logo from "./Logo/Logo";
import MainNav from "./MainNav/MainNav";
import UserProfile from "./UserProfile/UserProfile";









function Sidbar({onChengeDemo,demo}) {



    return (
        <aside className="sidebar">
            <Logo onChengeDemo={onChengeDemo} demo={demo} />
            <MainNav/>
            <UserProfile />
        </aside>
    )

}




export default Sidbar;