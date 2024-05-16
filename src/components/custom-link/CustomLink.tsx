import { Link, LinkProps } from "react-router-dom";
import classes from "./CustomLink.module.css";
type CustomLinkProps = {
  children: React.ReactNode;
} & LinkProps;

export const CustomLink = ({ children, ...rest }: CustomLinkProps) => {
  return (
    <Link className={classes.container} {...rest}>
      {children}
    </Link>
  );
};
