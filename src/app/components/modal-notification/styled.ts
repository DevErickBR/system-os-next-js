import styled from "styled-components";



export const WrapperNotification = styled.div`
    width:20rem;
    height:3rem;
    z-index: 500;
    position:absolute;
    background-color: ${props => props.theme.colors.secondary + '80'};
    padding: 1rem;
    display:flex;
    align-items:center;
    justify-content: center;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 1rem 0 0 1rem;
    bottom: 0;
    right: 0;
    transform: translateY(-3rem);
    overflow:hidden;

    @keyframes moveBar {
        to{transform: translateX(0)}
        from{transform: translateX(100%)}
    }

    &::after{
        
        content: '';
        width: 100%;
        height: 0.3rem;
        background-color: #83E509;
        position:absolute;
        bottom: 0;
        animation-name: moveBar;
        animation-duration: 2s;
    }
`;