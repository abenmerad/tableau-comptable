import classNames from "classnames"

const Input = (props) => {
  const { className, ...otherProps } = props

  return (
    <input
      {...otherProps}
      className={classNames(
        "form-control",
         className
      )}
    />
  )
}
export default Input