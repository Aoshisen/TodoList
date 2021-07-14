import React, { Component, createRef } from "react";
export default class Li extends Component {
    state={
        isEditing:false,
        staticTitle:this.props.data.title,
    }
    editP=createRef();

    //因为onDoubleClick里面的方法式异步执行的，所以如果在双击的函数里面写让editP.current这个input获得焦点，同时组件更新重新渲染视图，这里设置的获得焦点在更新之后的视图中就不复存在了，
    //所以要在组件挂载或者式组件更新的时候执行这个获得焦点的逻辑
    componentDidUpdate(prevProps,prevState){
        this.editP.current.focus();
    }
    //处理删除完全部内容之后会出现空input框的状况
    render() {
        let {isEditing}=this.state;
        let {data,removeData,changeDone,changeTitle} = this.props;
        let {id,title,isDone} = data; 
        // console.log(isDone)
        return <li className={isEditing?"editing":""}>
            {/* 双向绑定数据使其动态切换的时候显示不同的样式 */}
                <div className={"todo "+(isDone?"done":"")}>
                  {isEditing?"":
                                   <input type="checkbox" className="check" checked={isDone} 
                                   onChange={({target})=>{
                                       changeDone(id,target.checked)
                                   }}
                                   />
                  }  
                 {/* 双击进入编辑状态 */}
                    <div className="display" onDoubleClick={()=>{
                        this.setState({
                            isEditing:true
                        })
                        //让编辑状态的input获得焦点
                        console.log(this.editP.current.value)
                    }}>
                        <div className="todo-content">{title}</div>
                        <span 
                            className="todo-destroy"
                            onClick={()=>{
                                removeData(id) 
                            }}
                        ></span>
                    </div>
                </div>
                <div  className="edit">
                <input className="todo-input"
                ref={this.editP}
                value={title}
                // onFocus={()=>{
                //     console.log("我获得焦点拉")
                // }}
                onChange={({target})=>{
                    changeTitle(id,target.value)
                }}
                onKeyDown={({keyCode})=>{
                    // console.log(target)
                    if(keyCode===13){
                    this.editP.current.blur();
                    }
                }}
                onBlur={()=>{
                    if(!title.trim()){
                        changeTitle(id,this.state.staticTitle);
                    }
                    this.setState({
                        isEditing:false
                    }) 
                    console.log("我失去焦点拉")

                }}
                ></input>
                </div>
                
            </li>
    }
}