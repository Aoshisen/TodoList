import React, { Component } from "react";
import Li from "./li";
export default class Todos extends Component {
    render() {
        let {data} = this.props;
        return <ul id="todo-list">
           {data.map(item=>{
               return <Li 
                   key={item.id}
                   {...this.props}
                   data = {item}
               />
           })}
        </ul>
    }
}