import './App.css';
import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from 'react';


import useLocalStorage from './useLocalStorage';
import initialTransactions from './initialTransactions';
import initialCheckBox from './initialCheckBox';


import TransactionTable from './components/TransactionPage/transactionTable/TransactionTable';
import DashBoardPage from './components/DashBoardPage/DashBoardPage';
import BudgetPage from './components/BudgetPage/BudgetPage';
import Sidbar from './components/Sidebar/Sidebar';
import StatistickPage from './components/StatustickPage/StatistickPage';



const STORAGE_KEY = "financialTrackerTransactions";
const STORAGE_CHEK = "checkBudgetMain";





function App() {
  const [state, setState] = useState({
    quantityTrans: 8,

  })

  const [demo, setDemo] = useLocalStorage(
    "demo",
    true
  );
  const initialTrans = demo ? initialTransactions : []
  const initialCheck = demo ? initialCheckBox : []
  const onChengeDemo = (e) => {
    setDemo(e.target.checked)
    window.localStorage.removeItem(STORAGE_KEY)
    window.localStorage.removeItem(STORAGE_CHEK)
    window.localStorage.removeItem("financialTrackerBudgets")
    window.location.reload(true)
    

   
  }

  

  const [transactions, setTransactions] = useLocalStorage(
    STORAGE_KEY,
    initialTrans
  );
  const [checkBudget, setCheckBudget] = useLocalStorage(
    STORAGE_CHEK,
    initialCheck
  );

  const onSetCheckBudgetMain = (id) => {
    const n = checkBudget.find(item => item.id == id)
    if (n) {
      setCheckBudget(prevCheck => [...prevCheck.filter(item => {
        return item.id !== id
      })])
    } else {
      const newCheck = { id: id }
      setCheckBudget(prevCheck => [newCheck, ...prevCheck])
    }

  }


  const onDeledCheckBudget = (id) => {
    const n = checkBudget.find(item => item.id == id)
    if (n) {
      setCheckBudget(prevCheck => [...prevCheck.filter(item => {
        return item.id !== id
      })])
    }
  }



  const addTransaction = (newDescription, newAmount, newType, newCategory) => {
    if (newType === "expense" && newAmount > 0) {
      newAmount = -newAmount;
    }
    const newTransaction = {
      id: Date.now(),
      description: newDescription,
      amount: newAmount,
      type: newType,
      category: newCategory,
      currency: 'RUB',
      date: new Date().toISOString().slice(0, 10)
    };

    setTransactions(prevTransactions => [newTransaction, ...prevTransactions]);
  };


  const onDeledeTransaction = (id) => {
    setTransactions(prevTransactions => [...prevTransactions.filter(item => {
      return item.id !== id
    })]);
  };

  const BudgetFilter = (arr, category) => arr.filter(item => {
    return item.category === category && item.date.slice(5, 7) == new Date().getMonth() + 1 && item.amount < 0
  });



  return (
    <BrowserRouter>
      <div className='dashboard-container'>
        <Sidbar onChengeDemo={onChengeDemo} demo={demo}/>
        <Routes>
          <Route path='' element={<DashBoardPage
            transactions={transactions}
            addTransaction={addTransaction}
            BudgetFilter={BudgetFilter}
            BudgetData={state.BudgetData}
            quantityTrans={state.quantityTrans}
            checkBudget={checkBudget}
            demo={demo} />} />
          <Route path='transaction' element={<TransactionTable
            transactions={transactions}
            addTransaction={addTransaction}
            onDeledeTransaction={onDeledeTransaction} />} />
          <Route path='budget' element={<BudgetPage
            checkBudget={checkBudget}
            onSetCheckBudgetMain={onSetCheckBudgetMain}
            onDeledCheckBudget={onDeledCheckBudget}
            BudgetFilter={BudgetFilter}
            transactions={transactions} 
            demo={demo}/>} />
            <Route path='statistick' element={transactions.length > 0 ? <StatistickPage
            transactions={transactions}/> : <h1> Добавьте хотя бы одну транзакцию!</h1>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
