import {ADD_TODO} from './Types'
import {DELET_TODO} from'./Types'
import{COMPLET_TODO} from './Types'
import {EDIT_TODO} from './Types'

export const addTodo= newtodo=>{
    return {
        type: ADD_TODO ,
        payload: newtodo
    }
}

export const deletTODO =id=>{
    return{
        type: DELET_TODO,
        payload:id
    }
}

export const completeTodo=id=>{
    return{
        type:COMPLET_TODO,
        payload:id
    }
}
export const editTodo=todo=>{
    return{
        type:EDIT_TODO,
        payload:todo
    }
}


