import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import BoardList from './components/BoardList';
import Home from './components/Home';
import BoardInsert from './components/BoardInsert';
import BoardDetail from './components/BoardDetail';
import BoardUpdate from './components/BoardUpdate';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/board' element={<BoardList/>}></Route>
        <Route path='/board/add' element={<BoardInsert/>}></Route>
        <Route path='/board/detail/:no' element={<BoardDetail/>}></Route>
        <Route path='/board/edit/:no' element={<BoardUpdate/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
