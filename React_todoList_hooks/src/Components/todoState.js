import React from "react";
import { useDispatch, useSelector } from "react-redux";
export default function TodoState() {
     let data=useSelector(state=>state);
     let doneThing=data.filter(item=>item.isDone);
     let dispatch=useDispatch()
     return <div id="todo-stats">
            <span className="todo-count"><span className="number">{data.length-doneThing.length}</span><span className="word">项待完成</span></span>
           <span className="todo-clear" onClick={()=>{
        console.log("点击了删除");
        dispatch({
            type:"CLEAR_DONETHING"
        })
    }}><a>删除<span>{doneThing.length}</span> 已完成事项</a></span>
        </div> 

}