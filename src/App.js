import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './User/Landingpage/Landing';
import Blog from './User/BlogPage/Blog';
import About from './User/AboutPage/About';
import BlogDetail from './User/BlogPage/BlogDetail'
import FAQ from './User/FAQ/FAQ';
import Error from './User/Error404/Error';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <Landing/> } />
          <Route path='/About' element={<About/>}/>
          <Route path='/Blog' element={ <Blog/> } />
          <Route path='/BlogDetail' element={ <BlogDetail/> } />
          <Route path='/FAQ' element={ <FAQ/> } />
          <Route path='/Error' element={ <Error/> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;