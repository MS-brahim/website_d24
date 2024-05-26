import React from 'react';

interface Props {
    type: string;
    icon: string;
}

const BoxQuestion: React.FC<Props> = ({ type, icon }) => {
    const htmlForValue = type.replace(/\s+/g, '_');

    return (
        <div className='has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 
        has-[:checked]:ring-indigo-200 p-0 bg-white
         h-40 w-40'>

            <input type="radio" name="questionType" id={htmlForValue} className="hidden" />
            <label htmlFor={htmlForValue} className='h-full cursor-pointer p-3 flex flex-col items-center justify-center'>
                <img className="h-16 w-16" src={icon} alt="" />
                <p className="font-semibold text-center">{type}</p>
            </label>
        </div>
    );
};

export default BoxQuestion;
