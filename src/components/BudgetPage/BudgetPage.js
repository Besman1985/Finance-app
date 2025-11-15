import BudgetCard from "./BudgetCard/BudgetCard";
import BudgetTitle from "./BudgetTitle/BudgetTitle";
import "./BudgetPage.css"
import ModalAddBudget from "../ModalAddBudget/ModalAddBudget";
import { useState } from "react";

import initialBudgets from "../../initialBudgets";
import useLocalStorage from "../../useLocalStorage";










function BudgetPage({ checkBudget, onSetCheckBudgetMain, onDeledCheckBudget, BudgetFilter,transactions,demo }) {
    const [modalBudgetOpen, setModalBudgetOpen] = useState(false),
        [changeMode, setChangeMode] = useState(false),
        [category, setCategory] = useState(""),
        [period, setPeriod] = useState(""),
        [limit, setLimit] = useState("")





    const onSelectCategory = (e) => {
        setCategory(e.target.value)
    }
    const onSelectPeriod = (e) => {
        setPeriod(e.target.value)
    }
    const onSelectLimit = (e) => {
        setLimit(e.target.value)
    }



  const summBudgetTrns = (name) => {
        return BudgetFilter(transactions, name).map(item => {
            return item.amount
        }).reduce((acc, carr) => {
            return acc + carr
        }, 0)

    }




    const STORAGE_KEY = "financialTrackerBudgets";

    const Budget = demo ? initialBudgets : []
    const [budgets, setBudgets] = useLocalStorage(
        STORAGE_KEY,
        Budget
    );
    

    const onDeledeBudgets = (id) => {
        setBudgets(prevBudgets => [...prevBudgets.filter(item => {
            return item.id !== id
        })]);
    };


    const onModalBudgetOpen = () => {

        setModalBudgetOpen(!modalBudgetOpen)
        if (changeMode) {
            setChangeMode(false)
        }
    }


    const addBudgets = () => {
        const newBudget = {
            id: Date.now(),
            category: category,
            period: period,
            limit: limit
        };
        setBudgets(prevBudgets => [newBudget, ...prevBudgets]);
        setCategory("")
        setPeriod("")
        setLimit("")
        { onModalBudgetOpen() }
    };

    const BudgetRender = budgets.map(item => {
        return <BudgetCard 
        category={item.category} 
        limit={item.limit} 
        id={item.id}
        period={item.period} 
        onDeledeBudgets={onDeledeBudgets} 
        onSetCheckBudgetMain={onSetCheckBudgetMain} 
        onDeledCheckBudget={onDeledCheckBudget} 
        summBudgetTrns={summBudgetTrns} 
        checkBudget={checkBudget}/>
    })

    return (
        <div class="Budget-content">
            <BudgetTitle />
            <h2 class="section-title">Общая Ситуация</h2>
            <div className="card-grid">
                {BudgetRender}


            </div>
            <button onClick={onModalBudgetOpen} class="add-budget-btn">
                + Создать Новый Бюджет
            </button>
            <ModalAddBudget
                modalBudgetOpen={modalBudgetOpen}
                onModalBudgetOpen={onModalBudgetOpen}
                addBudgets={addBudgets}
                category={category}
                period={period}
                limit={limit}
                onSelectCategory={onSelectCategory}
                onSelectPeriod={onSelectPeriod}
                onSelectLimit={onSelectLimit}
            />
        </div>
    )
}


export default BudgetPage 