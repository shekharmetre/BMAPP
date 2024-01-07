import React, { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Menu from './pages/Menu';
import { useSelector } from 'react-redux';
// import Header from './components/Header';
const Home = React.lazy(() => import('./pages/Home'));
const Inventory = React.lazy(() => import('./pages/Inventory'));
const Rpage = React.lazy(() => import('./pages/Rpage'));
import toast, { Toaster } from 'react-hot-toast';
import Landing from './pages/Landing';

const App = () => {
  const message = useSelector(state => state.message.message)

  useEffect(() => {
    toast(message)
  }, [message])

  return (
    <div className=''>
      <Toaster />
      <Suspense fallback={<>Loading Header.....</>}>
        {/* <Header />       */}
      </Suspense>
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<>Loading Login.....</>}>
              <Landing />
            </Suspense>
          }
        />
        <Route
          path='/login'
          element={
            <Suspense fallback={<>Loading Login.....</>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path='/home'
          element={
            <Suspense fallback={<>Loading Login.....</>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path='/registration'
          element={
            <Suspense fallback={<>Loading Login.....</>}>
              <Registration />
            </Suspense>
          }
        />
        <Route
          path='/inventory'
          element={
            <Suspense fallback={<>Loading Inventory.....</>}>
              <Inventory />
            </Suspense>
          }
        />
        <Route
          path='/Report'
          element={
            <Suspense fallback={<>Loading Report.....</>}>
              <Rpage />
            </Suspense>
          }
        />

      </Routes>
      <div className='sticky bottom-0 w-full h-[80px] '>
        <Suspense fallback={<>Loading.....</>}>
          <Menu />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
