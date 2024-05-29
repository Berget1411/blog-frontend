import { twJoin } from 'tailwind-merge';
const Button = ({
  children,
  full = false,
  type = 'button',
  event,
  disabled,
}) => {
  return (
    <button
      type={type}
      className={twJoin(
        'text-white dark:text-black font-bold text-lg primary-bg rounded-lg px-8 py-2 transition-all ',
        full && 'w-full',
        !disabled && 'hover:bg-purple-600 dark:hover:bg-purple-200'
      )}
      onClick={event}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
