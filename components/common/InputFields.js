const InputField = ({ label, type, id, name, value, onChange, required }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label} {required && "*"}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputField;
