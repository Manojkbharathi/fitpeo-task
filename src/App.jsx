import { useState } from 'react';
import Dashboard from './components/dashboard';
import dollar from '../src/assets/dollar.avif';
import { HiOutlineSearch } from 'react-icons/hi';
import BarChart from './components/barChart';
import first from './assets/1.png';
import two from './assets/2.png';

import three from './assets/3.png';

import four from './assets/4.png';

import './App.css';
function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showAside, setShowAside] = useState(true);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    if (!showMenu) {
      setShowAside(false);
    } else {
      setShowAside(true);
    }
  };
  return (
    <div className='body-container'>
      <div>{showAside && <Dashboard />} </div>
      <div className='right-container'>
        <div className='nav-bar'>
          <h2>Hello Sharukh👋</h2>
          <div className='search'>
            <HiOutlineSearch />
            <input type='text' placeholder='search' />
            <button
              className={`menu-button ${showMenu ? 'hide-menu' : ''}`}
              onClick={toggleMenu}
            >
              Menu
            </button>
          </div>
        </div>
        <div className='count-section'>
          <div className='count-container'>
            <div className='dollar-container'>
              <img src={first} alt='' className='img' />
            </div>
            <div className='dollar-count'>
              <p>Earning</p>
              <h2>$198k</h2>
              <p>
                <span className='colour'>↑ 37.8%</span>this month
              </p>
              <h6></h6>
            </div>
          </div>
          <div className='count-container'>
            <div className='dollar-container'>
              <img src={two} alt='' className='img' />
            </div>
            <div className='dollar-count'>
              <p>Earning</p>
              <h2>$198k</h2>
              <p>
                <span className='colour'>↑ 37.8%</span>this month
              </p>
              <h6></h6>
            </div>
          </div>
          <div className='count-container'>
            <div className='dollar-container'>
              <img src={three} alt='' className='img' />
            </div>
            <div className='dollar-count'>
              <p>Earning</p>
              <h2>$198k</h2>
              <p>
                <span className='colour'>↑ 37.8%</span>this month
              </p>
              <h6></h6>
            </div>
          </div>
          <div className='count-container'>
            <div className='dollar-container'>
              <img src={four} alt='' className='img' />
            </div>
            <div className='dollar-count'>
              <p>Earning</p>
              <h2>$198k</h2>
              <p>
                <span className='colour'>↑ 37.8%</span>this month
              </p>
              <h6></h6>
            </div>
          </div>
        </div>
        <div>
          <div>
            <BarChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
