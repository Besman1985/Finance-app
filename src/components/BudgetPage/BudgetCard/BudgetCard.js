
import "./BudgetCard.css"


function BudgetCard({ category, limit, id, period, onDeledeBudgets, onSetCheckBudgetMain, onDeledCheckBudget, summBudgetTrns,checkBudget }) {
    const onDeledeAll = (id) => {
        onDeledeBudgets(id)
        onDeledCheckBudget(id)
    }
    const summBudget = summBudgetTrns(category)

    const clazz = (value, limit) => {
        if ((Math.abs(value) / limit) * 100 === 0) {
            return ".progress-bar.white-0 ";
        } else if ((Math.abs(value) / limit) * 100 <= 40) {
            return "progress-bar blue-40";
        } else if ((Math.abs(value) / limit) * 100 <= 65) {
            return "progress-bar green-65";
        } else if ((Math.abs(value) / limit) * 100 <= 90) {
            return "progress-bar yellow-90";
        } else {
            return "progress-bar red-100"
        };

    }

    const remainingFunds = limit - Math.abs(summBudget)
    const FaundsMessag = remainingFunds > 0 ? "Осталось" : "Ушли в минус"
    const CheckOn = checkBudget.map(item=> item.id).includes(id) ? "checked": ""



   

    return (



        <div id={id} className="budget-card">
            <div className="card-header">
                <h3 className="card-title">{category}/{period}</h3>
                <label htmlFor="dash">
                    Main
                    <input onClick={() => onSetCheckBudgetMain(id)} id="dash" type="checkbox" className="fas edit-icon" checked={CheckOn}/>
                </label>
            </div>
            <p className="card-info">
                <strong>{summBudget}</strong> из <strong>{limit}</strong>
            </p>
            <div className="progress-bar-container">
                <div className={clazz(summBudget, limit)}></div>
            </div>
            <div className="card-footer">
                <span className="remaining">{FaundsMessag} {remainingFunds}</span>
                <i onClick={() => onDeledeAll(id)} className="fas fa-trash-alt delete-icon"></i>
            </div>
        </div>


    )
}






export default BudgetCard