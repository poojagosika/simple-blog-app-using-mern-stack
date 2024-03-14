import React from "react";

const InputForm = ({ name, value, type, id, setValue }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {name}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        name={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
    </div>
  );
};

export default InputForm;
