import React from 'react';
import './Radio.scss'

const Radio = () => {

  function catcher(target: any) {
    // @ts-ignore
    if (target.type === 'radio') console.log(target.checked)
  }

  return (
    <>
      <p className='RadioTitle'>Направление обработки листа:</p>
      <div className='radioContainer' onClick={(e) => catcher(e.target)}>
      <div className='radioBtn'>
        <input type="radio" id='vertical' name='direction'  value='вертикальное' />
        <label htmlFor="vertical">
          вертикальное
        </label>
      </div>
      <div className='radioBtn'>
        <input type="radio" id='horizontal' name='direction'  value='горизонтальное' />
        <label htmlFor="horizontal">
          горизонтальное
        </label>
      </div>
      <div className='radioBtn'>
        <input type="radio" id='combinated' name='direction'  value='сводное' />
        <label htmlFor="combinated">
          сводное
        </label>
      </div>
    </div>
    </>

  );
};

export default Radio;