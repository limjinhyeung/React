import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import BoardList from './components/Board';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/BoardList' element={<BoardList/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
