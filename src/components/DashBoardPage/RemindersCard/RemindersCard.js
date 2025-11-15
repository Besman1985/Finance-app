import TinyBarChart from "../../rechartsComponents/TinyBarChart";
import "./RemindersCard.css";





function RemindersCard({ transactions }) {

    const Transaction = (arr, filter, mount) => {
        return arr.filter(item => {
            return (item.type === filter && item.date.slice(5, 7) == mount);
        }).map(item => {
            return {
                [item.type]: Math.abs(item.amount),
                date: item.date.slice(5, 11)
            }
        });

    };

    const allIncome = Transaction(transactions, "income", new Date().getMonth() + 1).reverse();



    return (
        <section className="reminders card">
            <h2>Доходы</h2>
            <TinyBarChart allIncome={allIncome} />
        </section>
    )
};






export default RemindersCard;