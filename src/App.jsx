import { useState } from 'react';
import Dashboard from './components/dashboard';
import dollar from '../src/assets/dollar.avif';
import { HiOutlineSearch } from 'react-icons/hi';
import './App.css';
function App() {
  return (
    <div className='body-container'>
      <div>
        <Dashboard />
      </div>
      <div className='right-container'>
        <div className='nav-bar'>
          <h2>Hello Sharukh👋</h2>
          <div className='search'>
            <HiOutlineSearch />
            <input type='text' placeholder='search' />
          </div>
        </div>
        <div className='count-section'>
          <div className='count-container'>
            <div className='dollar-container'>
              <img src={dollar} alt='' className='img' />
            </div>
            <div className='dollar-count'>
              <p>Earning</p>
              <h2>$198k</h2>
              <p>
                <span className='colour'>↑ 37.8%</span>this mponth
              </p>
              <h6></h6>
            </div>
          </div>
          <div className='count-container'>
            <div className='dollar-container'>
              <img src={dollar} alt='' className='img' />
            </div>
            <div className='dollar-count'>
              <p>Earning</p>
              <h2>$198k</h2>
              <p>
                <span className='colour'>↑ 37.8%</span>this mponth
              </p>
              <h6></h6>
            </div>
          </div>
          <div className='count-container'>
            <div className='dollar-container'>
              <img src={dollar} alt='' className='img' />
            </div>
            <div className='dollar-count'>
              <p>Earning</p>
              <h2>$198k</h2>
              <p>
                <span className='colour'>↑ 37.8%</span>this mponth
              </p>
              <h6></h6>
            </div>
          </div>
          <div className='count-container'>
            <div className='dollar-container'>
              <img src={dollar} alt='' className='img' />
            </div>
            <div className='dollar-count'>
              <p>Earning</p>
              <h2>$198k</h2>
              <p>
                <span className='colour'>↑ 37.8%</span>this mponth
              </p>
              <h6></h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
