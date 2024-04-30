import styled from "styled-components";

export const Wrapper = styled.div`
    width: 90%;
    height: 60%;
    overflow:auto;
    z-index: 1;
    

    table{
        border-collapse: collapse;
        width: 100%;
        height: 100%;
        table-layout: fixed;
        padding: 1rem;
        
        
        
        thead{
            background-color: ${props => props.theme.colors.extra};
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
                border-bottom: 1px solid red;
                text-align:center;
                td .actions{
                    display: flex;
                    flex-direction: row;
                    div{
                        width: 200px;
                    }
                }
            }
        }
    
    }

    
`;
