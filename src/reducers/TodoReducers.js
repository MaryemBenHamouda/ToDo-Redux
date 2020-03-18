import { ADD_TODO, DELET_TODO, COMPLET_TODO, EDIT_TODO} from '../Action/Types'

const TodoReducers =(state=[], action)=> {
    switch (action.type){
        case  ADD_TODO:
            return state.concat(action.payload)
        case DELET_TODO:
            return  state.filter(el=> el.id!==action.payload)
        case COMPLET_TODO:
            return state.map(el=> el.id===action.payload?{...el,test:!el.test}:el)
        case EDIT_TODO:
            return state.map(el=> el.id === action.payload.id ? action.payload : el)
        default:
            return state
        }
}
export default TodoReducers
