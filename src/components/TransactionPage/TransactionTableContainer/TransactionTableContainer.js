
import TransactionFilter from "../TransactionFilter/TransactionFilter"
import "./TransactionTableContainer.css"
import TransactionItem from "../TransactionItem/TransactionItem"


function TransactionTableContainer({ transactions, nextState, prevState, onDeledeTransaction }) {








    const transactionAll = transactions.slice(prevState, nextState).map(({ id, date, category, description, amount }) => {

        return (
            <TransactionItem id={id} date={date} category={category} description={description} amount={amount} onDeledeTransaction={onDeledeTransaction} />
        )

    })

    return (
        <div className="transaction-table-container">
            <table className="transaction-table">
                <TransactionFilter />
                <tbody>
                    {transactionAll}
                </tbody>
            </table>
        </div>
    )
}





export default TransactionTableContainer