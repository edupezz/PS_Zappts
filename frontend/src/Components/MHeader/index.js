import React from 'react';

import {MHeaderContainer} from './styles';
import { 
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails  } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

import Login from '../Login';
import Signup from '../SignUp';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '20%',
    },
  }));


export default function MHeader(){

    const classes = useStyles();

    return(
        <MHeaderContainer>
            <div className={classes.root}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Login</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <Login />
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className={classes.root}>
            <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>SignUp</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <Signup />
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                </div>
            <p>Invision</p>
        </MHeaderContainer>
    )

}