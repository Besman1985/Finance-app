import RecentActivityCard from "../RecentActivityCard/RecentActivityCard";
import RemindersCard from "../RemindersCard/RemindersCard";
import "./RightSidbar.css";



function RightSidbar(props) {





    
    return (
        <div className="right-sidebar">
            <RemindersCard transactions={props.transactions}/>
            <RecentActivityCard transactions={props.transactions} quantityTrans={props.quantityTrans}/>
        </div>
    )
};





export default RightSidbar;