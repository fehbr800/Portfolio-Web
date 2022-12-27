import { NavBar } from './components/NavBar';
import { Skills } from './components/Skills';
import { Banner } from './components/Banner';
import { Projects } from './components/Projects';
import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}
export default App;

