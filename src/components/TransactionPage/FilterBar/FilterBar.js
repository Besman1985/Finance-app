
import "./FilterBar.css"






function FilterBar({ onSetCategory, onSetOper, onSetDate, onDefaultFilter, onTextFilter }) {



    return (
        <div className="filter-bar">
            <div className="search-input">
                <i className="fas fa-search"></i>
                <input onChange={onTextFilter} type="text" placeholder="Поиск по описанию" />
            </div>
            <i className="fas fa-calendar-alt" /><input onChange={onSetDate} type="date" className="filter-btn" />
            <i className="fas fa-tags" />
            <select onChange={onSetCategory} name="category" id="category" className="filter-btn">
                <option value="" >Все категории</option>
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
            <i className="fas fa-filter" /><select onChange={onSetOper} name="typeOperation" id="typeOperation" className="filter-btn">
                <option value="">все</option>
                <option value="income">Доходы</option>
                <option value="expense">Расходы</option>
            </select>
            <button onClick={onDefaultFilter} className="filter-btn btn-primary">Сброс фильтров</button>
        </div>
    )
}



export default FilterBar;