import { ReactNode } from "react";
import classes from "./main-layout.module.css";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}></div>
      <div className={classes.children}>{children}</div>
      <div className={classes.footer}></div>
    </div>
  );
};
