import React from 'react';
import { connect } from 'react-redux'
import { Input, Button, List } from 'antd';


const TodoList = (props) => {
  const {inputValue,list,handlerAdd,handlerChange,handlerDelete} = props
  console.log('list',list)
  return (
    <div className="App">
      <Input value={inputValue} onChange={handlerChange}></Input>
      <Button type="primary" onClick={handlerAdd}>add</Button>
      <List
      size="small"
      bordered
      dataSource={list}
      renderItem={(item,index) => <List.Item onClick={()=>{handlerDelete(index)}}>{item}</List.Item>}
      />
    </div>
  );
}

const mapStateToProps = (state)=>{
  return {
    inputValue:state.inputValue,
    list:state.list
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    handlerAdd(){
      dispatch({
        type:'input-add'
      })
    },
    handlerDelete(index){
      console.log(999,index)
      dispatch({
        type:'input-delete',
        index
      })

    },
    handlerChange(e){
      dispatch({
        type:'input-change',
        value:e.target.value
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
