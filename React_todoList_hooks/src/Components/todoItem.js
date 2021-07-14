import React, { useState,useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
export default function TodoItem(props){
    let [isEditing,setEditing]=useState(false);
    let dispatch=useDispatch();
    let {renderData}=props;
    let {isDone,id,title} =renderData;
    let staticTitle=useRef(title).current;
    let [tit,setTit]=useState(title);
    // console.log(staticTitle)
    let editP=useRef();
    useEffect(()=>{
        if(isEditing){
        editP.current.focus();
        }
    },[isEditing])
        return <li className={isEditing?"editing":""} key={id}>
            {/* 双向绑定数据使其动态切换的时候显示不同的样式 */}
                <div className={isDone?"done":"" }>
                  {isEditing?"":<input type="checkbox" className="check" checked={isDone} onChange={
                      ({target})=>{
                          dispatch({
                              type:"CHANGE_DONE",
                              id,
                              isDone:target.checked
                          })
                          console.log(isDone)
                      }

                  }/>}  
                 {/* 双击进入编辑状态 */}
                    <div className="display">
                        <div className="todo-content"  onDoubleClick={()=>{
                        setEditing(true);
                    }}>{tit}</div>
                        <span className="todo-destroy"
                        onClick={()=>{
                            // console.log(id);
                            dispatch({
                                type:"DELETE_TODO",
                                id,
                            })
                        }}
                        ></span>
                    </div>
                </div> 
                 <div className="edit">
                <input className="todo-input"
                ref={editP}
                value={tit}
                onChange={({target})=>{
                    setTit(target.value);
                }}
                onKeyDown={({keyCode})=>{
                    if(keyCode===13){ 
                    setEditing(false);
                    }
                }}
                onBlur={()=>{
                    if(tit.trim()){
                        setTit(tit)
                    }
                    else{
                        setTit(staticTitle);
                    }
                    dispatch({
                        type:"CHANGE_TITLE",
                        id,
                        tit,
                    })
                    setEditing(false)
                }}
                ></input>
                </div>
            </li>
}