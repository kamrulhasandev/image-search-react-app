import React from 'react';

const SearchField = () => {
    return (
        <div>
            <div className='flex justify-center gap-5 py-10'>
                <input type="text" name="" className='w-1/2 outline-none bg-slate-200 py-2 px-5 rounded-full' placeholder='Search Image' id="" />
                <input type="number" className='bg-slate-200 py-2 px-5 rounded-full' name="" placeholder='Image Quantity' id="" />
            </div>
        </div>
    );
};

export default SearchField;