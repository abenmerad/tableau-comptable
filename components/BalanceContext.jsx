import { createContext, useCallback, useState, useEffect } from "react"

const initialBalanceSheet = [
  {
    description: "Achat",
    amount: 50,
  },
  {
    description: "Course",
    amount: -50,
  },
  {
    description: "Voiture",
    amount: 50,
  },
]
if (typeof window !== 'undefined') {
  window.sessionStorage.setItem("balanceSheet", JSON.stringify(initialBalanceSheet))
} 
const BalanceContext = createContext(initialBalanceSheet)

export const BalanceContextProvider = (props) => {
  const [balance, setBalance] = useState(initialBalanceSheet)

  useEffect(() => {
    setBalance(JSON.parse(window.sessionStorage.getItem("balanceSheet")));
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem("balanceSheet", JSON.stringify(balance));
  }, [balance]);

  const addBalanceItem = useCallback((newBalance) => {
    setBalance(currentBalance => [...currentBalance, newBalance])
  }, [balance])

  return (
    <BalanceContext.Provider value={{ balance, addBalanceItem }}>
      {props.children}
    </BalanceContext.Provider>
  )
}
export default BalanceContext