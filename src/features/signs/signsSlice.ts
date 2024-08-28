import { createSlice } from "@reduxjs/toolkit";
import { signResInterface } from "../../interfaces/interfaces";

interface singsState {
  horoscope: {
    aquarius: string;
    aries: string;
    cancer: string;
    capricorn: string;
    gemini: string;
    leo: string;
    libra: string;
    pisces: string;
    sagittarius: string;
    scorpio: string;
    taurus: string;
    virgo: string;
  } | null;
  status: string;
}

const initialState: singsState = {
  horoscope: null,
  status: "idle",
};

export const counterSlice = createSlice({
  name: "sign",
  initialState,
  reducers: {
    getSigns(state, action) {
      state.status = "pending";
    },
    getSignsSuccess(state, action) {
      state.status = "success";
      const payload = action.payload as signResInterface;
      state.horoscope = payload.horoscope;
      
    },
    getSignsError(state, action) {
      state.status = "error";
    },
  },
});

export const { getSigns, getSignsError, getSignsSuccess } =
  counterSlice.actions;
export default counterSlice.reducer;
