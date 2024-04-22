import { twJoin } from 'tailwind-merge';

const Filter = ({
  posts,
  search,
  setSearch,
  category,
  setCategory,
  date,
  setDate,
}) => {
  const categoriesWithDuplicates = posts.map((post) => post.category);
  const categories = categoriesWithDuplicates.filter(
    (category, index) => categoriesWithDuplicates.indexOf(category) === index
  );
  return (
    <div className='flex justify-center items-center shadow-md rounded-lg  max-md:flex-col  max-sm:items-start '>
      <div className='bg-white p-4 rounded-lg '>
        <div className='relative bg-inherit  '>
          <input
            type='text'
            id='username'
            name='username'
            className='group peer bg-transparent h-10 w-72 rounded-lg text-slate-gray placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-violet-600 focus:outline-none focus:invalid:border-rose-600 transition-all'
            placeholder='Type inside me'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <label
            htmlFor='username'
            className='absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-violet-600 peer-focus:text-sm transition-all'
          >
            Search
          </label>
          <div
            className={twJoin(
              'absolute right-2 top-2 cursor-pointer opacity-0 transition-all',
              (search !== '' || category !== 'all' || date !== 'latest') &&
                'opacity-100'
            )}
            onClick={() => {
              setSearch('');
              setCategory('all');
              setDate('latest');
            }}
          >
            <svg
              viewBox='0 0 24 24'
              width={25}
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                {' '}
                <path
                  d='M15 15L21 21M21 15L15 21M10 21V14.6627C10 14.4182 10 14.2959 9.97237 14.1808C9.94787 14.0787 9.90747 13.9812 9.85264 13.8917C9.7908 13.7908 9.70432 13.7043 9.53137 13.5314L3.46863 7.46863C3.29568 7.29568 3.2092 7.2092 3.14736 7.10828C3.09253 7.01881 3.05213 6.92127 3.02763 6.81923C3 6.70414 3 6.58185 3 6.33726V4.6C3 4.03995 3 3.75992 3.10899 3.54601C3.20487 3.35785 3.35785 3.20487 3.54601 3.10899C3.75992 3 4.03995 3 4.6 3H19.4C19.9601 3 20.2401 3 20.454 3.10899C20.6422 3.20487 20.7951 3.35785 20.891 3.54601C21 3.75992 21 4.03995 21 4.6V6.33726C21 6.58185 21 6.70414 20.9724 6.81923C20.9479 6.92127 20.9075 7.01881 20.8526 7.10828C20.7908 7.2092 20.7043 7.29568 20.5314 7.46863L17 11'
                  stroke='#000000'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>{' '}
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className='flex max-sm:flex-col'>
        <div className='group bg-white p-4 rounded-lg'>
          <div className='relative bg-inherit'>
            <select
              name='categorySort'
              id='categorySort'
              className=' peer bg-transparent h-10 rounded-lg text-slate-gray placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-violet-600 focus:outline-none focus:invalid::border-rose-600 cursor-pointer transition-all'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value='all'>All</option>
              {categories.map((category) => (
                <option value={category}>{category}</option>
              ))}
            </select>
            <label
              htmlFor='categorySort'
              className='absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-focus:text-violet-600 transition-all'
            >
              Categories
            </label>
          </div>
        </div>
        <div className='bg-white p-4 rounded-lg'>
          <div className='relative bg-inherit'>
            <select
              name='dateSort'
              id='dateSort'
              className='peer bg-transparent h-10 rounded-lg text-slate-gray placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-violet-600 focus:outline-none focus:invalid:border-rose-600 cursor-pointer'
              value={date}
              onChange={(e) => setDate(e.target.value)}
            >
              <option value='latest'>Latest</option>
              <option value='oldest'>Oldest</option>
            </select>
            <label
              htmlFor='categorySort'
              className='absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-focus:text-violet-600 transition-all'
            >
              Date
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
