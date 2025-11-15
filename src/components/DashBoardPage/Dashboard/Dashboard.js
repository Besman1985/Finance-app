import "./Dashboard.css";
import PeriodSummary from "../PeriodSummary/PeriodSummary";
import Budgets from "../Budgets/Budgets";





function Dashboard(props) {
    
    return (
        <div className="dashboard-grid">
            <PeriodSummary transactions={props.transactions}/>
            <Budgets BudgetFilter = {props.BudgetFilter} 
            transactions={props.transactions}
            BudgetData = {props.BudgetData}
            checkBudget={props.checkBudget}/>
        </div>
    )
};





export default Dashboard;