import React from 'react';

interface Props {
    type: string;
}

const BoxQuestion: React.FC<Props> = ({ type }) => {
    return (
        <div className='p-6 bg-white rounded shadow-md box-border h-32 w-32 flex flex-col items-center justify-center'>
            <p className="font-semibold">{type}</p>
        </div>
    );
};

export default BoxQuestion;
