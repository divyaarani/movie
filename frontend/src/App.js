import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import AboutUs from './components/Aboutus';
import BookTickets from './components/BookTicket';
import Contest from './components/Contest';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Counter from './components/Counter';
import { Route, Routes } from 'react-router-dom';
import AuthProvider from './components/Auth';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/BookTickets' element={<BookTickets/>}/>
        <Route path='/Contest' element={<Contest/>}/>
        <Route path='/SignUp'element={<SignUp/>}/>
        <Route path='/Login'element={<Login/>}/>
        <Route path='/vote'element={<Counter/>}/>

      </Routes>
      </AuthProvider>
      
    </div>
  );
}

export default App;
