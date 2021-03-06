import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AuthView from './views/AuthView';
import HomeView from './views/HomeView';
import Forbidden from './components/errors/Forbidden';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<AuthView authRoute="login"/>}/>
        <Route path='/register' element={<AuthView authRoute="register"/>}/>
        <Route path='/dashboard' element={<HomeView homeRoute="dashboard" />}/>
        <Route path='/product' element={<HomeView homeRoute="product" />}/>
        <Route path='/profile' element={<HomeView homeRoute="profile" />}/>
        <Route path='/add_product' element={<HomeView homeRoute="add_product" />}/>
        <Route path='/edit_profile' element={<HomeView homeRoute="edit_profile" />}/>
        <Route path='/manager_edit_profile' element={<HomeView homeRoute="manager_edit_profile" />}/>
        <Route path='/menu' element={<HomeView homeRoute="menu" />}/>
        <Route path='/allOrdersUser' element={<HomeView homeRoute="allOrdersUser" />}/>
        <Route path='/manager' element={<HomeView homeRoute="manager" />}/>
        <Route path='/search_product' element={<HomeView homeRoute="search_product" />}/>
        <Route path='/manager_user' element={<HomeView homeRoute="manager_user" />}/>
        <Route path='/edit_product' element={<HomeView homeRoute="edit_product" />}/>
        <Route path='/add_emp' element={<HomeView homeRoute="add_emp" />}/>
        <Route path='/detail_order' element={<HomeView homeRoute="detail_order" />}/>
        <Route path='/manager_order' element={<HomeView homeRoute="manager_order" />}/>
        <Route path='/show_order' element={<HomeView homeRoute="show_order" />}/>
        <Route path='/forbidden' element={<Forbidden />}/>
        <Route exact path='/*' element={<HomeView homeRoute="dashboard" />}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
