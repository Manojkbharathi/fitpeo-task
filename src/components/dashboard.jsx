import React from 'react';
import '../components/dashboard.css';
import { TbHexagonLetterO } from 'react-icons/tb';
import { FiHelpCircle } from 'react-icons/fi';
import { SiNintendogamecube } from 'react-icons/si';
import { CgProfile } from 'react-icons/cg';
import { AiFillDollarCircle } from 'react-icons/ai';
const Dashboard = () => {
  return (
    <div className='aside-container'>
      <div className='aside-header'>
        <TbHexagonLetterO />
        <h4>Dashboard</h4>
      </div>
      <div className='button-container'>
        <button>Dashboard</button>
        <button>
          <SiNintendogamecube /> products
        </button>
        <button>
          <CgProfile /> Customers
        </button>
        <button>
          <AiFillDollarCircle /> Income
        </button>
        <button>Promote</button>
        <button>
          <FiHelpCircle /> Help
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
