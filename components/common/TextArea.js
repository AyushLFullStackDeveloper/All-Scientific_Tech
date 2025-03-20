const TextArea = ({ label, name, value, onChange, className }) => {
    return (
      <div className={`form-group ${className}`}>
        <label htmlFor={name}>{label}</label>
        <textarea id={name} name={name} value={value} onChange={onChange} rows="5" />
      </div>
    );
  };
  
  export default TextArea;
  