import {createStore}    from "redux";
function reducer(state = [{
    id: 0,
    title: "今天晚上升颗星",
    isDone: false,
    isEditing:false

}, {
    id: 1,
    title: "本周给大家录10集补充知识",
    isDone: false,
    isEditing:false 
}], action) {
    switch (action.type){
        case "ADD_TODO":
            state=[{
                id:Date.now(),
                title: action.value,
                isDone: false,
                isEditing:false
            },...state]
           return state
        case "CHANGE_DONE":
            state.forEach((item,index)=>{
                if(item.id===action.id){
                    item.isDone=action.isDone
                }
            })
            return [...state];
            case "CHANGE_TITLE":
                state.forEach((item,index)=>{
                    if(item.id===action.id){
                        item.title=action.tit
                    }
                })
                return [...state];
            case "DELETE_TODO":
                // console.log(action)
                return state.filter(item=>item.id!==action.id)
                case "CLEAR_DONETHING":
                    return state.filter(item=>!item.isDone)    
        default:
            return state
    }

}

let store = createStore(reducer)
export default store