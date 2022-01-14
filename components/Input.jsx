import classNames from "classnames"

const Input = (props) => {
  const { className, ...otherProps } = props;

  return (
    <input
      {...otherProps}
      className={classNames(
        "form-control",
        props.className
      )}
    />
  );
};
export default Input;