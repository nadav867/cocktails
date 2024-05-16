import { InputHTMLAttributes } from "react";
import classes from "./Input.module.css";

export type InputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ label, ...rest }: InputProps) => {
  return (
    <div className={classes.container}>
      <input {...rest} />
      {label && <label htmlFor={rest.id}>{label}</label>}
    </div>
  );
};
