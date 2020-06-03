import React from 'react'
import { connect } from 'react-redux';  //连接器

const TodoList = (props) => {
  const { inputValue, clickButton, inputChange, list } = props;
  return (
    <div>
      <div>
        <input
          value={inputValue}
          onChange={inputChange}
        />
        <button onClick={clickButton}>提交</button>
      </div>
      <ul>
        {
          list.map((item, i)=>{
            return <li key={i}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}

// 映射关系 把原来的state映射成组件中的props属性
const stateToProps = (state)=>{
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const dispatchToProps = (dispatch) => {
  return {
    inputChange(e){
      dispatch({
        type: 'change_input',
        value: e.target.value
      })
    },
    clickButton(){
      dispatch({type: 'add_item'})
    }
  }
}


export default connect(stateToProps, dispatchToProps)(TodoList);
