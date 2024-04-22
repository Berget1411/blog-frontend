const Button = ({ children }) => {
  return (
    <button className='text-white font-bold text-lg bg-violet-600 rounded-2xl px-8 py-2 round transition-all hover:bg-violet-500 '>
      {children}
    </button>
  );
};

export default Button;
