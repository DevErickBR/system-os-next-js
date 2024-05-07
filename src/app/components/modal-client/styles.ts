import { ButtonAction, Wrapper } from './../../clientes/styled';
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
    gap: 3rem;
    z-index: 99999;
`;

export const WrapperInfo = styled.div`
    background-color: ${props => props.theme.colors.extra2};
    width: 30%;
    height: 80%;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items: center;
    text-align:center;
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

    .check{
        display: flex;
        align-items:center;
        gap: 2rem;
        input {
            width: 1rem;
            height: 1rem;
            cursor: pointer;
            box-shadow:none;
        }
    }
`;

export const WrapperList = styled.div`
    background-color: ${props => props.theme.colors.extra2};
    width: 65%;
    height: 80%;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:space-between;
    text-align:center;
    border: 0.5rem solid ${props => props.theme.colors.extra};
    border-radius:30px;
    
    .headerList{
        height: 10%;
        width: 100%;
        display: flex;
        align-items:center;
        justify-content:center
    }

    .bodyList{
        height:90%;
        width: 100%;
        display:flex;
        flex-direction: column;
        align-items: center;
        

        ul{
            width: 100%;
            height: 100%;
            overflow: auto;
            div{
                margin-right: 1rem;
                li{
                    display: flex;
                    padding: 0.5rem;
                    border-radius: 4rem;
                    width:fit-content;
                    background-color: ${props => props.theme.colors.background2};
                    color: ${props => props.theme.colors.text2};
                    list-style: none;
                    text-align:start;
                    margin-left: 1rem;
                    white-space: nowrap;
                    gap: 1rem;
                    align-items:center;
                    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
                }
                svg{
                    font-size:1.3rem;
                    color: #ffb2a1;
                    &:hover{
                        cursor: pointer;
                    }
                }
            }
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
                    margin: 1rem;
                }
        
    }
`;
