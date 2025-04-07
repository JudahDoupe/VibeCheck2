import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SubmitResponse from './SubmitResonse';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit/:code" element={<SubmitResponse />} />
      </Routes>
    </BrowserRouter>
  );
};

const App: React.FC = () => {
  return <AppRoutes />;
};

export default App;
