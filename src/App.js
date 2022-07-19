import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CreateContainer, MainContainer } from './components';
import Header from './components/Header';
import {AnimatePresence} from 'framer-motion'

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-screen flex flex-col bg-white">
      <Header/>
      <main className='mt-16 md:mt-23 px-4 md:px-16 py-4 w-full '>
        <Routes>
          <Route path='/' element={
            <Fragment>
              <MainContainer />
            </Fragment>
          }>
          </Route>
          <Route path='/newItem' element={
            <Fragment>
              <CreateContainer />
            </Fragment>
          }>
          </Route>
          </Routes>
        </main> 
      </div>
    </AnimatePresence>
  );
}

export default App;
