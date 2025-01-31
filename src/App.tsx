import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import EditProductTypePage from './pages/EditProductTypePage/EditProductTypePage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/edit/:id" element={<EditProductTypePage />} />
      </Routes>
    </Router>
  );
};

export default App;