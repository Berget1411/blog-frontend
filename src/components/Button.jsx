const Button = ({ children }) => {
  return (
    <button className='text-white dark:text-black font-bold text-lg primary-bg rounded-lg px-8 py-2 transition-all hover:bg-purple-600 dark:hover:bg-purple-200'>
      {children}
    </button>
  );
};

export default Button;
