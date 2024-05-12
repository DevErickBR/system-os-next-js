import styled from "styled-components";

export const Wrapper = styled.div`
    @media (max-width: 800px) {
        display:flex;
        column-gap: 1rem;
        width: 100%;
        height: 4rem;
        overflow-x: scroll;
        &::-webkit-scrollbar{
            display: none;
        };
    }


    background-color: ${props => props.theme.colors.primary};
    width: 4rem;
    height: 100vh;
    z-index: 100;

    
`;