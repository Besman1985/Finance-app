import "./RecentActivityCard.css";





function RecentActivityCard(props) {



    const transactions = props.transactions.slice(0,props.quantityTrans).map(({ description, amount }) => {
         const typeClass = amount >= 0 ? 'income' : 'expense';
        return (
            <li className={typeClass}>{description} <span>{amount}</span></li>
        )

    })



    return (
        <section className="recent-activity card">
            <h2>Последние транцакции</h2>
            <ul className="activity-list">
                {transactions}
            </ul>
        </section>
    )
};





export default RecentActivityCard;