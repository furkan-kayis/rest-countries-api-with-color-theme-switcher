import { StrictMode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CountryContext from './contexts/countryContext';
import useFetch from './hooks/useFetch';
import './input.css';
import Countries from './pages/Countries';
import Details from './pages/Details';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';

export default function App() {
  const context = useFetch();

  return (
    <StrictMode>
      <CountryContext.Provider value={context}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Countries />} />
              <Route path="country/:countryName" element={<Details />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CountryContext.Provider>
    </StrictMode>
  );
}
