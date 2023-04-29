import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import StorePage from './pages/StorePage';
import UnderConstructionPage from './pages/UnderConstructionPage';
import CartPage from './pages/CartPage/index.jsx';
import SignUpPage from './pages/SignUpPage/SignUpPage.js';
import SignInPage from './pages/SignInPage/SignInPage.js';
import { UserContextProvider } from './contexts/userContext.js';
import CartContextProvider from './contexts/cartContext.js';

const App = () => {
  return (
    <Router className="App">
      <UserContextProvider>
        <CartContextProvider>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={<StorePage />} />
            <Route path='/products/:slug' element={<ProductPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path='/under-construction' element={<UnderConstructionPage />} />
          </Routes>
        </CartContextProvider>
      </UserContextProvider>
    </Router>
  );
};

export default App;
