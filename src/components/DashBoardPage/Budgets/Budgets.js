


import "./Budgets.css";





const Budgets = ({ transactions, BudgetFilter, BudgetData, checkBudget }) => {



    const summBudgetTrns = (name) => {
        return BudgetFilter(transactions, name).map(item => {
            return item.amount
        }).reduce((acc, carr) => {
            return acc + carr
        }, 0)

    }
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

    const budgetFilterMain = (BudgetData, checkBudget) => {
        const check = checkBudget.map(item => {
            return item.id
        })

        const newBudgetData = BudgetData.filter(item => {
            return check.includes(item.id)


        })



        return newBudgetData
    }
    


    const Budgets = budgetFilterMain(BudgetData, checkBudget).map(item => {
        const summBudget = summBudgetTrns(item.category);
        return <div className="budget-card card">
            <h3>{item.category}</h3>
            <div className="progress-bar-container">
                <div className={clazz(summBudget, item.limit)}></div>
            </div>
            <p>₽{summBudget} / {item.limit}</p>
        </div>
    })



    return (




        <section className="budgets">
            {Budgets}
        </section>
    )


};





export default Budgets;