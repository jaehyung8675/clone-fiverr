import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  function isActive() {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', isActive);

    return () => {
      window.removeEventListener('scroll', isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: 'Jay Kim',
    isSeller: true,
  };

  return (
    <div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
      <div className='container'>
        <div className='logo'>
          <Link to='/' className='link'>
            <span className='text'>fiverr</span>
          </Link>
          <span className='dot'>.</span>
        </div>
        <ul className='links'>
          <li>Fiverr Business</li>
          <li>Explore</li>
          <li>English</li>
          {!currentUser?.isSeller && <li>Become a Seller</li>}
          <li>Sign in</li>
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className='user' onClick={() => setOpen(!open)}>
              <img
                src='https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600'
                alt='profile image'
              />
              <span>{currentUser?.username}</span>
              {open && (
                <div className='options'>
                  {currentUser?.isSeller && (
                    <>
                      <Link to='/mygigs' className='link'>
                        Gigs
                      </Link>
                      <Link to='/add' className='link'>
                        Add New Gigs
                      </Link>
                    </>
                  )}
                  <Link to='/orders' className='link'>
                    Order
                  </Link>
                  <Link to='/messages' className='link'>
                    Message
                  </Link>
                  <Link to='/' className='link'>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </ul>
      </div>
      {(active || pathname !== '/') && (
        <>
          <hr />
          <nav className='menu'>
            <ul className='categories'>
              <Link className='link menuLink' to='/'>
                Graphics & Design
              </Link>
              <Link className='link' to='/'>
                Video & Animation
              </Link>
              <Link className='link' to='/'>
                Writing & Translation
              </Link>
              <Link className='link' to='/'>
                AI Services
              </Link>
              <Link className='link' to='/'>
                Digital Marketing
              </Link>
              <Link className='link' to='/'>
                Music & Audio
              </Link>
              <Link className='link' to='/'>
                Programming & Tech
              </Link>
              <Link className='link' to='/'>
                Business
              </Link>
              <Link className='link' to='/'>
                Lifestyle
              </Link>
            </ul>
          </nav>
        </>
      )}
    </div>
  );
};

export default Navbar;
