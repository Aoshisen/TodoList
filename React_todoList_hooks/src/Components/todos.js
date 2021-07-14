import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./todoItem"
export default function Todos(){
    let data=useSelector(state=>state)
        return <ul id="todo-list">
           {data.map(item=>{
               return <TodoItem renderData={item} key={item.id}/>
           })}
        </ul>
}