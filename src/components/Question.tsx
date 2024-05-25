import React, { useState } from 'react';
import questionsData from '../questions.json';
import BoxQuestion from './questionType/BoxQuestion';
import BackButton from './Buttons/BackButton';
import NextButton from './Buttons/NextButton';

interface Option {
  type: string;
  description: string;
}

interface Question {
  id: number;
  question: string;
  options: Option[];
}

const questions: Question[] = questionsData;


const Question: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };
  const getCurrentQuestion = (): Question => {
    return questions[currentStep];
  };

  return (
    <div className='text-' style={{ minHeight: '75vh' }}>
      <BackButton onClick={handlePrev} disabled={currentStep === 0} />
      <h2 className="text-xl font-bold mb-4 text-center">{getCurrentQuestion().question}</h2>
      {/* <p className="mb-4 text-center">{getCurrentQuestion().question}</p> */}
      <div className="mb-4 max-w-md mx-auto flex flex-row flex-wrap justify-center">
        {getCurrentQuestion().options.map((option, index) => (
          <div key={index} className="m-2">
            <BoxQuestion
              type={option.type} />
            {/* <p> {option.description} </p> */}
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <NextButton onClick={handleNext} disabled={currentStep === questionsData.length - 1} />
      </div>
    </div>
  )
}

export default Question