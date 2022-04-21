import { Suspense, lazy } from 'react';
import './App.scss';

import Error404 from './components/404/Error404';
import { Routes, Route } from 'react-router-dom';


const PropertyPage = lazy(() => import('./pages/propertyPage/PropertyPage'))
const MainPage = lazy(() => import('./pages/main/MainPage'))

import Layout from './components/layout/Layout';


function App() {
  
  return (
    <Suspense fallback={<center>Loading...</center>}>
    <Layout>

    <div className="app">
        <Routes>
        <Route index element={<MainPage />} />
        <Route path="property/:id" element={<PropertyPage/>} />
        <Route path='*' element={<Error404/>} />
      </Routes>
    </div>
    </Layout>
    </Suspense>
  );
}

export default App;
