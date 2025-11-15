import Dashboard from "../Dashboard/Dashboard";
import Header from "../Header/Header"
import "./MainContent.css"



function MainContent(props) {
    return (
        <main className="main-content">
            <Header addTransaction={props.addTransaction}
                transactions={props.transactions} />
            <Dashboard transactions={props.transactions}
                BudgetFilter={props.BudgetFilter}
                BudgetData={props.BudgetData}
                checkBudget={props.checkBudget} />

        </main>
    )


};



export default MainContent;