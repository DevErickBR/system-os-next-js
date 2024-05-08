import styled from "styled-components";

type Props = {
    isCurrent: boolean;
}

export const Wrapper = styled.div`
    display:flex;
    margin-top: 2rem;
    
    ul{
        display:flex;
        list-style: none;
        gap: 2rem;
        background-color: ${props => props.theme.colors.primary};
        padding: .6rem 2rem;
        border-radius: 1rem;
        align-items:center;
    };

`;

export const ListItem = styled.li<Props>`
    background-color: ${props => (props.isCurrent ? props.theme.colors.secondary : props.theme.colors.extra)};
    padding: .3em;
    border-radius: 1rem;
    a {
        text-decoration: none;
        color:${props => props.theme.colors.text};
    }
`;