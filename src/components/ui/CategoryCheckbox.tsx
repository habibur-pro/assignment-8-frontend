"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Checkbox } from "./checkbox";
import { queryGenerator } from "@/lib/utils";
import { setCategory } from "@/redux/features/querySlice";
export type TCheckboxItem = {
  label: string;
  value: string;
};

const CategoryCheckbox = ({ label, value }: TCheckboxItem) => {
  const category = useAppSelector((state) => state.query.category);
  const dispatch = useAppDispatch();
  return (
    <div className="flex items-center space-x-3 ">
      <Checkbox
        checked={category?.includes(value)}
        onCheckedChange={() => dispatch(setCategory(value))}
        id={label}
        className="rounded-none"
        value={value}
      />
      <label
        htmlFor={label}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
};
export default CategoryCheckbox;
