const defaultState = {
  inputValue: '哈哈哈哈哈哈',
  list: []
}

export default (state = defaultState, action)=>{
  if(action.type === 'change_input'){
    // let newState = JSON.parse(JSON.stringify(state))
    let newState = { ...state }
    newState.inputValue = action.value
    return newState
  }else if(action.type === 'add_item'){
    let newState = { ...state }
    if(newState.inputValue){
      newState.list.push(newState.inputValue)
      newState.inputValue = '';
    }
    return newState
  }
  return state
}
