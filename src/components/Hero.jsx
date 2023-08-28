import React from 'react';

function Hero() {
  return (
    <div className='wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative'>
      <div className='headings'>
        <span>Experience The</span>{' '}
        <span>
          <b>Best Qulaity Music</b>
        </span>
        <span className='text-[15px] text-[#525D6E]'>
          Donec laoreet nec velit vitae aliquam. Ut quis tincidunt purus.
          <br />
          Suspendisse in leo non risus tincidunt lobortis.
        </span>
      </div>
      <div className='images'>Images</div>
    </div>
  );
}

export default Hero;
