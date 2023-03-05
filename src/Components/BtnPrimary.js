import React from 'react';

const BtnPrimary = ({ children }) => {
    return (
        <div>
            <button className='p-3  w-3/4   font-semibold rounded-md btn-primary  bg-gradient-to-r from-primary to-secondary text-white'>{children}</button>
        </div>
    );
};

export default BtnPrimary;