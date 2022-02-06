import BalanceContext from "../components/BalanceContext"
import { Formik } from "formik"
import * as yup from "yup"
import "bootstrap/dist/css/bootstrap.css"
import { useCallback, useContext } from "react"
import Button from "../components/Button"
import FormField from "../components/FormField.jsx"

const initialValues = {
  description: "",
  amount: 0,
}
const validationSchema = yup.object().shape({
  description: yup.string().required().label("description"),
  amount: yup.number().notOneOf([0], "ne peut être 0").required().label("amount")
})

const FormApp = () => {
  const { addBalanceItem } = useContext(BalanceContext)

  const handleFormSubmit = useCallback(async (values) => {
    addBalanceItem(values)
    return true
  }, [addBalanceItem])

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, isValid, isSubmitting }) =>
      (
        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col p-4"
        >
          <FormField
            name="description"
            type="text"
            step="0.01"
            placeholder="Entrez une description"
          >
            Description
          </FormField>
          <FormField
            name="amount"
            type="number"
            placeholder="Montant"
          >
            Montant
          </FormField>
          <Button type="submit" disabled={!isValid || isSubmitting}>
            Soumettre
          </Button>
        </form>
      )
      }
    </Formik>
  )
}
export default FormApp