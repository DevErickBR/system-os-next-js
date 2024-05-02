import styled from "styled-components";

type Props = {
    coment: string;
}

export const Wrapper = styled.div<Props>`
    width: 100%;
    height: 4rem; 
    justify-content: center;
    align-items: center;
    background-color:transparent;
    cursor: pointer;
    color: ${props => props.theme.colors.text};
    transition: all 200ms;
    position:relative;
    border-bottom: 2px solid ${props => props.theme.colors.extra};
    background-color: ${props => props.theme.colors.primary};
    display:flex;

    &:after{
        content: ${props => `'${props.coment}'`};
        position:absolute;
        transform: translateX(-6rem);
        background-color:${props => props.theme.colors.secondary};
        color:${props => props.theme.colors.text};
        height: fit-content;
        width: fit-content;
        padding: 0.5rem;
        font-weight:600;
        display: flex;
        justify-content: center;
        align-items:center;
        border-radius: 10px;
        transition: ease-out 300ms;
        opacity: 0;
        z-index: -1;
        text-align: center;

    }   
    
    &:hover{
        color: ${props => props.theme.colors.secondary}; 

            &:after{
                transform: translateX(6rem);
                opacity: 1;
            }
    }

    svg{
        font-size: 2rem;
        background-color:transparent;
    }

    
    
    
`;