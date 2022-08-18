import { Paper, Typography, Zoom } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './ScorePage.scss'
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

theme.typography.h1 = {
    fontSize: '3rem',
    '@media (min-width:600px)': {
        fontSize: '4rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '6rem',
    },
};
export default function ScorePage() {
const location = useLocation()
    return (
        <div className='score-page'>
        <Navbar />
        <div className='score-content'>
        <ThemeProvider theme={theme}>
        <Zoom in={true}>
       
        <Typography 
            className='score-page-number' 
            variant='h1' fontFamily={'montserrat'} 
            fontWeight='700'
            >
            Your final score  
        </Typography>
        </Zoom>
        <Typography  
            className='score-page-number' 
            variant='h1' fontFamily={'montserrat'} 
            fontWeight='700'
            >
            <Zoom in={true} style={{transitionDelay: '500ms'}}>
            <div className='score-paper'>{location.state}</div>
            </Zoom>   
        </Typography>
        </ThemeProvider>
        </div>
        </div>
  )
}

