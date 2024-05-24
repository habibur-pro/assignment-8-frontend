"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Checkbox } from "./checkbox";
import { queryGenerator } from "@/lib/utils";
import { setPriceRange } from "@/redux/features/querySlice";
export type TCheckboxItem = {
  label: string;
  maxPrice: number;
  minPrice: number;
};

const PriceRangeCheckbox = ({ label, maxPrice, minPrice }: TCheckboxItem) => {
  const dispatch = useAppDispatch();
  const selectorMaxPrice = useAppSelector((state) => state.query.maxPrice);
  const selectorMinPrice = useAppSelector((state) => state.query.minPrice);
  return (
    <div className="flex items-center space-x-3 ">
      <Checkbox
        checked={maxPrice === selectorMaxPrice && minPrice === selectorMinPrice}
        onCheckedChange={() => dispatch(setPriceRange({ maxPrice, minPrice }))}
        id={label}
        className="rounded-none"
        value={minPrice}
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
export default PriceRangeCheckbox;
