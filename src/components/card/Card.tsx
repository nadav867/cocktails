import { ReactNode } from "react";
import classes from "./Card.module.css";
import clsx from "clsx";

export type CardProps = {
  children: ReactNode;
  onClick?: () => void;
};

export const Card = ({ children, onClick }: CardProps) => {
  return (
    <div
      onClick={onClick}
      className={clsx(classes.container, { [classes.pointer]: !!onClick })}
    >
      {children}
    </div>
  );
};
