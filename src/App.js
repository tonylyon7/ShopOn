import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './User/Landingpage/Landing';
import Blog from './User/BlogPage/Blog';
import About from './User/AboutPage/About';




function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <Landing/> } />
          <Route path='/About' element={<About/>}/>
          <Route path='/Blog' element={ <Blog/> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
