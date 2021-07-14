import React, { Component} from "react";
export default class TodoState extends Component {
    render(){
        let {data,clearDoneThing}=this.props
        let doneThing=data.filter(item=>item.isDone===true
        )
        return <div id="todo-stats">
            <span className="todo-count"><span className="number">{(data.length)-(doneThing.length)}</span><span className="word">项待完成</span></span>
    <span className="todo-clear" onClick={()=>{
        console.log("点击了删除")
        clearDoneThing();
    }}><a>删除<span>{doneThing.length}</span> 已完成事项</a></span>
        </div>
    }

}