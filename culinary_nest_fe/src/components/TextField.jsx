import React from 'react';

const TextField = ({label,value,placeholder, onChange, className}) => {
    return (
        <>
            <label htmlFor={label} className="text-white">{label}</label>
            <input
                type="text"
                name={label}
                value={value}
                className=  {`w-full h-12 px-2  rounded-[10px] border border-white text-white bg-secondary`}
                placeholder={placeholder}
                onChange={onChange}
            />
        </>
    );
};

export default TextField;