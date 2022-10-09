import { FaTree, FaSearch } from 'react-icons/fa/index';

const Navbar = () => {
  return (
    <nav className='bg-msuGreen py-3'>
      <div className='layout flex items-center justify-between'>
        <div className='flex items-center'>
          <FaTree className='h-6 w-6 pb-1 text-sheenGreen' />
          <a className='pr-3 text-softWhite' href='/'>
            What The Park?
          </a>
          <a className='text-red' href='/about'>
            About
          </a>
        </div>
        <div className='rounded-md bg-white p-2'>
          <FaSearch className='h-4 w-4' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
