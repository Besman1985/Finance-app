
import { useState } from "react";
import ModalAddTransaction from "../../ModalAddTransaction/ModalAddTransaction";
import "../HeaderTransaction/HeaderTransaction.css"




function HeaderTransaction(props) {
    const [state, setState] = useState({
        modal: false
    })

    const onShowModal = () => {
        setState({
            modal: !state.modal
        })
    };
    const onCloseModal = () => {
        setState({
            modal: !state.modal
        })
    };

    return (
        <div className="header-transaction">
            <h1>История Операций</h1>
            <div className="actions">
                <button onClick={onShowModal} className="add-transaction-btn">Добавить транзакцию</button>
                <button className="btn btn-secondary "><i className="fas fa-download"></i> Скачать Чек</button>
                <button className="btn btn-secondary "><i className="fas fa-upload"></i> Импорт</button>
            </div>
            <ModalAddTransaction nam={state.modal} onCloseModal={onCloseModal} addTransaction={props.addTransaction} />
        </div>
    )
}



export default HeaderTransaction;