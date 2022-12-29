import axios from "axios";
import {call, put} from "redux-saga/effects";

export function* sagaWorker(props) {
  const res = yield call(http, props);
  yield put({
    type: props.action,
    payload: res.data
  });
}

export default async function http(props) {
  return axios({
    method: props.type ? props.type : "GET",
    url: props.endpoint,
    data: props.data,
    timeout: 1000 * 60 * 2,
    headers: {
      "Content-Type": "application/json",
      ...(props.headers ? props.headers : {}),
    },
    responseType: props.responseType ? props.responseType : 'json'
  })
    .then((res) => res)
    .catch((error) => error);
}
