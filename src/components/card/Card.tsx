import { ReactNode } from "react";
import classes from "./Card.module.css";

export type CardProps = {
  children: ReactNode;
};

export const Card = ({ children }: CardProps) => {
  return <div className={classes.container}>{children}</div>;
};
