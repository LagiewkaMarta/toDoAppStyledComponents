import React, { Component } from "react";
import Styled from "./NewTodoForm";
import styled from "styled-components";
import SingleTodo from "./SingleTodo";
import {setBoxShadow, setColor, setRem} from "./styles";
const uuidv4 = require("uuid/v4");

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }
  //adding todo
  addTodo = name => {
    let todo = {
      name,
      id: uuidv4()
    };
 
    const copy = [...this.state.todos, todo];
    this.setState({
      todos: copy
    });
  };

//removing todo
  removeTodo = id => {
    const copy = [...this.state.todos];
    const filtered = copy.filter(el => el.id !== id);
    this.setState({ todos: filtered });
  }
  render() {
    return (
      <div className={this.props.className}>
        <div className="todoWrapper">
          <h1>Todo List!</h1>
          <h2>Featuring Styled Components <span role="img" aria-label="nail polish emoji">💅</span></h2>
          <ul>
            {this.state.todos.map(el => (
              <SingleTodo
                id={el.id}
                key={el.id}
                remove={this.removeTodo}
                name={el.name}
              />
            ))}
          </ul>
        </div>
        <Styled addTodo={this.addTodo} />
      </div>
    );
  }
}

const StyledTodoList = styled(TodoList)`
  background-color: ${setColor.mainColor};
  ${setBoxShadow({x:'13px', y:'13px', blur:'29px', spread:'5px', color:"#a0a4ba"})};
  min-width: ${setRem(480)};
  max-width: 40vw;
  margin: 0 auto;
  color: ${setColor.fontColor};
 
  .todoWrapper {
    width: 70%;
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
