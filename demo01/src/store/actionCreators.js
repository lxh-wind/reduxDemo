import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM, GET_LIST, GET_MY_LIST } from './actionTypes';
import axios from 'axios';

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const addItemAction = () => ({
  type: ADD_ITEM
})

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})
export const getListAction = (value) => ({
  type: GET_LIST,
  value
})


// thunk 写法
export const getTodList = () => {
  return (dispatch) => {
    axios.post(
      'https://api.apiopen.top/getWangYiNews'
    ).then(({data}) => {
      let arr = data.result.map(e=>{
          return e.title
      })
      dispatch(getListAction(arr))
    })
  }
}


export const getMyListAction = () => ({
  type: GET_MY_LIST
})




