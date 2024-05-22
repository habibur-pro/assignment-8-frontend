import { Checkbox } from "./checkbox";
export type TCheckboxItem = {
  label: string;
  value?: string;
};
const CheckboxItem = ({ label, value }: TCheckboxItem) => {
  return (
    <div className="flex items-center space-x-3 ">
      <Checkbox id={label} className="rounded-none" />
      <label
        htmlFor={label}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
};
export default CheckboxItem;
