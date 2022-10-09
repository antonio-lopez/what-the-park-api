import { FaTree, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='bg-msuGreen py-4'>
      <div className='layout flex items-center justify-between'>
        <div className='flex items-center'>
          <FaTree className='h-5 w-5 text-sheenGreen' />
          <a className='pr-3 text-softWhite' href='/'>
            What The Park?
          </a>
          <a className='text-red' href='/'>
            About
          </a>
        </div>
        <div className='rounded-xl bg-white p-2'>
          <FaSearch className='h-5 w-5' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
