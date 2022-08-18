import Home from "./components/Home/Home";
import './App.scss'
import Quiz from "./components/Quiz/Quiz";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LongMenu from "./components/QuizSelection/LongMenu";
import ScorePage from "./components/ScorePage/ScorePage";

function App() {

  return (
    <Router>
      <Routes>
        <Route path = '/' element ={<Home/>} />
        <Route path = '/quiz' element ={<Quiz/>} />
        <Route path = '/selection' element ={<LongMenu />} />
        <Route path = '/score' element ={<ScorePage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
