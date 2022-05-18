import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import About from './routes/about/about.component';
import Blogs from './routes/blogs/blogs.component';
import Home from './routes/home/home.component'; 
import Portfolio from './routes/portfolio/portfolio.component';
import Contact from './routes/contact/contact.component';
import './App.scss';

const App = () => {
  return (
    <Routes>
      <Route path='/'element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Route>
    </Routes>
  );
}

export default App;

