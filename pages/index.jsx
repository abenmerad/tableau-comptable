import BalanceSheet from "../components/BalanceSheet"
import Navbar from "../components/Navbar"
import "bootstrap/dist/css/bootstrap.css"
import "../styles/Home.module.css"

import { useEffect, useState } from "react"

const initialBalanceSheet = [
  {
    description: "Achat",
    amount: 50,
  },
  {
    description: "Course",
    amount: 50,
  },
  {
    description: "Voiture",
    amount: 50,
  }
]

const Home = () => {
  return <>
    <Navbar />
    <BalanceSheet balance={initialBalanceSheet} />

  </>
}
export default Home