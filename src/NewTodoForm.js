import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./custompicker.css";
import DatePicker, { registerLocale }from "react-datepicker";
import plPL from 'date-fns/locale/en-GB';
import styled from "styled-components";
import { StyledBtn } from "./StyledBtn";
import { setColor, setFlexRow, setRem } from "./styles";
registerLocale('pl-PL', plPL);


class NewTodoForm extends Component {
  state = {
    NewTodo: "",
    important: false,
    finishDate: new Date(),
  }

  handleInputChange = e => {
    let name = e.target.name;
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      [name]: value
    });
  };

  handleAddTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.NewTodo, this.state.important, this.state.finishDate);
    this.setState({
      NewTodo: ""
    });
  };

  handleDateChange = date => {
    this.setState({
      finishDate: date
    });
  };

  render() {
    return (
      <Styled onSubmit={this.handleAddTodo}>
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
              Add Todo
            </StyledBtn>
          </div>
          <StyledCheckbox>
            <input
              id="important"
              name="important"
              type="checkbox"
              checked={this.state.important}
              onChange={this.handleInputChange}
            />
            <label className="label" htmlFor="important">
              Mark as Important<span className="span">Mark as Important</span>
            </label>
          </StyledCheckbox>

          <DatePicker
            selected={this.state.finishDate}
            onChange={this.handleDateChange}
            showTimeSelect
            timeIntervals={60}
            format="HH:mm"
            dateFormat="Pp"
            timeCaption="time"
            placeholderText="Click to select a date"
            minDate={new Date()}
            locale="pl-PL"
            isClearable={true}
            withPortal
            className="Datepicker"
          />
        </div>
      </Styled>
    );
  }
}

const Styled = styled.form`
  background-color: ${setColor.mainColor};
  padding: ${setRem(40)} 0;
  min-width: ${setRem(480)};
  max-width: 90%;
  margin: 0 auto;
  .container {
    width: 80%;
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

const StyledCheckbox = styled.div`
  margin-top: ${setRem(10)};

  input {
    display: none;
    cursor: pointer;
  }
  label {
    position: relative;
    color: transparent;
  }
  .label {
    .span {
      color: ${setColor.fontColor};
      vertical-align: bottom;
      margin-left: ${setRem(-130)};
      font-size: ${setRem(18)};
    }
  }
  label::before {
    content: "";
    -webkit-appearance: none;
    background-color: transparent;
    border: 2px solid ${setColor.btnColor};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: ${setRem(10)};
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    margin-right: ${setRem(5)};
  }
  input:checked + label:after {
    content: "";
    display: block;
    position: absolute;
    top: ${setRem(2)};
    left: ${setRem(9)};
    width: ${setRem(6)};
    height: ${setRem(14)};
    border: solid ${setColor.btnColor};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;
export default NewTodoForm;
