import { useEffect, useState } from 'react';
import './App.scss';

import { fetchApi } from './utils/fetchApi';

import { Banner, Property } from './components';
import Error404 from './components/404/Error404';
import { Routes, Route } from 'react-router-dom';

import PropertyPage from './pages/propertyPage/PropertyPage';
import MainPage from './pages/main/MainPage';


function App() {
  
  return (
    <div className="app">
        <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path="property/:id" element={<PropertyPage/>} />
        <Route path='*' element={<Error404/>} />
      </Routes>
    </div>
  );
}

export default App;
