import {BrowserRouter as Router , Routes ,Route } from 'react-router-dom'
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';
import Products from './components/Products';
import SignupPage from './components/SignupPage';
function App() {
  return (
    <>
    <Router>
      <div>
      <Navbar/>

      </div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/signup' element={<SignupPage/>} />

        </Routes>

    </Router>
    </>
  );
}

export default App;
