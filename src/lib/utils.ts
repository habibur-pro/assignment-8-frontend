import { TInitialState } from "@/redux/features/querySlice";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function queryGenerator<T>(obj: TInitialState): string {
  const queryParams: string[] = [];

  Object.keys(obj).forEach((key) => {
    const value = (obj as any)[key];
    if (Array.isArray(value)) {
      value.forEach((item: any) => {
        queryParams.push(
          `${encodeURIComponent(key)}=${encodeURIComponent(item)}`
        );
      });
    } else {
      queryParams.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      );
    }
  });

  return queryParams.join("&");
}
