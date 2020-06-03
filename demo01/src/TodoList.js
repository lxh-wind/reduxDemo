import React, { Component } from 'react';
import store from './store';
import { changeInputAction, addItemAction, deleteItemAction, getMyListAction } from './store/actionCreators';

import TodoListUI from './TodoListUI';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      ...store.getState()
    }

    store.subscribe(this.storeChange.bind(this)) //订阅 redux 的状态 监听每次修改的结果
  }

  componentDidMount(){
    const action = getMyListAction();
    store.dispatch(action)
  }

  changeInputValue(e){
    const action = changeInputAction(e.target.value);
    store.dispatch(action)
  }

  storeChange(){
    this.setState({ ...store.getState() })
  }

  clickBtn(){
    store.dispatch(addItemAction())
  }

  deleteItem (i){
    store.dispatch(deleteItemAction(i))
  }

  render() {
    const { inputValue, list } = this.state;
    return (
      <TodoListUI
        inputValue={inputValue}
        list={list}
        changeInputValue={this.changeInputValue.bind(this)}
        clickBtn={this.clickBtn.bind(this)}
        deleteItem={this.deleteItem.bind(this)}
      />
    );
  }
}

export default TodoList;
