import Card from './Card';

const Park = ({ parks }) => {
  const data = parks.data;
  return (
    <section className='min-h-main bg-softWhite'>
      <div className='layout'>
        <div className='grid grid-cols-2 gap-3 py-7'>
          {data.map((park) => (
            <Card park={park} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Park;
