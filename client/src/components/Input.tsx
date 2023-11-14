import React, { useRef } from "react";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface InputProps {
  id: string;
  label?: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  register,
  disabled,
  errors,
  required,
}) => {
  return (
    <div className="w-full relative">
      <label htmlFor={id}>{label}</label>
      <input
        className={`peer w-full p-4 pt-6 font-light bg-white border-2 text-black rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed 
        ${errors[id] ? "border-red-400" : "border-neutral-300"} 
        ${errors[id] ? "focus:border-red-400" : "focus:border-black"}
        `}
        disabled={disabled}
        id={id}
        type={type}
        placeholder=" "
        {...register(id, { required })}
      />
    </div>
  );
};

export default Input;
