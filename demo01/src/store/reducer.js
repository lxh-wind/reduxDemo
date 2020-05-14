import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes';
const defaultState = {
  inputValue: '',
  list: []
};

export default (state = defaultState, action) => {   //方法函数
  switch(action.type){
    case CHANGE_INPUT_VALUE:{
      let newState = JSON.parse(JSON.stringify(state))
      newState.inputValue = action.value
      return newState;
    }
    case ADD_ITEM:{
      let newState = JSON.parse(JSON.stringify(state))
      newState.list.push(newState.inputValue)  //push新的内容到列表中去
      newState.inputValue = ''
      return newState
    }
    case DELETE_ITEM:{
      let newState = JSON.parse(JSON.stringify(state))
      newState.list.splice(action.index, 1)

      return newState;
    }
    case GET_LIST:{
      let newState = JSON.parse(JSON.stringify(state))
      newState.list = action.value
      return newState;
    }
  }
  return state;
}
