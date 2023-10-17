import React, { useState } from 'react';
import '../components/dashboard.css';
import { TbHexagonLetterO } from 'react-icons/tb';
import { FiHelpCircle } from 'react-icons/fi';
import { SiNintendogamecube } from 'react-icons/si';
import { CgProfile } from 'react-icons/cg';
import { AiFillDollarCircle } from 'react-icons/ai';
import { BiSolidOffer } from 'react-icons/bi';
import dp from '../assets/dp.jpg';

const Dashboard = () => {
  return (
    <div className='aside-container'>
      <div className='button-container '>
        <div className='aside-header'>
          <TbHexagonLetterO />
          <h4>Dashboard</h4>
        </div>
        <button>
          <span>
            <AiFillDollarCircle /> Dashboard
          </span>{' '}
          <span className='right'>></span>
        </button>
        <button>
          <span>
            <SiNintendogamecube /> products
          </span>
          <span className='right'>></span>
        </button>
        <button>
          <span>
            {' '}
            <CgProfile /> Customers
          </span>
          <span className='right'>></span>
        </button>
        <button>
          <span>
            <AiFillDollarCircle /> Income
          </span>
          <span className='right'>></span>
        </button>
        <button>
          <span>
            <BiSolidOffer /> Promote
          </span>
          <span className='right'>></span>
        </button>
        <button>
          <span>
            <FiHelpCircle /> Help
          </span>
          <span className='right'>></span>
        </button>
      </div>
      <div className='d-footer'>
        <button className='dp-btn'>
          {' '}
          <div>
            {' '}
            <img className='img' src={dp} alt='' />
          </div>
          <div>
            <h4>Evano</h4>
            <p>project manager</p>
          </div>
          <span>></span>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
