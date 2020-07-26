import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <img
        className='corona_img'
        alt='corona_img'
        src='https://news.harvard.edu/wp-content/uploads/2020/02/coronavirus_CDCx.jpg?w=1200&h=800&crop=1'
      />
      <div className='app_heading'>
        <h1>CORONA Tracker</h1>
      </div>
      <a href='https://github.com/imnotharsha'>
        <img
          className='git_img'
          src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
          alt='logo_git'
        />
      </a>
    </div>
  );
}

export default Navbar;
