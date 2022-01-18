import { useContext } from "react"
import BalanceContext from "./BalanceContext"


const BalanceSheet = () => {
  const { balance } = useContext(BalanceContext)

  return (
    <>
      <table className="table table-striped container-fluid">
        <thead>
          <tr>
            <th className="flex-row">Entrée</th>
            <th className="flex-row-reverse">Sortie</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(balance).map(([itemId, { description, amount }]) => {
            return <tr key={itemId.key} className="fw-bold">
              <td className="flex-row">
                <p className="text-success">{amount > 0 ? description + ", " + amount + "€" : ""}</p>
              </td>
              <td className="flex-row-reverse">
                <p className="text-danger">{amount < 0 ? description + ", " + amount + "€" : ""}</p>
              </td>
            </tr>
          })}
        </tbody>
        <tfoot className="container">
          <tr className="d-flex flex-row justify-content-between">
            <td className="d-flex">
              <div className="m-2 fw-bold">
                Total entrée
              </div>
              <div className="m-2 text-success fw-bolder">
                {Object.values(balance)
                  .map(({ amount }) => amount)
                  .filter(amount => amount > 0)
                  .reduce((previous, current) => previous + current)}€
              </div>
            </td>
            <td className="d-flex">
              <div className="m-2 fw-bold">
                Total entrée
              </div>
              <div className="m-2 text-danger fw-bolder">
                {Object.values(balance)
                  .map(({ amount }) => amount)
                  .filter(amount => amount < 0)
                  .reduce((previous, current) => previous + current)}€
              </div>
            </td>
          </tr>
          <tr className="d-flex justify-content-center">
            <td className="d-flex flex-row">
              <div className="m-2 fw-bold">
                Total comptable
              </div>
              <div className="m-2 text-primary fw-bolder">
                {Object.values(balance)
                  .map(({ amount }) => amount)
                  .reduce((previous, current) => previous + current)}€
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  )
}
export default BalanceSheet
