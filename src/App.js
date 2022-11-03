import './App.css';
import Linktree from './components/Linktree';

import Footer from './components/Footer';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' index element={<Linktree />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NoMatch/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
