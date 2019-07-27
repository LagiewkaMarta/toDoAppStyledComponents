import React, { Component } from "react";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Styled from "./NewTodoForm";
import styled from "styled-components";
import SingleTodo from "./SingleTodo";
import {setBoxShadow, setColor, setRem} from "./styles";
const uuidv4 = require("uuid/v4");

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      open: false
    };
  }
  //opening snackbar 
   handleOpenSnackbar = () => {
    this.setState({
      open: true
    })
  }
    //closing snackbar 
    handleCloseSnackbar = () => {
      this.setState({
        open: false
      })
    }
  //adding todo
  addTodo = (name, important, date) => {
    const todo = {
      name,
      date,
      id: uuidv4(),
      isEdited: false, 
      completed: false,
      important
    };
    if(todo.name.length > 0){
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }
  };

//removing todo
  removeTodo = id => {
    const filtered =  [...this.state.todos].filter(el => el.id !== id);
    this.setState({ todos: filtered, open:true });
  };

  //editing todo 
  editTodo = (id, val) => {
    let copy = this.state.todos.map(todo => {
      if (todo.id === id){
        return {...todo, name: val, isEdited: !todo.isEdited}
      }
      return todo
    }
      )
      this.setState({
        todos: copy,
      })
  }
  //toggling todo 
  toggleTodo = (id) => {
    let copy = this.state.todos.map(todo => {
      if (todo.id === id){
        return {...todo, completed: !todo.completed}
      }
      return todo
    }
      )
      this.setState({
        todos: copy
      })
  }
  render() {

    return (
      <>
      <div className={this.props.className}>
        <div className="todoWrapper">
          <h1>Todo List!</h1>
          <h2>Featuring Styled Components <span role="img" aria-label="nail polish emoji">💅</span></h2>
          <ul>
            {this.state.todos.map(el => (
              <SingleTodo
                id={el.id}
                key={el.id}
                completed={el.completed}
                remove={this.removeTodo}
                name={el.name}
                edit={this.editTodo}
                isEdited={el.isEdited}
                toggle={this.toggleTodo}
                important={el.important}
                date={el.date}
              />
            ))}
          </ul>
        </div>
        <Styled addTodo={this.addTodo} />
      </div>
      <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={this.state.open}
      autoHideDuration={3000}
      onClose={this.handleCloseSnackbar}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={<span id="message-id">Todo removed!</span>}
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={this.handleCloseSnackbar}
        >
          <CloseIcon />
        </IconButton>,
      ]} />


      </>
    );
  }
}

const StyledTodoList = styled(TodoList)`
  background-color: ${setColor.mainColor};
  ${setBoxShadow({x:'13px', y:'13px', blur:'29px', spread:'5px', color:"#a0a4ba"})};
  min-width: ${setRem(480)};
  max-width: 40vw;
  margin: 10vh auto;
  padding-top: 3vh;
  color: ${setColor.fontColor};
 
  .todoWrapper {
    width: 90%;
    margin: 0 auto;
    h2 {
    font-size: ${setRem(22)};
    margin-top: ${setRem(10)};
    span {
      font-size: ${setRem(26)};
    }
  }
  }
  ul {
    list-style: none;
    
  }
`;
export default StyledTodoList;
