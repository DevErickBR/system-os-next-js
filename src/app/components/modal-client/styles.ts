import { ButtonAction } from './../../clientes/styled';
import styled from "styled-components";

export const WrapperModal = styled.div`
    background-color: ${props => props.theme.colors.background + "BF"};
    top:0;
    bottom:0;
    left: 0;
    right:0;
    position:absolute;
    display:flex;
    align-items:center;
    justify-content:center;
    z-index: 99999;
`;

export const Wrapper = styled.div`
    background-color: ${props => props.theme.colors.extra2};
    width: 30%;
    height: 80%;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items: center;
    border: 0.5rem solid ${props => props.theme.colors.extra};
    border-radius:30px;

    input {
        width:75%;
        height: 3rem;
        padding: 1rem;
        border-radius: 2rem;
        border:none;
        transition: all 0.05s ease;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

        &:focus{
            outline:none;
        }
    }

    select {
        width:75%;
        height: 3rem;
        padding: 1rem;
        border-radius: 2rem;
        border:none;
        transition: all 0.05s ease;
        text-align:center;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        appearance:unset;
        cursor: pointer;

        &:hover{
            appearance:unset;
        }

        &:focus{
            outline:none;
        }
    }
 
    ::-webkit-input-placeholder{
    color: ${props => props.theme.colors.text2};
    font-size: 1rem;
    }

    button {
        background-color: ${props => props.theme.colors.secondary};
        display:flex;
        align-items:center;
        justify-content: center;
        gap:1rem;
        width:15rem;
        height: 2.5rem;
        border-radius:4rem;
        border:none;
        cursor: pointer;
        font-weight:bold;
        font-size:1.3rem;
        color:${props => props.theme.colors.text};
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        transition:all .1s ease;
        &:hover{
            transform:scale(1.1);
            color:#cde8ca;
        }
    }

     .back{
        &:hover{
            transform:scale(1.1);
            color:#ffb2a1;
        }
     }
`;