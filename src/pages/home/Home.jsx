import React from 'react';
import './Home.scss';
import Featured from '../../components/featured/Featured';
import TrustBy from '../../components/trustedBy/TrustedBy';

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustBy />
    </div>
  );
};

export default Home;
