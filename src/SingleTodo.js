import React from "react";
import styled from "styled-components";
import { SmallBtn } from "./StyledBtn";
import {setFlexRow, setRem, setColor} from "./styles";

function SingleToDo({ className, name, id, remove }) {
  return (
    <li className={className}>
      <span>{name}</span>
      <SmallBtn onClick={() => remove(id)}>remove</SmallBtn>
    </li>
  );
}

export default styled(SingleToDo)`
  width: 100%;
  background-color: ${setColor.singleTodoColor};
  ${setFlexRow({x:'space-between'})};
  padding: ${setRem(10)} ${setRem(20)};
  margin-top: ${setRem(20)};
`;
