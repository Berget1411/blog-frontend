import Button from '../components/Button';

const Subscribe = () => {
  return (
    <section
      className=' my-12 padding-x py-6 flex justify-between items-center max-lg:flex-col gap-10 bg-amber-50 rounded-r-[5rem] rounded-tl-[5rem] shadow-2xl '
      id='contact-us'
    >
      <h2 className='text-2xl leading-[68px] lg:max-w-md font-palanquin font-bold '>
        Subscribe to our
        <span className='text-violet-600'> newsletter</span>
      </h2>
      <div className='lg:max-w-[60%] flex items-center justify-between  gap-5 p-2.5 border-4 border-primary rounded-full focus-within:border-violet-600 transition-all  '>
        <input
          type='text'
          placeholder='subscribe@blogapi.com'
          className='bg-transparent outline-none'
        />

        <Button>Subscribe</Button>
      </div>
    </section>
  );
};

export default Subscribe;
