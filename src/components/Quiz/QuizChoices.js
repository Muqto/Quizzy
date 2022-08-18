import { Grid, IconButton, Paper, Typography, Zoom } from '@mui/material'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import React, { useEffect, useState } from 'react'
import he from 'he'
import './QuizChoices.scss'
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();
theme.typography.h6 = {
  fontSize: '1rem',
  '@media (min-width:600px)': {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
};
export default function QuizChoices({data, count, choices}) {
  const [correctIndex, setCorrectIndex] = useState(null)
  const [incorrectIndex, setIncorrectIndex] = useState(null)
  const [score, setScore] = useState(105)
  const navigate = useNavigate()
  useEffect(() => {
    if (count === 10){
      navigate('/score', {state: score})
    }
    if(correctIndex === null && incorrectIndex === null){
        setScore(score - 5) 
    }
    setCorrectIndex(null)
    setIncorrectIndex(null)
  }, [count])
  

  return (
    <div className='grid-choices'>
    <ThemeProvider theme={theme}>
        <Zoom in={true} style={{transitionDelay :'200ms'}}>
          <Typography className='score' fontFamily={'montserrat'} variant='h4' fontWeight='600'>{score}</Typography>
        </Zoom>
        <div>
        <Grid container>
            {choices.map((item,index) => {
              return(
                <Grid key={index} item md={6} xs={12}>
                  <Paper onClick={() => {
                    if (choices[index] === data[count].correct_answer){
                      if(correctIndex === null){
                        setScore(score + 2)
                      }   
                      setCorrectIndex(index)
                      
                    }
                    else{
                      setScore(score - 2)
                      setIncorrectIndex(index)
                    }
                  }} 
                  elevation={5} 
                  className={index === correctIndex ? `choice-paper green-active` 
                                                    : index === incorrectIndex ? `choice-paper red-active` 
                                                    :`choice-paper`}>
                    <div className='choice-content'>
                      <Paper className='check-container' >
                      {choices[index] === data[count].correct_answer ? 
                      <CheckOutlinedIcon className={index === correctIndex ? `active-check` : `icon`} fontSize='large' /> : 
                      <CloseOutlinedIcon className={index === incorrectIndex ? `active-cross` : `icon`} fontSize='large'/>
                      }
                      </Paper>
                      <Typography variant='h6' fontFamily='montserrat' fontWeight='600'>{he.decode(choices[index])}</Typography>
                    </div>
                  </Paper>
                </Grid>
              )
            })}
          </Grid>
        </div>
        </ThemeProvider>
    </div>
  )
}
