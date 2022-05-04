import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AuthView from './views/AuthView';
import HomeView from './views/HomeView';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<AuthView authRoute="login"/>}/>
        <Route path='/dashboard' element={<HomeView />}/>
        <Route exact path='/' element={<HomeView />}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
