import React, {FC, useEffect, useState} from 'react';
import './Select.scss'
import { IDescriptionFile, ISelectProps} from "../../interfaces";

const Select: FC<ISelectProps> = ({options, chooseOption, title}) => {

  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState('choose')

  useEffect(() => {
    options.map((item: IDescriptionFile) => {
      if (item.selected) {
        console.log(item.id)
        setSelected(item.name);
        toggle();
      }
    })
  }, [options]);

  function toggle() {
    setOpen((prev) => !prev)
  }

  return (
    <>
    <div>
      <p className='selectTitle'>{title}</p>
      <input
        className='descriptionFileSelect'
        type="text"
        readOnly={true}
        value={selected}
        onClick={toggle}
      />
    </div>
      {open && options.map((item) => {
        return (<ul key={item.id}>
                  <li onClick={(e) => chooseOption(options, item.id)}>{item.name}</li>
                </ul>)
      })}
    </>
  );
};

export default Select;