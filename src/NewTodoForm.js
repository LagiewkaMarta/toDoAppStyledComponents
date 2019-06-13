import React, { Component } from "react";
import styled from "styled-components";
import { StyledBtn } from "./StyledBtn";
import { setColor, setFlexRow, setRem } from "./styles";

class NewTodoForm extends Component {
  state = {
    NewTodo: ""
  };
  handleInputChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  handleAddTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.NewTodo);
    this.setState({
      NewTodo: ""
    });
  };
  render() {
    return (
      <Styled onSubmit={this.props.add}>
        <div className="container">
          <h3>New Todo</h3>
          <div className="input-container">
            <input
              onChange={e => {
                this.handleInputChange(e);
              }}
              name="NewTodo"
              value={this.state.NewTodo}
              type="text"
            />
            <StyledBtn type="submit" margin="20px">
              add todo
            </StyledBtn>
          </div>
        </div>
      </Styled>
    );
  }
}

const Styled = styled.form`
  background-color: ${setColor.mainColor};
  padding: ${setRem(40)} 0;
  min-width: ${setRem(480)};
  max-width: 40vw;
  margin: 0 auto;
  .container {
    width: 70%;
    margin: 0 auto;
    padding: 0 ${setRem(5)};
    h3 {
      text-align: left;
    }
    .input-container {
      ${setFlexRow({ x: "space-between" })};
      margin-top: ${setRem(2)};
      input {
        height: ${setRem(40)};
        width: ${setRem(180)};
      }
    }
  }
`;
export default NewTodoForm;
