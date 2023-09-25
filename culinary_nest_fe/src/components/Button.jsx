import React from 'react';

const Button = ({title}) => {
    return (
        <div className="h-12 w-full bg-button-gray flex mt-5 justify-center items-center font-bold text-xl rounded-[10px] ">
            {title}
        </div>
    );
};

export default Button;