import React from 'react';

const Image = ({image}) => {
    return (
        <div>
            <img className='h-80 w-full object-cover mb-5 md:mb-0' src={image.largeImageURL} alt="" />
        </div>
    );
};

export default Image;