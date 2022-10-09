import { FaMapMarkerAlt } from 'react-icons/fa/index';

const Card = () => {
  return (
    <div className='relative shadow-2xl'>
      {/* text box */}
      <div className='absolute bottom-0 w-full p-1 text-xs'>
        <div className='bg-white p-0.5'>
          <h1>Abraham Lincoln Birthplace</h1>
          <div className='flex justify-end'>
            <FaMapMarkerAlt className='h-3 w-3 text-black' />
            <span>KY</span>
          </div>
        </div>
      </div>
      {/* image */}
      <img src='/images/park-sample.jpg' alt='park cover' />
    </div>
  );
};

export default Card;
