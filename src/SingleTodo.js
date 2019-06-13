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
  render() {
    let rendered;
    if (!this.props.isEdited) {
      rendered = (
        <li className={this.props.className}>
          {" "}
          <span>{this.props.name}</span>
          <div>
            <SmallBtn onClick={() => this.props.remove(this.props.id)}>
              remove
            </SmallBtn>
            <SmallBtn
              onClick={() => this.props.edit(this.props.id, this.state.val)}
            >
              {this.props.isEdited ? "update" : "edit"}
            </SmallBtn>
          </div>
        </li>
      );
    } else {
      rendered = (
        <li className={this.props.className}>
          <form onSubmit={(e) => {e.preventDefault(); this.props.edit(this.props.id, this.state.val)}}>
            <input
              name="val"
              id="val"
              onChange={this.handleChange}
              value={this.state.val}
              type="text"
            />
            <div>
            <SmallBtn type="button" onClick={() => this.props.remove(this.props.id)}>
              remove
            </SmallBtn>
            <SmallBtn type="submit"
            >
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
  ${setFlexRow({ x: "space-between" })};
  padding: ${setRem(10)} ${setRem(20)};
  margin-top: ${setRem(20)};
  form{
    ${setFlexRow({ x: "space-between" })};
    width: 100%;
  }
`;
