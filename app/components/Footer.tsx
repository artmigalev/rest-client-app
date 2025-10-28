import React from 'react';
import { Link } from 'react-router';

function Footer() {
  return (
    <footer className= 'bg-background p-4 w-full fixed bottom-0 flex flex-row  items-center justify-around'>
      <Link to={'https://rs.school/courses/reactjs'} viewTransition>
        <img className='max-w-12 w-full' src='rss-logo.svg' alt='rss-logo' />
      </Link>
      <span className='text-[2rem]'>2025</span>
      <Link className='max-w-12 w-full' to={'http//: example.com'}>
        <img src='git.svg' alt='git' />
      </Link>
    </footer>
  );
}

export default Footer;
