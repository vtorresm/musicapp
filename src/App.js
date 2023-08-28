import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';

function App() {
  return (
    <div className='App text-white overflow-hidden'>
      <Header />
      <Hero />
      <Experience />
    </div>
  );
}

export default App;
