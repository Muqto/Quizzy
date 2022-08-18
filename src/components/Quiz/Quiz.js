import {Icon, Paper, Typography, Zoom } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import './Quiz.scss'
import QuizChoices from './QuizChoices'
import he from 'he'
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSelector } from 'react-redux'
import Navbar from '../Navbar/Navbar'
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};
export default function Quiz() {
  const quizInfo = useSelector(state => state) 
  const [count, setCount] = useState(0)
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  const choices = [...quizInfo[count].incorrect_answers, quizInfo[count].correct_answer]  
  shuffle(choices)   
  return (
        
        <Container>
        <ThemeProvider theme={theme}>
        <Navbar/>
        <Zoom in={true}>
            <div className='quiz-container'>
                <Paper elevation={6} className='quiz-paper'>
                    <div className='inner-container'>
                        <div className='question'>
                            <Typography 
                                variant='h3' 
                                color='white' 
                                fontWeight='600'
                                fontFamily='montserrat'
                            >
                                {he.decode(quizInfo[count].question)}
                            </Typography>
                        </div>
                        <Paper elevation={1} className='answer'>
                            <QuizChoices data={quizInfo} count={count} choices={choices}/>
                        </Paper>
                    </div>
                </Paper>
            
            <IconButton className='icon-button' onClick={() => setCount(count + 1)}>
                <ArrowForwardIosIcon style={{color: '#602796'}}/>
            </IconButton>
            </div>
            </Zoom>
            </ThemeProvider>
        </Container>
 
  )
}
