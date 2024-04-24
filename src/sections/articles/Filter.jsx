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
    <div className='flex justify-center items-center rounded-lg max-md:flex-col max-sm:items-start surface mb-12'>
      <div className=' p-4 rounded-lg  '>
        <div className='relative   '>
          <input
            type='text'
            id='search'
            name='search'
            className='peer input w-72'
            placeholder=''
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <label htmlFor='search' className='input-label'>
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
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              className='secondary-color'
            >
              <path
                fill='currentColor'
                d='M19.79 5.61A.998.998 0 0 0 19 4H6.83l7.97 7.97zM2.81 2.81L1.39 4.22L10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.17l5.78 5.78l1.41-1.41z'
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className='flex max-sm:flex-col'>
        <div className='group  p-4 rounded-lg'>
          <div className='relative bg-inherit'>
            <select
              name='categorySort'
              id='categorySort'
              className='input peer cursor-pointer'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value='all'>All</option>
              {categories.map((category) => (
                <option value={category}>{category}</option>
              ))}
            </select>
            <label htmlFor='categorySort' className='input-label'>
              Categories
            </label>
          </div>
        </div>
        <div className=' p-4 rounded-lg'>
          <div className='relative bg-inherit'>
            <select
              name='dateSort'
              id='dateSort'
              className='input peer cursor-pointer'
              value={date}
              onChange={(e) => setDate(e.target.value)}
            >
              <option value='latest'>Latest</option>
              <option value='oldest'>Oldest</option>
            </select>
            <label htmlFor='categorySort' className='input-label'>
              Date
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
