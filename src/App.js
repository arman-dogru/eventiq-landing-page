import './App.css';

import FinalIntro from './components/FinalIntro';
import Footer from './components/Footer';
import LineSteps from './components/LineSteps';
import Navbar from './components/Navbar';
import ShortIntro from './components/ShortIntro';
function App() {
  return (
    <div>
     <Navbar/>
     <ShortIntro/>
     <LineSteps/>
     <FinalIntro/>
     <Footer/>
    </div>
  );
}

export default App;
