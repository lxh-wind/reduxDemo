import { takeEvery, put } from 'redux-saga/effects';
import { GET_MY_LIST } from './actionTypes';
import { getListAction } from './actionCreators';
import axios from 'axios';

// generator
function* mySaga(){
  // 监听 GET_MY_LIST
  yield takeEvery(GET_MY_LIST, getList)
}

function* getList(){
  const res = yield axios.post('https://api.apiopen.top/getWangYiNews');
  let arr = res.data.result.map(e=>{
    return e.title
  })
  let action = getListAction(arr);
  yield put(action)
}

export default mySaga;
