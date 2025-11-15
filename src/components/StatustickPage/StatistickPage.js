import ComposedChartExample from "../rechartsComponents/ComposedChartExample"
import RadarChartExample from "../rechartsComponents/RadarChartExample"
import './StatistickPage.css'






const category = [
    "Жилье",
    "Финансы",
    "Продукты",
    "Питание вне дома",
    "Транспорт",
    "Связь",
    "Здоровье",
    "Уход за собой",
    "Одежда",
    "Образование",
    "Развлечения",
    "Подарки",
    "Прочее"
]




function StatistickPage({ transactions }) {



    const newArrTransactionExpense = []
    let chartDataExpense = {}

    category.forEach(item => {
        return newArrTransactionExpense.push(transactions.filter(element => {
            return item == element.category && element.type == 'expense'
        }))
    })


    const newArrFilterExpense = newArrTransactionExpense.map(item => {
        return {
            name: item.length > 0 ? item[0].category : "none",
            value: item.map(item => {
                return item.amount
            })
        }


    })
    chartDataExpense = newArrFilterExpense.map(item => {
        return {
            name: item.name.slice(0, 4),
            value: item.value.reduce((acc, curr) =>
                acc + Math.abs(curr)
                , 0)
        }
    })




    const Transaction = (arr, filter) => {
        return arr.filter(item => {
            return (item.type === filter);
        }).map(item => {
            return {
                [item.type]: Math.abs(item.amount),
                date: item.date.slice(5, 11)
            }
        });

    }

    const allIncome = Transaction(transactions, "income", new Date().getMonth() + 1).reverse()







    return (
        <div className="Statistick-Page">
            <RadarChartExample allIncome={allIncome} />
            <ComposedChartExample chartDataExpense={chartDataExpense} />
        </div>

    )
}






export default StatistickPage