import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Home from './components/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Routes>
       <Route path='/' element={<Register/>}/> 
       <Route path='/login'  element={<Login/>}/>
       <Route path='/home'  element={<Home/>}/>

      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App