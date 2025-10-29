import React from 'react';
import { Link } from 'react-router';

function Footer() {
  return (
    <footer className='flex flex-row justify-between items-center p-3 relative bottom-0 bg-background h-[8vh]'>
      <Link to={'https://rs.school/courses/reactjs'} viewTransition>
        <img className='w-10' src='rss-logo.svg' alt='rss-logo' />
      </Link>
      <span className='text-xl'>2025</span>
      <Link className='w-10' to={'http//: example.com'}>
        <img src='git.svg' alt='git' />
      </Link>
    </footer>
  );
}

export default Footer;
