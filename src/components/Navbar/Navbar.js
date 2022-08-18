import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

theme.typography.h2 = {
  fontSize: '2.5rem',
  '@media (min-width:600px)': {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
};
export default function Navbar() {
  return (
    <Link to='/'>
            <ThemeProvider theme={theme}>
              <Typography 
                variant='h2' 
                fontFamily={'montserrat'} 
                fontWeight='700' 
                className='logo'
                >Quizzy.</Typography>
              </ThemeProvider>
        </Link>
  )
}
