const TextField = ({ label, type = "text", name, value, onChange, required, className }) => {
    return (
      <div className={`form-group ${className}`}>
        <label htmlFor={name}>{label} {required && "*"}</label>
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={`Enter ${label.toLowerCase()}`}
        />
      </div>
    );
  };
  
  export default TextField;
  