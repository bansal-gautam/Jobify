const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="form-input"
        autoComplete={
          type === "password"
            ? "current-password"
            : type === "email"
            ? "username"
            : undefined
        }
      />
    </div>
  );
};
export default FormRow;
