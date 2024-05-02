import styled from "styled-components";



export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    width: 90%;
    height: 75%;
    overflow:auto;
    z-index: 1;
    letter-spacing: 0.15rem;
    
    
    

    table{
        border-collapse: collapse;
        width: 100%;
        height: 100%;
        table-layout: fixed;
        padding: 1rem;
        border-left:solid .75rem ${props => props.theme.colors.primary};
        border-bottom:solid .75rem ${props => props.theme.colors.primary};
        
        
        
        
        thead{
            background-color: ${props => props.theme.colors.primary};
            font-weight:bold;
            font-size: 1.5rem;
            height: 3rem;
            position: sticky;
            top: 0;
            
            input{
                    height:70%;
                    width:95%; 
                    box-sizing: border-box;
                    padding-block: none;
                    border: none;
                    padding-left: 20px;
                    background-color:${props => props.theme.colors.background2};
                    border-radius:5px;
                    transition: all 100ms;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

                    &:focus{
                        outline:none;
                        border-bottom: 5px solid ${props => props.theme.colors.secondary}
                    }
            }

            ::-webkit-input-placeholder{
                color: ${props => props.theme.colors.text2};
                font-weight: 600;
            }

            select {
            text-align: center;
            width: 95%;
            height: 70%;
            transition: all 100ms;
            background-color:${props => props.theme.colors.background2};
            border-radius:5px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
            color: ${props => props.theme.colors.text2};
            font-weight: 600;

            &:focus{
                        outline:none;
                        border-bottom: 5px solid ${props => props.theme.colors.secondary}
                    }

                    position:sticky;
        }
            }
            
        
        tbody {

            tr {
                padding: 10px;
                height: 50px;
                border-bottom: 0.2rem solid ${props => props.theme.colors.extra};
                text-align:center;
                transition: ease 100ms;
                font-weight:600;
                font-size:1.15rem;
                
                &:hover{
                    background-color:${props => props.theme.colors.extra};
                }

                td{
                    div{
                        height: 100%;
                        width:100%;
                        display:flex;
                        flex-direction: row;
                        justify-content:center;
                        align-items:center
                    }
                }
            }

        }
    
    }

    

    
`;


export const ButtonAction = styled.div`
    display: inline;
    font-size: 1.5rem;
    text-align:center;
    width: fit-content;
    
    svg{
        transition: transform 0.3s ease;
        cursor: pointer;
        &:hover{
            transform:scale(1.4);
            color: ${props => props.theme.colors.secondary};
        }
    }

    

    
`;

export const WrapperTitle = styled.div`
    display:flex;
    width:90%;
    justify-content:space-between;
    margin-bottom: 1rem;

    div{
        display:flex;
        justify-content:space-evenly;
        align-items:center;
        background-color:${props => props.theme.colors.secondary};
        width: 10rem;
        height: 2.5rem;
        border-radius: 1rem;
        font-weight:800;
        font-size: 1.1rem;
        transition: ease 0.2s all;
        cursor: pointer;

        svg{
            font-size: 1.5rem;
        }

        &:hover{
            transform:scale(1.1);
            box-shadow: rgba(0, 0, 0, 0.15) 0px -50px 36px -28px inset;
        }
    }
`;