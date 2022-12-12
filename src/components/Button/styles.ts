import styled, { css } from "styled-components";
import { IButtonStyled } from "./types";

export const ButtonContainer = styled.button<IButtonStyled>`
    background-color: #CEF6F5;
    color: #FFFF;
    border: none;
    padding: 2rem;
    font-size: 3rem;
    cursor: pointer;

    ${({ color }) => color && css`
        background-color: ${color};
    `}

    &:hover {
        opacity: .8;
    }
`