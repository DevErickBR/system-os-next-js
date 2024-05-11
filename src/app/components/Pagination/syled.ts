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
        background-color: ${props => props.theme.colors.primary};
        padding: .6rem 2rem;
        border-radius: 1rem;
        align-items:center;
        gap: .3rem;
        
    };

`;

export const ListItem = styled.li<Props>`
    background-color: ${props => (props.isCurrent ? props.theme.colors.secondary : props.theme.colors.extra)};
    padding: .6rem;
    border:solid 2px ${props => props.theme.colors.secondary};
    border-radius: 0.5rem;
    width:100%;
        height:100%;
    a {
        text-decoration: none;
        color:${props => props.theme.colors.text};
        width:100%;
        height:100%;
    }
`;