import styled from "styled-components";
import {setRem, setColor} from "./styles.js";

export const StyledBtn = styled.button`
height: ${setRem(40)};
background-color: ${setColor.btnColor};
color: #fff;
border-radius: ${setRem(5)};
padding: ${setRem(10)};
font-size: ${setRem(16)};
margin-left: ${props => props.margin};
&:hover {
    background-color: ${setColor.btnHoverColor};
}
`
export const SmallBtn = styled(StyledBtn)`
height: ${setRem(28)};
padding: 0 10px;
font-size: ${setRem(12)};
`