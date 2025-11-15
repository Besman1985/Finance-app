import "./ModalAddTransaction.css";

import { Component } from "react";



class ModalAddTransaction extends Component {


    constructor(props) {
        super(props);
        this.state = {
            description: "",
            amount: "",
            type: "",
            category: "",
            currency: 'RUB',
        }
    }







    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    checkType = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        const { nam, onCloseModal, addTransaction } = this.props
        const clazz = nam ? "modal-backdrop is-open " : "modal-backdrop ";
        const { description, amount, type, category } = this.state;
        const btnActiveExpense = type === "expense" ? "btn btn-expense btn-active" : "btn btn-expense";
        const btnActiveIncome = type === "income" ? "btn btn-income btn-active" : "btn btn-income";


        return (

            <div id="operationModal" className={clazz}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>Новая Операция</h2>
                        <span onClick={onCloseModal} className="close-button">×</span>
                    </div>
                    <div className="operation-type-selector">
                        <button onClick={this.checkType} name="type" value="expense" className={btnActiveExpense}>− Расход</button>
                        <button onClick={this.checkType} name="type" value="income" className={btnActiveIncome}>+ Доход</button>
                    </div>
                    <form onSubmit={onCloseModal} className="operation-form">
                        <input onChange={this.onChange} name="amount" value={this.state.amount} type="number" id="sum" placeholder="Сумма" className="form-input" />
                        <input onChange={this.onChange} name="description" value={this.state.description} type="text" id="sum" placeholder="Описание" className="form-input" />
                        <select onChange={this.onChange} name="category" value={this.state.category} id="category" className="form-input">
                            <option value="" disabled selected>Выберите категорию</option>
                            <option value="Зарплата">Зарплата</option>
                            <option value="Дополнительный доход">Дополнительный доход</option>
                            <option value="Инвестиции">Инвестиции</option>
                            <option value="Прочее">Прочее</option>
                            <option value="Жилье">Жилье</option>
                            <option value="Финансы">Финансы (Кредиты)</option>
                            <option value="Продукты">Продукты</option>
                            <option value="Питание вне дома">Питание вне дома</option>
                            <option value="Транспорт">Транспорт</option>
                            <option value="Связь">Связь</option>
                            <option value="Здоровье">Здоровье</option>
                            <option value="Уход за собой">Уход за собой</option>
                            <option value="Одежда">Одежда</option>
                            <option value="Образование">Образование</option>
                            <option value="Развлечения">Развлечения</option>
                            <option value="Подарки">Подарки</option>
                        </select>
                        <div className="modal-actions">
                            <button onClick={onCloseModal} type="button" className="btn btn-cancel">Отмена</button>
                            <button onClick={() => addTransaction(description, +amount, type, category)} type="submit" className="btn btn-save">Сохранить</button>
                        </div>
                    </form>
                </div>
            </div>


        )
    }






};



export default ModalAddTransaction;