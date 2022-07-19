import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CreateContainer, MainContainer } from './components';
import Header from './components/Header';
import {AnimatePresence} from 'framer-motion'

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-screen flex flex-col">
      <Header/>
      <main className='mt-24 p-8 w-full'>
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
