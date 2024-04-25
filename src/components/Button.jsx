import { twJoin } from 'tailwind-merge';
const Button = ({ children, full = false, type = 'button', event }) => {
  return (
    <button
      type={type}
      className={twJoin(
        'text-white dark:text-black font-bold text-lg primary-bg rounded-lg px-8 py-2 transition-all hover:bg-purple-600 dark:hover:bg-purple-200',
        full && 'w-full'
      )}
      onClick={event}
    >
      {children}
    </button>
  );
};

export default Button;
