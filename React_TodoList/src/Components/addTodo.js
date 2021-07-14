import React, { Component } from "react";
export default class AddTodo extends Component {
    state = {
        val:""
    }
    render() {
        let {val} = this.state;
        let {addData} = this.props;
        return <div id="create-todo">
            <input 
                id="new-todo" 
                placeholder="What needs to be done?" 
                autoComplete="off" 
                type="text" 
                value={val} 
                onChange={({target})=>{
                    this.setState({
                        val: target.value
                    });
                }}
                onKeyDown={({keyCode})=>{
                    // console.log(keyCode);   
                    // e.preventDefault();
                    if(keyCode === 13){
                        if(val.trim()){
                            addData(val);
                            this.setState({
                                val: ""
                            });
                        } else {
                            alert("请输入事项")
                        }
                    }
                }}
                
            />
        </div>
    }
}