import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import EditProductTypePage from './pages/EditProductTypePage/EditProductTypePage';
import CreateProductTypePage from './pages/CreateProductTypePage/CreateProductTypePage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/edit/:id" element={<EditProductTypePage />} />
        <Route path='/create' element={<CreateProductTypePage />} />
      </Routes>
    </Router>
  );
};

export default App;