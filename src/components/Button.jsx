const Button = ({ name }) => {
  return (
    <button
      role='button'
      className='rounded-xl bg-darkSlateBlue py-2 px-7 text-softWhite shadow-xl'
    >
      {name}
    </button>
  );
};

export default Button;
