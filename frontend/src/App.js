import './App.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import PhotoPage from './pages/PhotoPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='photo' element={<PhotoPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
