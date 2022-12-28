import { NavBar } from './components/NavBar';
import { Skills } from './components/Skills';
import { Banner } from './components/Banner';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact/>
      <Footer/>
    </div>
  );
}
export default App;

