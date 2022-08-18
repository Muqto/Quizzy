import React, { useEffect, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button, Typography, Zoom } from '@mui/material';
import { Link } from 'react-router-dom'
import start from '../../actions/start'
import {useDispatch} from 'react-redux'
import './QuizSelection.scss'
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

theme.typography.h2 = {
  fontSize: '2rem',
  '@media (min-width:600px)': {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
};

const options = [
  'Any Category',
  'General Knowledge',
  'Entertainment: Books',
  'Entertainment: Film',
  'Entertainment: Music',
  'Entertainment: Musicals & Theatres',
  'Entertainment: Television',
  'Entertainment: Video Games',
  'Entertainment: Board Games',
  'Science & Nature',
  'Science: Computers',
  'Science: Mathematics',
  'Mythology',
  'Sports',
  'Geography',
  'History',
  'Politics',
  'Art',
  'Celebrities',
  'Animals',
  'Vehicles',
  'Entertainment: Comics',
  'Science: Gadgets',
  'Entertainment: Japanese Anime & Manga',
  'Entertainment: Cartoon & Animation',
];

const ITEM_HEIGHT = 80;

export default function LongMenu() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(start('https://opentdb.com/api.php?amount=11'))
  }, [dispatch])
  
  const [selectedCategory, setSelectedCategory] = useState('Any Category')  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleStart = (option) => {
    switch (option) {
        case 'General Knowledge':
          dispatch(start('https://opentdb.com/api.php?amount=11&category=9'))
          break;
        case 'Entertainment: Books':
            dispatch(start('https://opentdb.com/api.php?amount=11&category=10'))
            break;
        case 'Entertainment: Film':
            dispatch(start('https://opentdb.com/api.php?amount=11&category=11'))
            break;
        case 'Entertainment: Music':
            dispatch(start('https://opentdb.com/api.php?amount=11&category=12'))
            break;
        case 'Entertainment: Musicals & Theatres':
            dispatch(start('https://opentdb.com/api.php?amount=11&category=13'))
            break;
        case 'Entertainment: Television':
            dispatch(start('https://opentdb.com/api.php?amount=11&category=14'))
            break;
        case 'Entertainment: Video Games':
            dispatch(start('https://opentdb.com/api.php?amount=11&category=15'))
            break;
        case 'Entertainment: Board Games':
            dispatch(start('https://opentdb.com/api.php?amount=11&category=16'))
            break;
        case 'Science & Nature':
            dispatch(start('https://opentdb.com/api.php?amount=11&category=17'))
            break;
        case 'Science: Computers':
            dispatch(start('https://opentdb.com/api.php?amount=11&category=18'))
            break;
        case 'Science: Mathematics':
            dispatch(start('https://opentdb.com/api.php?amount=11&category=19'))
            break;
        case 'Mythology':
            dispatch(start('https://opentdb.com/api.php?amount=11&category=20'))
            break;
        case 'Sports':
            dispatch(start('https://opentdb.com/api.php?amount=11&category=21'))
            break;
        case 'Geography':
            dispatch(start('https://opentdb.com/api.php?amount=11&category=22'))
            break;
        case 'History':
            dispatch(start('https://opentdb.com/api.php?amount=11&category=23'))
            break;
        case 'Politics':
            dispatch(start('https://opentdb.com/api.php?amount=11&category=24'))
            break;
        case 'Art':
            dispatch(start('https://opentdb.com/api.php?amount=11&category=25'))
            break;
        case 'Celebrities':
            dispatch(start('https://opentdb.com/api.php?amount=11&category=26'))
            break;
        case 'Animals':
            dispatch(start('https://opentdb.com/api.php?amount=11&category=27'))
            break;
        case 'Vehicles':
            dispatch(start('https://opentdb.com/api.php?amount=11&category=28'))
            break;
        case 'Entertainment: Comics':
            dispatch(start('https://opentdb.com/api.php?amount=11&category=29'))
            break;
        case 'Science: Gadgets':
            dispatch(start('https://opentdb.com/api.php?amount=11&category=30'))
            break;
        case 'Entertainment: Japanese Anime & Manga':
            dispatch(start('https://opentdb.com/api.php?amount=11&category=31'))
            break;
        case 'Entertainment: Cartoon & Animation':
            dispatch(start('https://opentdb.com/api.php?amount=11&category=32'))
            break;
    
        default:
            dispatch(start('https://opentdb.com/api.php?amount=11'))
            break;
    }
  }

  return (
    <div className='menu screen'>
      <ThemeProvider theme={theme}>
        <Zoom in={true}>
          <Typography className='label' fontFamily={'montserrat'} variant='h2' fontWeight={'600'}>Choose a category :</Typography>
        </Zoom>
      </ThemeProvider>
    <Zoom in={true} style={{transitionDelay : '200ms'}}>
          <Button
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            className='category-button'
          >
            {selectedCategory} <ArrowDropDownIcon />
          </Button>
      </Zoom>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '42ch'
          },
        }}
      >
        {options.map((option) => (
          <MenuItem 
            key={option} 
            onClick={() => {
            handleClose()
            handleStart(option)
            setSelectedCategory(option)
            }}>
            {option}
          </MenuItem>
        ))}
      </Menu>



      <Link to='/quiz' style={{textDecoration: 'none'}}>
      <Zoom in={true} style={{transitionDelay : '400ms'}}>
          <Button
            className='start-quiz'
            variant='contained' 
            >
                <Typography 
                  fontFamily={'montserrat'} 
                  variant='h5' >Start Quiz
                </Typography>
          </Button>
        </Zoom>
        </Link>
    </div>
  );
}
