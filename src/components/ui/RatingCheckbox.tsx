"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Checkbox } from "./checkbox";
import { queryGenerator } from "@/lib/utils";
import { setRating } from "@/redux/features/querySlice";
export type TCheckboxItem = {
  label: string;
  value?: string;
};

const RatingCheckbox = ({ label, value }: TCheckboxItem) => {
  const selector = useAppSelector((state) => state.query);
  const dispatch = useAppDispatch();
  const query = queryGenerator(selector);
  console.log(query);
  return (
    <div className="flex items-center space-x-3 ">
      <Checkbox
        onCheckedChange={() => dispatch(setRating(value))}
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
export default RatingCheckbox;
