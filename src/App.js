import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {connect } from 'react-redux'
import {v4 as uuidv4} from 'uuid'
import { Button } from 'react-bootstrap'
import TodoReducers from './reducers/TodoReducers';
import {addTodo,deletTODO,completeTodo,editTodo} from './Action/Action'

class App extends Component{
  constructor (props){
    super(props);
    this.state={
      text:'',
      edit:false
    }

  }
  handleChange=(e)=>{
    this.setState({
      text:e.target.value
    })
  }
  addOrEdit = () => {
    if(this.state.edit){
        this.props.editNewTodo(this.state) // this.state win fama l todo eli editineha (text, id, complete) 
        this.setState({text: '', edit: false}) // reset lel this.state.text farra8neh 
        //this.state.edit to false (bech el button yarja3 add)
    }else{
        this.props.addNewTodo({ text: this.state.text, id: uuidv4(), complete: false})
        this.setState({text: '', edit: false}) 
    }
}
saveTodo = todo => {
  this.setState({...todo, edit: true})
}
  // editMode=(todo)=>{
  //   this.setState(todo)

  //   }
    
  
  render(){
     return (
    <div className="App">
      <div className="container header">
            <div className="titre">
                  <h1>TO-DO App!</h1>
                  <h4>Add New To DO</h4>
            </div>
            <div className="input">
                  <input type="text" className="form-control" name="text" value={this.state.text} placeholder="Enter Your texte" onChange={this.handleChange} aria-label="Username" aria-describedby="addon-wrapping"/>
            </div>      
            <div className="add">
                 
                  <button type="button" className="btn btn-primary" onClick={this.addOrEdit}>{this.state.edit? "edit":"Add" } </button>
                  
                  </div>
          </div>  
          <h4>Lest's Get Some Work Done</h4>  
          <div className="container list">
            {
              this.props.Alltodo.map(el=>
                <div className="boutton">
                  <Button className="btn"  onClick={()=>this.props.deleteTODO(el.id)}  variant="danger">Delete</Button> 
                  <Button className="btn"  onClick={()=>this.props.completTODO(el.id)} variant="success">{el.test? "Undo":"Complete"}</Button> 
                  <Button className="btn"  onClick={()=>this.saveTodo(el)}    variant="warning">Edit</Button>
                  <h4 className={el.test ?"inder" :"btn"}>{el.text}</h4>                  
                </div>)
            }
            </div>

            
      </div> 
  );
  }
 
}
const mapStateToProps = state =>{
  return {
    Alltodo:state.todos,
    id:state.id
  }
}
const mapDispatchToProps =dispatsh=>{
  return {
    addNewTodo:Todo=>dispatsh(addTodo(Todo)),
    deleteTODO:id=>dispatsh(deletTODO(id)),
    completTODO:id=>dispatsh(completeTodo(id)),
    editNewTodo:todo=>dispatsh(editTodo(todo))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
