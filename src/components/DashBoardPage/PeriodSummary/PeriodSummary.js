


import MyChart from "../../rechartsComponents/MyChart";
import "./PeriodSummary.css";
import { useMemo, useState } from "react";

function PeriodSummary({ transactions }) {


    const [monthFilter, setMonthFilter] = useState(1);
    const onChangeMountFilter = (filter) => {
        setMonthFilter(filter);
    };



    const currentDate = new Date()
    const currentMonth = currentDate.getMonth()
    const MonthsAgoDate = currentDate.setMonth(currentMonth - monthFilter)

    const allExpense = useMemo(() => {
        return transactions.filter(item => {
            return (item.type === "expense" && new Date(item.date) > (MonthsAgoDate));
        }).map(item => {
            return {
                [item.type]: Math.abs(item.amount),
                date: item.date.slice(5, 11)
            }
        });

    }, [transactions, monthFilter])


    const summIncoms = useMemo(() => {
        return transactions.filter(item => {
            return (item.type === "income" && new Date(item.date) > (MonthsAgoDate));
        }).map(item => {
            return item.amount
        }).reduce((summ, incom) =>
            summ + incom, 0
        )
    }, [transactions, monthFilter])

    const summExpense = useMemo(() => {
        return transactions.filter(item => {
            return (item.type === "expense" && new Date(item.date) > (MonthsAgoDate));
        }).map(item => {
            return item.amount
        }).reduce((summ, incom) =>
            summ + incom, 0
        )
    }, [transactions, monthFilter])

    return (
        <section className="period-summary card">
            <h2>Сводка за период</h2>
            <div className="chart-controls">
                <button onClick={() => onChangeMountFilter(1)} className={monthFilter == 1 ? "chart-active" : null}>1 Месяц</button>
                <button onClick={() => onChangeMountFilter(2)} className={monthFilter == 2 ? "chart-active" : null}>2 месяца</button>
            </div>
            <div className="chart-placeholder">
                <MyChart allTrns={allExpense}>
                </MyChart>
            </div>

            <div className="summary-details">
                <div className="detail income">
                    <h3>Доходы</h3>
                    <p>₽{summIncoms} <i className="fas fa-caret-up"></i></p>
                </div>
                <div className="detail expenses">
                    <h3>Расходы</h3>
                    <p>₽{summExpense}<i className="fas fa-caret-down"></i></p>
                </div>
                <div className="detail net-flow">
                    <h3>Остаток</h3>
                    <p>₽{summIncoms + summExpense}</p>
                </div>
            </div>
        </section>
    )
};


export default PeriodSummary;