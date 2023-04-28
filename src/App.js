import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import StorePage from './pages/StorePage';
import UnderConstructionPage from './pages/UnderConstructionPage';

const App = () => {
  return (
    <Router className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products/:slug' element={<ProductPage />} />

        <Route path='/products' element={<StorePage />} />
        <Route path='/under-construction' element={<UnderConstructionPage />} />
      </Routes>
    </Router>
  );
};

export default App;
