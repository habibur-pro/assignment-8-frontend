import { createSlice } from "@reduxjs/toolkit";
export type TInitialState = {
  category?: Array<string>;
  rating?: Array<number>;
  minPrice?: number;
  maxPrice?: number;
};
const initialState: TInitialState = {
  category: [],
  rating: [],
  minPrice: 0,
  maxPrice: 0,
};

const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      if (state.category?.includes(action.payload)) {
        state.category = state?.category?.filter(
          (item) => item !== action.payload
        );
      } else {
        state?.category?.push(action.payload);
      }
    },
    setPriceRange: (state, action) => {
      state.minPrice = action.payload.minPrice;
      state.maxPrice = action.payload.maxPrice;
    },
    setRating: (state, action) => {
      if (state?.rating?.includes(action.payload)) {
        state.rating = state?.rating?.filter((item) => item !== action.payload);
      } else {
        state?.rating?.push(action.payload);
      }
    },
  },
});

export const { setCategory, setPriceRange, setRating } = querySlice.actions;
export default querySlice.reducer;
