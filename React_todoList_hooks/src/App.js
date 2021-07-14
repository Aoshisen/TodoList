import React, { Fragment } from "react";
import "./static/css/index.css";
import AddTodo from "./Components/addTodo";
import { useSelector } from "react-redux";
import Todos from "./Components/todos"
import TodoState from "./Components/todoState";

export default function App () {
    // state = {

    //     data: [
    //         {
    //             id: 0,
    //             title: "今天晚上升颗星",
    //             isDone:false
    //         }, {
    //             id: 1,
    //             title: "本周给大家录10集补充知识",
    //             isDone:false
    //         }
    //     ]
    // }
    // addData=(newTodo)=>{
    //     let {data} = this.state;
    //     data.push({
    //         isDone:false,
    //         id: Date.now(),
    //         title: newTodo
    //     });
    //      this.setState({
    //         data
    //     });
    // }
    // removeData=(id)=>{
    //     let {data} = this.state;
    //     return this.setState({
    //         data:data.filter(item=>item.id!==id)
    //     });
    // }

    // //一些小问题,在用map的时候系统更希望你在执行完函数的时候返回一个东西，但是forEach不一样，这就是但村的一个遍历而已
    // changeDone=(id,done)=>{
    //     let {data}=this.state;
    //     data.forEach(item=>{
    //         item.isDone=(item.id===id?done:item.isDone)
    //     })
    //      this.setState({data});
    // }
    // changeTitle=(id,title)=>{
    //     let {data}=this.state;
    //     data.forEach(item=>{
    //         if(item.id===id){
    //             item.title=title
    //         }
    //     })
    //      this.setState({data});
    // }
    // clearDoneThing=()=>{
    //     let {data}=this.state;
    //     console.log("clearDoneThing")
     
    //     console.log(data)
    //     this.setState({
    //         data:data.filter((item)=>{
    //             return item.isDone===false;
    //         })
    //     })
    // }
    
    let data=useSelector(state=>state)
    console.log(data)
        return <div id="todoapp">
            <div className="title"><h1>todo</h1></div>
            <div className="content">
                <AddTodo />
            </div>
            {
                data.length>0?
                <Fragment>
                    <Todos />
                    <TodoState />
                </Fragment>
                :
                <Fragment>

                </Fragment>
            }
            
        </div>
}