import React, { useState } from "react";
import { useDispatch } from "react-redux";
export default function AddTodo (){
    let [value,setVaule]=useState("");
    let dispatch=useDispatch()
        return <div id="create-todo">
            <input 
                id="new-todo" 
                placeholder="What needs to be done?" 
                autoComplete="off" 
                type="text" 
                value={value} 
                onChange={
                    ({target})=>{
                        setVaule(target.value)
                    }
                }

                onKeyDown={({keyCode})=>{
                    // console.log(keyCode);   
                    // e.preventDefault();
                    if(keyCode === 13){
                        if(value.trim()){
                            console.log("我真棒")
                            dispatch({
                                type:"ADD_TODO",
                                value
                            })
                            setVaule("");   
                        } else {
                            alert("请输入事项")
                        }
                    }
                }}
                
            />
        </div>
}