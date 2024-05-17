import { ButtonHTMLAttributes } from "react";
import classes from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={classes.container} {...props}>
      {children}
    </button>
  );
};
