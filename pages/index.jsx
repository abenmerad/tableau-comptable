import BalanceSheet from "../components/BalanceSheet"
import Navbar from "../components/Navbar"
import "bootstrap/dist/css/bootstrap.css"
import "../styles/Home.module.css"
import {BalanceContextProvider } from "../components/BalanceContext"


const App = () => {
  return (
    <BalanceContextProvider>
      <Navbar />
      <BalanceSheet />
    </BalanceContextProvider>
  )
}
export default App