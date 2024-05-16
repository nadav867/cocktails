import { Input, InputProps } from "../../../../components";
import classes from "./FilterBar.module.css";

type FilterBarProps = {} & Pick<InputProps, "onChange" | "value">;

export const FilterBar = ({ onChange, value }: FilterBarProps) => {
  return (
    <div className={classes.container}>
      <Input
        onChange={onChange}
        value={value}
        placeholder="search cocktails..."
      />
    </div>
  );
};
