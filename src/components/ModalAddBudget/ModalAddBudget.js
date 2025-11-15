

import "./ModalAddBudget.css"






function ModalAddBudget({ modalBudgetOpen, onModalBudgetOpen, addBudgets, category, period, limit, onSelectCategory, onSelectPeriod, onSelectLimit }) {



   






    return (
        <div id="addBudgetModal" className={modalBudgetOpen ? "modal-backdrop open" : "modal-backdrop"}>
            <div className="modal-container">
                <div className="modal-header">
                    <h2 className="modal-title">Создать Новый Бюджет</h2>

                    <button onClick={onModalBudgetOpen} className="close-btn" data-close-modal aria-label="Закрыть">
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <div id="newBudgetForm">
                    <div className="form-group">
                        <label for="budgetCategories">Категория Бюджета</label>
                        <div className="select-wrapper">
                            <select onChange={onSelectCategory} value={category} id="budgetCategories" required>
                                <option value="" disabled selected>Выберите категорию</option>
                                <option value="Жилье">Жилье</option>
                                <option value="Финансы">Финансы</option>
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
                                <option value="Прочее">Прочее</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label for="budgetAmount">Лимит Бюджета (₽)</label>

                        <input onChange={onSelectLimit} value={limit} type="number" id="budgetAmount" min="1" step="0.01" placeholder="Сумма" required />
                    </div>

                    <div className="form-group">
                        <label for="budgetPeriod">Период</label>
                        <div className="select-wrapper">
                            <select onChange={onSelectPeriod} value={period} id="budgetPeriod" required>
                                <option value="" disabled selected>Период</option>
                                <option value="monthly">Месячный</option>
                                <option value="weekly">Недельный</option>
                                <option value="yearly">Годовой</option>
                            </select>
                        </div>
                    </div>

                    <div className="modal-actions">
                        <button onClick={onModalBudgetOpen} type="button" className="btn btn-secondary" data-close-modal>Отмена</button>
                        <button onClick={() => addBudgets()} type="submit" className="btn btn-primary">Создать</button>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default ModalAddBudget