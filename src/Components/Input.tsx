import React, { ReactNode } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import InputError from "./InputError";

interface InputProps {
  type: string;
  register: UseFormRegister<any>;
  children?: ReactNode;
  className?: string;
  error: FieldError;
  label: string;
  name: string;
}

const Input: React.FC<InputProps> = ({
  type,
  register,
  error,
  label,
  name,
}) => {
  return (
    <div className="flex flex-col space-y-1 w-full">
      <label>{label}</label>
      <input type={type} className=""  {...register(name)} />
      {error && <InputError message={error.message}/>}
    </div>
  );
};

export default Input;
