import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './User/Landingpage/Landing';
import Blog from './User/BlogPage/Blog';
import About from './User/AboutPage/About';
import BlogDetail from './User/BlogPage/BlogDetail'
import FAQ from './User/FAQ/FAQ';
import SignIn from './User/SignUp/SignIn';
import Register from './User/SignUp/Register';
import Checkout from './User/Checkout/Checkout';


function App() {
  return (
    <>
    {/* <Register/> */}
      {/* <SignIn/> */}
      <Router>
        <Routes>
          <Route path='/Register' element={<Register/>} />
          <Route path='/SignIn' element={<SignIn/>} />
          <Route path='/' element={ <Landing/> } />
          <Route path='/About' element={<About/>}/>
          <Route path='/Blog' element={ <Blog/> } />
          <Route path='/BlogDetail' element={ <BlogDetail/> } />
          <Route path='/Checkout' element={ <Checkout/>} />
          <Route path='/FAQ' element={ <FAQ/> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;