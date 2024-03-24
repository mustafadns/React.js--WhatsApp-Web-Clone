import React from 'react'
import Dashboard from './Dashboard';
import './app.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersList from '../usersPage/UsersList';

function App() {
  return (
    <div className='bg-color'>
      <div className='top-section'></div>
      <div >
        <div className='content'>
          <Router>
            <Routes>
              <Route exact path='/' Component={Dashboard} />
              <Route path='/' Component={UsersList} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
