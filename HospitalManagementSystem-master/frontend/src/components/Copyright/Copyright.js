import React from 'react'
import { Link,Typography } from '@mui/material';

function Copyright (){
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://www.khethelogp.com" target="blank">
                pawan dhobale
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Copyright;