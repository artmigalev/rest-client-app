import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type React from 'react';
import { Link } from 'react-router';

const Footer = (): React.JSX.Element => {
  return (
    <footer className="w-[95%] m-auto border rounded-2xl p-[2rem] flex flex-row items-center justify-around text-[250%]">
      <Link to={'https://github.com/artmigalev'}>
        {/* <img className='w-[50px] h-[50px]' src="/github-brands-solid-full.svg" alt="" /> */}
        <FontAwesomeIcon icon={faGithub} />
      </Link>
      <span>2025</span>
      <Link to={'https://rs.school/courses/reactjs'}>
        <img className="w-[50px]" src="/rss-logo.svg" alt="" />
      </Link>
    </footer>
  );
};

export default Footer;
