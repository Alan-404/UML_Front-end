import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AuthView from './views/AuthView';
import HomeView from './views/HomeView';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<AuthView authRoute="login"/>}/>
        <Route path='/register' element={<AuthView authRoute="register"/>}/>
        <Route path='/dashboard' element={<HomeView homeRoute="dashboard" />}/>
        <Route path='/product' element={<HomeView homeRoute="product" />}/>
        <Route path='/profile' element={<HomeView homeRoute="profile" />}/>
        <Route path='/edit_profile' element={<HomeView homeRoute="edit_profile" />}/>
        <Route path='/menu' element={<HomeView homeRoute="menu" />}/>
        <Route path='/manager' element={<HomeView homeRoute="manager" />}/>
        <Route exact path='/' element={<HomeView homeRoute="dashboard" />}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
