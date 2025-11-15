





function TransactionItem({ id, date, category, description, amount, onDeledeTransaction }) {

    const typeClass = amount >= 0 ? 'amount income' : 'amount expense';

    return (
        <tr key={id}>
            <td>{date}</td>
            <td>{category}</td>
            <td>{description}</td>
            <td className={typeClass}>{amount}</td>
            <td><i onClick={() =>{onDeledeTransaction(id)}} className="fas fa-trash-alt delete-icon"></i></td>
        </tr>
    )
}


export default TransactionItem;




