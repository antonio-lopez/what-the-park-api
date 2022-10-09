import { FaGithub, FaLinkedin, FaGlobeAmericas } from 'react-icons/fa/index';

const Footer = () => {
  return (
    <footer className='bg-msuGreen py-6'>
      <div className='flex flex-col items-center text-sm text-softWhite'>
        <div>
          <span>API by </span>
          <a
            className='text-red'
            href='https://www.nps.gov/subjects/developer/index.htm'
          >
            National Parks Service
          </a>
        </div>
        <span>Designed by Antonio Lopez</span>
        <div className='flex space-x-4 pt-5'>
          <FaGithub className='h-7 w-7' />
          <FaLinkedin className='h-7 w-7' />
          <FaGlobeAmericas className='h-7 w-7' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
