import Button from "../components/Button"
import { useCallback } from "react"
import FormField from "../components/FormField.jsx"
import { Formik } from "formik"
import * as yup from "yup"
import "bootstrap/dist/css/bootstrap.css"
import Navbar from "../components/Navbar"

const initialValues = {
  description: "",
  amount: "",
}
const validationSchema = yup.object().shape({
  description: yup.string().required().label("description"),
  amount: yup.number().required().label("amount")
})

const Form = () => {
  const handleFormSubmit = useCallback(async (values) => {
    return true
  }, [])

  return (
    <>
      <Navbar />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, isValid, isSubmitting, errors }) =>
          console.log(errors) || (
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
    </>
  )
}

export default Form
