import { useEffect, useRef, useState } from 'react'
import './App.css';
import TrackerNavbar from './components/TrackerNavbar/TrackerNavbar'
import TrackerHead from './components/TrackerHead/TrackerHead'
import TrackerBody from './components/TrackerBody/TrackerBody';
import { TransactionsContext, MoneyContext } from "./Contexts/mainContext"
import { dummyData } from './dummyTransactions';

function App() {
  let [money, setMoney] = useState({
    balance: 3800,
    expenses: 1200
  })
  let [transactionData, setTransactionData] = useState(dummyData);
  let initialRender = useRef(true);
  useEffect(()=>{
    if(initialRender.current){
      onLoad();
    }  
    return(() => {
      initialRender.current = false;
    })
  }, [])

  useEffect(()=> {
    if(!initialRender.current){
      localStorage.setItem("allData", JSON.stringify({money, transactionData}));
    } 
  }, [money, transactionData])
  let onLoad = () => {
    let localData = localStorage.getItem("allData");
    if(localData){
      let {money, transactionData} = JSON.parse(localData);
      setMoney(money);
      setTransactionData(transactionData);
    }
  }
  return (
    <main className='App'>
      <MoneyContext.Provider value={[money, setMoney]}>
      <TransactionsContext.Provider value={[transactionData, setTransactionData]}>
        <TrackerNavbar />
        <TrackerHead balance={money.balance} expenses={money.expenses}/>
        <TrackerBody transactionData={transactionData}/>
      </TransactionsContext.Provider> 
      </MoneyContext.Provider>
    </main>
  )
}

export default App
