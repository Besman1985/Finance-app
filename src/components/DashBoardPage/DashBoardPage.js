import MainContent from './MainContent/MainContent';
import RightSidbar from './RightSidbar/RightSidbar';
import initialBudgets from "../../initialBudgets";
import useLocalStorage from "../../useLocalStorage";



function DashBoardPage(props) {

    const STORAGE_KEY = "financialTrackerBudgets";
    const Budget = props.demo ? initialBudgets : []
    const [BudgetData, setBudgets] = useLocalStorage(
        STORAGE_KEY,
        Budget
    );

    return (


        <>
            <MainContent transactions={props.transactions}
                addTransaction={props.addTransaction}
                BudgetFilter={props.BudgetFilter}
                BudgetData={BudgetData}
                checkBudget={props.checkBudget} />
            <RightSidbar transactions={props.transactions} quantityTrans={props.quantityTrans} />
        </>
    )





}


export default DashBoardPage;