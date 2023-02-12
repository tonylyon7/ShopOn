import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './User/Landingpage/Landing';
import Blog from './User/BlogPage/Blog';
import About from './User/AboutPage/About';
import BlogDetail from './User/BlogPage/BlogDetail'
import FAQ from './User/FAQ/FAQ';
import SignIn from './User/SignUp/SignIn';
import Register from './User/SignUp/Register';
import Error404 from './User/Error404/Error404';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/Register' element={<Register/>} />
          <Route path='/SignIn' element={<SignIn/>} />
          <Route path='/' element={ <Landing/> } />
          <Route path='/About' element={<About/>}/>
          <Route path='/Blog' element={ <Blog/> } />
          <Route path='/BlogDetail' element={ <BlogDetail/> } />
          <Route path='/FAQ' element={ <FAQ/> } />
          <Route path='/Error404' element={<Error404/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;