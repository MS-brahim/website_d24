import React, { useState } from 'react';
import questionsData from '../questions.json';
import BoxQuestion from './questionType/BoxQuestion';
import BackButton from './Buttons/BackButton';
import NextButton from './Buttons/NextButton';

interface Option {
  type: string;
  icon: string;
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
    <div className='min-h-80'>
      <BackButton onClick={handlePrev} disabled={currentStep === 0} />
      <h2 className="text-xl font-bold mb-4 text-center">{getCurrentQuestion().question}</h2>
      <div className="mb-4 max-w-xl mx-auto flex flex-row flex-wrap justify-center">
        {getCurrentQuestion().options.map((option, index) => (
          <div key={index} className="m-2 rounded shadow-md box-border">
            <BoxQuestion
              type={option.type} 
              icon={option.icon}
              />
          </div>
        ))}
      </div>
      <p className='text-center mb-2'>ok</p>
      <div className="flex justify-center">
        <NextButton onClick={handleNext} disabled={currentStep === questionsData.length - 1} />
      </div>
    </div>
  )
}

export default Question