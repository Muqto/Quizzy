import React from 'react'
import {Typography, Button, Zoom} from '@mui/material'

import './Home.scss'
import {Link} from 'react-router-dom'


export default function Home() {
  
  
  return (
    <div className='home'>
      <Zoom in={true}>
        <Typography  fontFamily={'montserrat'}  fontWeight='bold' variant='h1' color={'white'}>Quizzy.</Typography>
        </Zoom>
        <Link to='/selection' style={{textDecoration: 'none'}}>
        <Zoom in={true} style={{ transitionDelay:'300ms' }}>
          <Button
            className='get-started'
            variant='contained'
            >
                <Typography 
                  fontFamily={'montserrat'} 
                  variant='h5' >Get Started
                </Typography>
          </Button>
          </Zoom>
        </Link>
        
    </div>
  )
}
