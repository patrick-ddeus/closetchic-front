import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import StorePage from './pages/StorePage';
import UnderConstructionPage from './pages/UnderConstructionPage';
import SignUpPage from './pages/SignUpPage/SignUpPage.js';
import SignInPage from './pages/SignInPage/SignInPage.js';
import { UserContextProvider } from './contexts/userContext.js';

const App = () => {
  return (
    <Router className="App">
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products/:slug' element={<ProductPage />} />

          <Route path='/products' element={<StorePage />} />
          <Route path='/under-construction' element={<UnderConstructionPage />} />

          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
        </Routes>
      </UserContextProvider>
    </Router>
  );
};

export default App;
