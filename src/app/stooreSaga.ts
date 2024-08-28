import { fork } from "redux-saga/effects";
import { watchGetSigns } from "../features/signs/signsSaga";
import  {all}  from "redux-saga/effects";

export default function* storeSaga(): Generator {
  yield all([
    fork(watchGetSigns),
  ]);
}