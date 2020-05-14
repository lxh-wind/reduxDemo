import React from 'react';
import {Input, Button, List } from 'antd';
import 'antd/dist/antd.css'


// 无状态组件其实就是一个函数（方法）
const TodoListUI = (props) => {
  return (
    <div style={{margin:'10px'}}>
      <div>
          <Input
            value={props.inputValue}
            style={{ width:'250px', marginRight:'10px'}}
            onChange={props.changeInputValue}
          />
          <Button type="primary" onClick={props.clickBtn}>增加12312</Button>
      </div>
      <div style={{margin:'10px 0',width:'400px'}}>
        <List
          bordered
          dataSource={props.list}
          renderItem={(item, i)=>(<List.Item onClick={()=>props.deleteItem(i)}>{item}</List.Item>)}
        />
      </div>
    </div>
  );
}
export default TodoListUI;

