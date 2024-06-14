import React from "react";

const InputField = ({ label, name, type, value, id, onChange, disabled,placeholder }) => {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        type={type}
        id={id ? id : name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background"
      />
    </div>
  );
};

export default InputField;
