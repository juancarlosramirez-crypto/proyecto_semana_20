import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import { Contador } from './components/Contador';
import './App.css';

function App() {
  const nombreEstudiante = 'Vic Flores';
  const horaActual = new Date().getHours();

  return (
    <>
      <Contador />
    </>
  );
}

export default App;
