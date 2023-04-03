import './App.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
// import ContactPage from './pages/ContactPage';
import { Route, Routes } from 'react-router-dom';
import PhotoPage from './pages/PhotoPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='project' element={<ProjectPage />} /> */}
        <Route path='photo' element={<PhotoPage />} />
        {/* <Route path='photo/:photoId' element={<PhotoDetailPage />} /> */}
        {/* <Route path='contact' element={<ContactPage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
