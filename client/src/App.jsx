import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { MantineProvider } from '@mantine/core';

import './App.css';
import Website from './pages/Website';
import Layout from './components/Layout/Layout';
import Properties from './pages/Properties/Properties';
import Property from './pages/Property/Property';
import UserDetailContext from './context/UserDetailContext';
import Bookings from './pages/Bookings/Bookings';
import Favourites from './pages/Favourites/Favourites';
import Prediction from './pages/Prediction/Prediction';

function App() {
  const queryCient = new QueryClient();
  const [userDetails, setUserDetails] = useState({
    favourites: [],
    bookings: [],
    token: null,
  });
  return (
    <>
      <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
        <MantineProvider>
          <QueryClientProvider client={queryCient}>
            <BrowserRouter>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route element={<Layout />}>
                    <Route path="/" element={<Website />} />
                    <Route path="/properties">
                      <Route index element={<Properties />} />
                      <Route path=":propertyId" element={<Property />} />
                    </Route>
                    <Route path="/bookings" element={<Bookings />} />
                    <Route path="/favourites" element={<Favourites />} />
                    <Route path="/prediction" element={<Prediction />} />
                  </Route>
                </Routes>
              </Suspense>
            </BrowserRouter>
            <ToastContainer />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </MantineProvider>
      </UserDetailContext.Provider>
    </>
  );
}

export default App;
