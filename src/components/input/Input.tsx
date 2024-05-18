import { InputHTMLAttributes, forwardRef } from "react";
import classes from "./Input.module.css";
import { UseFormRegisterReturn } from "react-hook-form";

export type InputProps = {
  label?: string;
  register?: UseFormRegisterReturn;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, register, ...rest }, ref) => {
    return (
      <div className={classes.container}>
        <input {...register} ref={ref} {...rest} />
        {label && <label htmlFor={rest.id}>{label}</label>}
      </div>
    );
  }
);
