import React from 'react';

import CenterMenu from './CenterMenu';

function Header() {
  const buttonsStyle =
    'border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]';
  return (
    <div className='header bg-[#081730] flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]'>
      <img
        src={require('../img/MuzicLogo.png')}
        className='logo w-[42px] h-[42px]'
        alt='Logo'
      />
      <CenterMenu />
      <div className='buttons flex'>
        <button className={`mr-[35px] hover:bg-[#232A4E]` + buttonsStyle}>
          Sign up
        </button>
        <button className={buttonsStyle + `bg-[#232A4E]`}>Log In</button>
      </div>
    </div>
  );
}

export default Header;
