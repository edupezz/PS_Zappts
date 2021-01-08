import styled from 'styled-components';
import  {Button}  from '@material-ui/core'

export const SignUpContainer = styled.main`

    width: 50vw;
    display: flex;
    flex-flow: column;

    #lastLine {
        margin: 0 auto;
        text-transform: capitalize;
        font-size: 0.7rem;
}
`
export const TopBar = styled.div `

    display: flex;
    width: 50vw;
    height: 10vh;
`
export const TitleContainer = styled.div `

    display: flex;
    width: 50vw;
    max-height: 3vh;
    justify-content: flex-end;
    margin: 0 0 7vh 0;

    p{
        font-weight: 900;
        font-size: 1.4rem;
        padding-right: 7vw;
    }  
`

export const GreetingContainer = styled.div `

    width: 50vw;
    display: flex;
    justify-content: center;
    padding: 0 0 6vh 0;

    p{
        font-size: 1.6rem;
        color: #707070;
    }
`

export const FormContainer = styled.div `

    width: 50vw;
    display: flex;
    flex-flow: column;

    form{
        display: flex;
        flex-flow: column;
        justify-content: center;
        width: 30vw;
        padding: 0 10vw;
    }

    .MuiFormHelperText-root{
        font-size: 0.7rem;
    }

    .MuiInputBase-input{
        font-size: 1rem;
    }

    .makeStyles-root-5{
        margin: 7;
    }

    .MuiInputBase-input:invalid{
        padding-left: 1vw;
    }

    .MuiInputBase-input:valid{
        padding-left: 1vw;
    }
`

export const StyledButton = styled(Button) `

    && {
    width: 9vw;
    height: 5vh;
    color: white;
    margin: 2vh auto;
    font-size: 0.8rem;
    border-radius: 20px;
    background-color: #707070;
    text-transform: capitalize;

    :active{
            background-color: #707070;
        }
        :hover{
            background-color: #707070;
            color: #000;
        }

    }
`

export const LinesContainer = styled.div `

    width: 30vw;
    height: 3vh;
    display: flex;
    justify-content: space-evenly;
    padding: 0 10vw;

    span{
        color: #707070;
    }
`

export const LeftLine = styled.hr `

    display: flex;
    width: 10vw;
    height: 0.1vh;
    margin: 1vh 0;
    border-width: 0;
    background-color: lightgray;
`

export const RightLine = styled.hr `

    display: flex;
    width: 10vw;
    height: 0.1vh;
    margin: 1vh 0;
    border-width: 0;
    background-color: lightgray;
`

export const StyledGoogleButton = styled(Button)`

    &&{
        width: 14vw;
        height: auto;
        margin: 3vh auto;
        font-size: 0.8rem;
        border-radius: 20px;
        background-color: #fff;
        text-transform: inherit;
        box-shadow: 0px 0px 10px -5px rgba(0,0,0,1);
        -moz-box-shadow: 0px 0px 10px -5px rgba(0,0,0,1);
        -webkit-box-shadow: 0px 0px 10px -5px rgba(0,0,0,1);
    }
`

export const DisclaimerContainer = styled.div `

    width: 15vw;
    margin: 1vh auto 2vh auto;

    p{
        font-size: 0.7rem;
        color: #707070;
        text-align: center;
        margin-top: 1vh;
    }
`