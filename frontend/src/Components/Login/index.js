import React, {useState, useEffect} from 'react';

import { Link } from 'react-router-dom';

import { 
    StyledGoogleButton,
    GreetingContainer,
    ResetPwdContainer,
    LoginContainer,
    TitleContainer,
    LinesContainer,
    FormContainer,
    StyledButton,
    RightLine,
    LeftLine,
    TopBar
} from './style';

import { TextField, FormControl } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { FcGoogle } from 'react-icons/fc'

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
    },
}));

export default function Login(props){

    const classes = useStyles();

    const [userError, setUserError] = useState('primary');
    const [pwdError, setPwdError] = useState('primary')
    const [btnError, setBtnError] = useState(false);
    const [userHelpText, setUserHelpText] = useState(' ');
    const [pwdHelpText, setPwdHelpText] = useState(' ')
    const [formValues, setFormValues] = useState({username: '',password: ''})
    
    useEffect( () => {

        if(formValues.username.length < 3 || !formValues.username.includes('@') ){
            setUserError('secondary')
            setUserHelpText('O e-mail está incorreto')
        } else if (!formValues.username){
            setUserError('secondary')
            setUserHelpText('Este campo não pode ser vazio')
        } else{
            setUserError('primary')
            setUserHelpText(' ')
        }

        if(!formValues.password){
            setPwdError('secondary')
            setPwdHelpText('Este campo não pode ser vazio')
        } else {
            setPwdError('primary')
            setPwdHelpText(' ')
        }   

        if(
        (formValues.username.length >= 3 && formValues.username.includes('@')) &&
        (formValues.password !== "")){
            setBtnError(false)
        }else {
            setBtnError(true)
        }

    },[formValues.username, formValues.password, btnError])

    const handleInput = event =>{

        const userValues = {...formValues};
        userValues[event.target.name] = event.target.value;

        setFormValues(userValues)
    }

    return(
        <LoginContainer>

            <TopBar></TopBar>
            <TitleContainer>
                <p>Invision</p>
            </TitleContainer>

            <GreetingContainer>
                <p>Welcome to Invision</p>
            </GreetingContainer>

            <FormContainer>
                <form className={classes.root} noValidate  autoComplete="off">
                    <FormControl>
                        <TextField
                            required
                            fullWidth
                            type="email"
                            name="username"
                            color={userError}
                            onChange={ handleInput }
                            helperText={userHelpText}
                            label="Users name or Email"
                            value={formValues.username}
                        />
                        </FormControl>
                        <FormControl>
                            <TextField
                                required
                                fullWidth
                                type="password"
                                name="password"
                                color={pwdError}
                                label="Password"
                                onChange={handleInput}
                                helperText={pwdHelpText}
                                value={formValues.password}
                        />
                    </FormControl>
                </form>

                <ResetPwdContainer>
                    <p>Forgot password?</p>
                </ResetPwdContainer>

                <StyledButton disabled={btnError}>Sign In</StyledButton>

                <LinesContainer>
                    <LeftLine />
                        <span>Or</span>
                    <RightLine />
                </LinesContainer>

                <StyledGoogleButton startIcon={<FcGoogle />}>
                    Sign in with Google
                </StyledGoogleButton>

                <p id="lastLine">New Invision? 
                    <Link to="/signup">
                        <span>Create Account</span>
                    </Link>
                </p>

            </FormContainer>
        </LoginContainer>
    )
}