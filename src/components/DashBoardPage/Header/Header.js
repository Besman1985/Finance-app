
import ModalAddTransaction from "../../ModalAddTransaction/ModalAddTransaction";
import "./Header.css";
import { useState, useMemo } from "react";


function Header({ transactions, addTransaction }) {
  const [stateModal, setStateModal] = useState(false)

  const onShowModal = () => {
    setStateModal(!stateModal)
  };


  const AllIncom = useMemo(() => {
    return transactions.filter((item) => {
      return item.type === "income"
    }).map(item => {
      return item.amount
    }).reduce((acc, curr) => {
      return acc + curr
    }, 0)
  }, [transactions])


  return (
    <header className="main-header">
      <div className="balance">
        <span>₽{AllIncom}</span>
        <button onClick={onShowModal} className="add-transaction-btn"><i className="fas fa-plus"></i>Добавить транзакцию</button>
      </div>
      <ModalAddTransaction nam={stateModal} onCloseModal={onShowModal} addTransaction={addTransaction} />
    </header>
  )
};





export default Header;