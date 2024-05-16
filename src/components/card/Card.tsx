import { ReactNode } from "react";
import classes from "./Card.module.css";

export type CardProps = {
  children: ReactNode;
};

export const Card = ({ children }: CardProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.title}></div>
        <div className={classes.body}>{children}</div>
      </div>
    </div>
  );
};
