import React from 'react';
import './Featured.scss';

const Featured = () => {
  return (
    <div className='featured'>
      <div className='container'>
        <div className='left'>
          <h1>Find the perfect freelance services for your business</h1>
          <div className='search'>
            <div className='search-input'>
              <img src='./img/search.png' alt='search' />
              <input type='text' placeholder='Try "building mobile app"' />
            </div>
            <button>Search</button>
          </div>
          <div className='popular'>
            <span>Popular:</span>
            <button>Web Design</button>
            <button>Logo Design</button>
            <button>WordPress</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className='right'>
          <img src='./img/man.png' alt='man' />
        </div>
      </div>
    </div>
  );
};

export default Featured;
