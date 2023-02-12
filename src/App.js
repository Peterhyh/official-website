import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import { Route, Routes } from 'react-router-dom';
import PhotoPage from './pages/PhotoPage';
import PhotoDetailPage from './pages/PhotoDetailPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='photo' element={<PhotoPage />} />
        <Route path='photo/:photoId' element={<PhotoDetailPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='about' element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
