import FilterBar from "../FilterBar/FilterBar";
import HeaderTransaction from "../HeaderTransaction/HeaderTransaction";
import TransactionTableContainer from "../TransactionTableContainer/TransactionTableContainer";
import "./TransactionTable.css";
import { useState } from "react"


function TransactionTable({ transactions, addTransaction, onDeledeTransaction }) {

    const [catFilter, setCatFilter] = useState("")
    const [typeOperFilter, setTypeOperFilter] = useState("")
    const [dateFilter, setDateFilter] = useState("")
    const [textFilter, setTextFilter] = useState("")
    const [state, setState] = useState({
        prevState: 0,
        nextState: 10,
        pageLink: Math.floor(transactions.length / 10)
    })



    const onDefaultFilter = () => {
        setCatFilter(
            ""
        )
        setTypeOperFilter(
            ""
        )
        setDateFilter(
            ""
        )
         setTextFilter(
            ""
        )
    }

    const onTextFilter = (e) => {
        setTextFilter(
            e.target.value
        )
    }


    const onSetCategory = (e) => {
        setCatFilter(
            e.target.value
        )

    }

    const onSetOper = (e) => {
        setTypeOperFilter(
            e.target.value
        )

    }
    const onSetDate = (e) => {

        setDateFilter(
            e.target.value
        )
    }

    const onChangeShowTrnsNext = () => {
        setState({
            prevState: state.prevState + 10,
            nextState: state.nextState + 10,
            pageLink: Math.floor(transactions.length / 10)
        })
    }

    const onChangeShowTrnsPrev = () => {

        setState({
            prevState: state.prevState - 10,
            nextState: state.nextState - 10,
            pageLink: Math.floor(transactions.length / 10)
        })
    }


    const onPaginationNumber = (e) => {

        setState({
            prevState: e.target.id * 10 - 10,
            nextState: e.target.id * 10,
            pageLink: Math.floor(transactions.length / 10)
        })
    }

    const pageLink = (n, state) => {
        let arr = [];
        for (let i = 0; i <= n; i++) {
            if (Math.floor(state / 10) == i + 1) {
                arr.push(<a onClick={onPaginationNumber} href="#" id={i + 1} class="page-link active">{i + 1}</a>)
            } else {
                arr.push(<a onClick={onPaginationNumber} href="#" id={i + 1} class="page-link">{i + 1}</a>)
            }
        }
        return arr
    };

    const textFilterTrns = (arr, filter) => {
        if (filter) {
            return arr.filter(item => {
                return item.description.includes(filter)
            })

        }
        return arr

    }



    const FilterTrns = (trns, cat, type, date,) => {
        if (cat && type && date) {
            return trns.filter(item => {
                return item.category == cat && item.type == type && item.date == date
            })
        } else if (cat && type) {
            return trns.filter(item => {
                return item.category == cat && item.type == type
            })
        } else if (type && date) {
            return trns.filter(item => {
                return item.type == type && item.date == date
            })
        } else if (cat && date) {
            return trns.filter(item => {
                return item.category == cat && item.date == date
            })
        } else if (cat || type || date) {
            return trns.filter(item => {
                return item.category == cat || item.type == type || item.date == date
            })
        } else {
            return trns
        }

    }

    const trnOnFilter = textFilterTrns(FilterTrns(transactions, catFilter, typeOperFilter, dateFilter), textFilter)



    const pageLinks = pageLink(Math.floor(trnOnFilter.length / 10), state.nextState)

    return (
        <div class="main-content">
            <HeaderTransaction addTransaction={addTransaction} />
            <FilterBar onSetCategory={onSetCategory}
                onSetOper={onSetOper}
                onSetDate={onSetDate}
                onDefaultFilter={onDefaultFilter}
                onTextFilter={onTextFilter} />
            <TransactionTableContainer transactions={trnOnFilter}
                prevState={state.prevState}
                nextState={state.nextState}
                onDeledeTransaction={onDeledeTransaction} />

            <div class="pagination">
                <button onClick={onChangeShowTrnsPrev} disabled={Math.floor(state.nextState / 10) == 1 ? true : false} href="#" class="page-link ">Предыдущая</button>
                {pageLinks}
                <button onClick={onChangeShowTrnsNext} disabled={Math.floor(state.nextState / 10) == (Math.floor(trnOnFilter.length / 10) + 1) ? true : false} href="#" class="page-link">Следующая</button>
            </div>
        </div>
    )
}





export default TransactionTable;