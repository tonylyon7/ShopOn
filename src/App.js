import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './User/Landingpage/Landing';
import Blog from './User/BlogPage/Blog';
import BlogDetail from './User/BlogPage/BlogDetail';




function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <Landing/> } />
          <Route path='/Blog' element={ <Blog/> } />
          <Route path='/BlogDetail' element={ <BlogDetail/> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
