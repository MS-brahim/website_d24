import React from 'react';

interface NextButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const NextButton:React.FC<NextButtonProps> = ({ onClick, disabled }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-2 rounded ${disabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'} focus:outline-none`}
        >
        Next
      </button>
    );
}
 
 
export default NextButton;