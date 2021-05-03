import { useState } from 'react';

const Navbar = () => {

  const [navStatus, setNavStatus] = useState(false);
  const [divWidth, setDivWidth] = useState('0%');

  const toggleNav = () => {
    if(navStatus) {
      setDivWidth('0%');
      setNavStatus(false);
    } else {
      setDivWidth('98%');
      setNavStatus(true);
    };
  };

  return (
    <div className="App">
      <div 
        className='navbar'
        style={{
          backgroundImage: navStatus 
            ? 'linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)' 
            : undefined,
          width: divWidth
        }}
      >
        <button
          onClick={toggleNav}
          style={{
            color: navStatus
              ? '#f7f7f7'
              : 'black'
          }}
        >
          <i class="fas fa-bars"></i>
        </button>
        {navStatus && (
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Contact Us</li>
            <li>About</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
