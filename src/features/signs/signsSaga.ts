import { getSignsError, getSignsSuccess } from "./signsSlice";
import { call, put } from "redux-saga/effects";
import { takeLatest } from "redux-saga/effects";
import type { PayloadAction } from "@reduxjs/toolkit";
import { signResInterface } from "../../interfaces/interfaces";

//api
import { getSigns } from "../../api/signs/signsApi";




function* getSignsSaga(action: PayloadAction): Generator {
  try {
    const language: string = action.payload + "";
    const response = (yield call(getSigns, language)) as signResInterface;
    yield put(getSignsSuccess(response));
  } catch (error) {
    yield put(getSignsError("Error"));
  }
}

export function* watchGetSigns() {
  yield takeLatest("sign/getSigns", getSignsSaga);
}
