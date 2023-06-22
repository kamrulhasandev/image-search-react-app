import React from 'react';

const SearchField = ({ setImageQuantity, setSearchText }) => {
  return (
    <div>
      <div className='md:flex justify-center gap-5 py-10 px-5'>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          name=""
          className=' w-full md:w-1/2  outline-none mb-3 md:mb-0 bg-slate-200 py-2 px-5 rounded-full'
          placeholder='Search Image'
        />
        <input
          onChange={(e) => setImageQuantity(e.target.value)}
          type="number"
          className='bg-slate-200  py-2 px-5 rounded-full outline-none'
          name=""
          placeholder='Image Quantity'
        />
      </div>
    </div>
  );
};

export default SearchField;
