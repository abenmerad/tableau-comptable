const BalanceSheet = (props) => {
  const balance = props
  let n = 0

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr className="d-flex justify-content-between">
            <th>Entrée</th>
            <th>Sortie</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(balance).flat(2).map((item) => {
            return <tr key={item.key}>
              <td>
                <p className="text-success font-weight-bold">{item.description + ", " + item.amount}</p>
              </td>
              <td>
                <p className="text-danger"></p>
              </td>
            </tr>
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>Total</td>
          </tr>
        </tfoot>
      </table>
    </>
  )
}
export default BalanceSheet
