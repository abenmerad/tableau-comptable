import { Field } from "formik"
import Input from "./Input"

const FormField = (props) => {
  const { children, as: Component = Input, ...otherProps } = props

  return (
    <div className="form-group p-2">
      <label>
        {children}
        <Field {...otherProps}>
          {({ field, meta: { touched, error } }) => (
            <>
              <Component {...field} {...otherProps} />
              {touched && error ? (
                <p className="text-danger">{error}</p>
              ) : null}
            </>
          )}
        </Field>
      </label>
    </div>
  )
}

export default FormField
