import React from "react";

type FormGroupTypes = {
  isRequired?: boolean;
  children: React.ReactNode;
  label: string;
  id: string;
  className?: string;
};

const labelClasses =
  "text-sm indent-4 block text-gray-600 font-semibold mb-4 relative";
const requiredSpanClasses = "text-primary text-xl absolute -top-4";

const FormGroup = ({
  isRequired,
  children,
  label,
  id,
  className,
}: FormGroupTypes) => {
  return (
    <div className={`form-group ${className}`}>
      <label htmlFor={id} className={labelClasses}>
        <span>{label}</span>{" "}
        {isRequired && <span className={requiredSpanClasses}>*</span>}
      </label>
      {children}
    </div>
  );
};

export default FormGroup;
