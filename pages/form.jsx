import Navbar from "../components/Navbar"
import { BalanceContextProvider } from "../components/BalanceContext"
import FormApp from "../components/FormApp"


const Form = () => {
  return (
    <BalanceContextProvider>
      <Navbar />
      <FormApp />
    </BalanceContextProvider>
  )
}

export default Form
