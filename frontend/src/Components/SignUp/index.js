import React, {useState, useEffect} from 'react';

import { Link } from 'react-router-dom';

import { 
    DisclaimerContainer,
    StyledGoogleButton,
    GreetingContainer,
    SignUpContainer,
    TitleContainer,
    LinesContainer,
    FormContainer,
    StyledButton,
    RightLine,
    LeftLine,
    TopBar
} from './styles';

import { TextField, FormControl } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { FcGoogle } from 'react-icons/fc'

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(0.5),
      },
    },
}));

export default function SignUp(){

    const classes = useStyles();

    const [newUserError, setNewUserError] = useState('primary');
    const [newMailError, setNewMailError] = useState('primary');
    const [newPwdError, setNewPwdError] = useState('primary');
    const [nameHelpText, setNameHelpText] = useState(' ');
    const [mailHelpText, setMailHelpText] = useState(' ');
    const [pwdHelpText, setPwdHelpText] = useState(' ');
    const [btnError, setBtnError] = useState(false);
    

    const [formValues, setFormValues] = useState({
        newname: '',
        newmail: '',
        newpassword: ''
    })
    
    useEffect( () => {

        if(!formValues.newname){
            setNewUserError('secondary')
            setNameHelpText('Este campo não pode ser vazio')
        } else {
            setNewUserError('primary')
            setNameHelpText(' ')
        }

        if(formValues.newmail.length < 3 || !formValues.newmail.includes('@') ){
            setNewMailError('secondary')
            setMailHelpText('O e-mail está incorreto')
        } else if (!formValues.newname){
            setNewMailError('secondary')
            setMailHelpText('Este campo não pode ser vazio')
        } else{
            setNewMailError('primary')
            setMailHelpText(' ')
        }

        if(!formValues.newpassword){
            setNewPwdError('secondary')
            setPwdHelpText('Este campo não pode ser vazio')
        } else if(formValues.newpassword.length < 6){
            setNewPwdError('secondary')
            setPwdHelpText('A senha não pode ter menos de 6 caracteres');
        } else {
            setNewPwdError('primary')
            setPwdHelpText(' ')
        }

        if(
            (formValues.newmail.length > 3 && formValues.newmail.includes('@'))
            &&
            (formValues.newpassword && formValues.newpassword.length >= 6)
            &&
            (formValues.newname)){
                setBtnError(false)
            } else {
                setBtnError(true)
            }

    },[formValues.newname, formValues.newpassword, formValues.newmail])

    const handleInput = event =>{

        const userValues = {...formValues};
        userValues[event.target.name] = event.target.value;

        setFormValues(userValues)
    }

    return(
        <SignUpContainer>

            <TopBar />
            <TitleContainer>
                <p>Invision</p>
            </TitleContainer>

            <GreetingContainer>
                <p>Getting Started</p>
            </GreetingContainer>

            <FormContainer>
                <form className={classes.root} autoComplete="off" noValidate>
                    <FormControl>
                        <TextField
                            required
                            fullWidth
                            type="text"
                            name="newname"
                            label="Full Name"
                            color={newUserError}
                            onChange={ handleInput }
                            helperText={nameHelpText}
                            value={formValues.newname}
                        />
                    </FormControl>
                    <FormControl>
                        <TextField
                            required
                            fullWidth
                            type="email"
                            name="newmail"
                            color={newMailError}
                            onChange={handleInput}
                            helperText={mailHelpText}
                            value={formValues.newmail}
                            label="Users name or Email"
                        />
                    </FormControl>
                    <FormControl>
                        <TextField
                            required
                            fullWidth
                            type="password"
                            name="newpassword"
                            color={newPwdError}
                            onChange={handleInput}
                            label="Create Password"
                            helperText={pwdHelpText}
                            value={formValues.newpassword}
                        />
                    </FormControl>
                </form>

                <StyledButton disabled={btnError}>Sign Up</StyledButton>

                <LinesContainer>
                    <LeftLine />
                        <span>Or</span>
                    <RightLine />
                </LinesContainer>

                <StyledGoogleButton startIcon={<FcGoogle />}>
                    Sign in with Google
                </StyledGoogleButton>

                <DisclaimerContainer>
                    <p>
                        By signing up, you agree to Invision Terms of Conditions and Privacy Policy
                    </p>
                </DisclaimerContainer>

                <p id="lastLine">Already on Invision?&nbsp;
                    <Link to="/login">
                        <span>Log in</span>
                    </Link>
                </p>

            </FormContainer>
        </SignUpContainer>
    )
}