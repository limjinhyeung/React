import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import BoardList from './components/Board';
import Home from './components/Home';
import BoardInsert from './components/BoardInsert';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/BoardList' element={<BoardList/>}></Route>
        <Route path='/BoardInsert' element={<BoardInsert/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
