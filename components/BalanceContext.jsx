import { createContext, useCallback, useState } from "react"

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

const BalanceContext = createContext(initialBalanceSheet)

export const BalanceContextProvider = (props) => {
  const [balance, setBalance] = useState(initialBalanceSheet)
  const addBalanceItem = useCallback((newBalance) => {
    setBalance((currentBalance) => currentBalance.push(newBalance))
  }, []) 

return <BalanceContext.Provider {...props} value={{ balance, addBalanceItem }} />
}
export default BalanceContext
