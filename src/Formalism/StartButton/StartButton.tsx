import React, {FC, useState} from 'react';
import './StartButton.scss'

const StartButton: FC<any> = ({value, title}) => {

  const [index, setIndex] = useState(1)

  return (
    <div className='StartButtonWrapper'>
      <p className='StartButtonTitle'>{title}</p>
      <button
        className='StartButton'
        onClick={() => setIndex((prev) => prev + 1 > 5 ? 1 : prev + 1)}>
        {value[index]}{' -> '}
      </button>
    </div>
  );
};

export default StartButton;