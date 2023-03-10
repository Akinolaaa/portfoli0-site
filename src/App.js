import Introduction from "./components/introduction/introduction.component";
import Particles from "./components/particles/particles.component";
import About from './routes/about/about.component';
import Skills from "./routes/skills/skills.component";
import Portfolio from './routes/portfolio/portfolio.component';
import Contact from './routes/contact/contact.component';
import './App.scss';

const App = () => {
  return (
    <div className='app-container'>
      <div className='app-content'>
        <Particles id="tsparticles" />
        <Introduction />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;

