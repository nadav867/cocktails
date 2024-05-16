import { ReactNode } from "react";
import classes from "./Card.module.css";
import clsx from "clsx";

export type CardProps = {
  children: ReactNode;
  pointer?: boolean;
};

export const Card = ({ children, pointer }: CardProps) => {
  return (
    <div className={clsx(classes.container, { [classes.pointer]: pointer })}>
      {children}
    </div>
  );
};
