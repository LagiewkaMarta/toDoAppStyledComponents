import React, { Component } from "react";
import styled from "styled-components";
import { SmallBtn } from "./StyledBtn";
import { setFlexRow, setRem, setColor } from "./styles";

class SingleToDo extends Component {
  state = {
    val: this.props.name
  };
  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.edit(this.props.id, this.state.val);
  };
  handleRemove = () => {
    this.props.remove(this.props.id);
  };
  render() {
    const styleCompleted = {
      textDecoration: "line-through"
    };
    const styleInProgress = {
      textDecoration: "none"
    };
    const {
      id,
      completed,
      remove,
      name,
      edit,
      isEdited,
      toggle,
      className,
      important,
      date
    } = this.props;
    let rendered;
    if (!isEdited) {
      rendered = (
        <li className={className}>
          {" "}
          <span
            onClick={() => toggle(id)}
            style={completed ? styleCompleted : styleInProgress}
          >
            {name}
          </span>
          <div>
            <SmallBtn onClick={() => remove(id)}>remove</SmallBtn>
            <SmallBtn onClick={() => edit(id, this.state.val)}>
              {isEdited ? "update" : "edit"}
            </SmallBtn>
          </div>
          <span style={{ color: "#f9b907", textShadow: "1px 1px #8c6504" }}>
            {date.toDateString()}{" "}
            {date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}:
            {date.getMinutes() < 10
              ? `0${date.getMinutes()}`
              : date.getMinutes()}
          </span>
        </li>
      );
    } else {
      rendered = (
        <li className={this.props.className}>
          <form onSubmit={this.handleSubmit}>
            <input
              name="val"
              id="val"
              onChange={this.handleChange}
              value={this.state.val}
              type="text"
            />
            <div>
              <SmallBtn type="button" onClick={this.handleRemove}>
                remove
              </SmallBtn>
              <SmallBtn type="submit">
                {this.props.isEdited ? "update" : "edit"}
              </SmallBtn>
            </div>
          </form>
        </li>
      );
    }
    return rendered;
  }
}

export default styled(SingleToDo)`
  width: 100%;

  background-color: ${setColor.singleTodoColor};
  ${({ important }) =>
    important &&
    `background-color: ${setColor.accentColor};
    font-weight: bold;
  `};

  ${setFlexRow({ x: "space-between" })};
  padding: ${setRem(10)} ${setRem(20)};
  margin-top: ${setRem(20)};
  form {
    ${setFlexRow({ x: "space-between" })};
    width: 100%;
  }
`;
