import Button from '../components/Button';

const Subscribe = () => {
  return (
    <section
      className='surface  my-12 padding-x py-6 flex justify-between items-center max-lg:flex-col gap-10  rounded-lg  '
      id='contact-us'
    >
      <h2 className='dark:text-white text-2xl lg:max-w-md font-palanquin font-bold '>
        Subscribe to our
        <span className='primary-color'> newsletter</span>
      </h2>
      <div className='lg:max-w-[60%] flex items-center justify-between text-xl gap-5 p-2.5 border-2 border-primary rounded-full focus-within:border-purple-700 dark:focus-within:border-purple-300 transition-all  '>
        <input
          type='text'
          placeholder='subscribe@blogapi.com'
          className='bg-transparent outline-none dark:text-white'
        />

        <Button>Subscribe</Button>
      </div>
    </section>
  );
};

export default Subscribe;
