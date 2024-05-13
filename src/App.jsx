import './App.css';
import { Main } from './components/Main';
import { Navbar } from './components/Navbar';
import { TopContainer } from './components/TopContainer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <TopContainer/>
    <Main/>
    </div>
  );
}

export default App;
