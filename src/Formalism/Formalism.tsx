import React, {useState} from 'react';
import Select from "./Select/Select";
import Radio from "./Radio/Radio";
import StartButton from "./StartButton/StartButton";
import { IDescriptionFile } from "../interfaces";
import './Formalism.scss'

const Formalism = () => {

  const descriptionArray = [
    {
      id: 'description1',
      name: 'description first',
      selected: false,
    },
    {
      id: 'description2',
      name: 'description second',
      selected: false,
    },
    {
      id: 'description3',
      name: 'description third',
      selected: false,
    }
  ]

  const processingGroupArray = [
    {
      id: 'group1',
      name: 'Первая группа',
      selected: false,
    },
    {
      id: 'group2',
      name: 'Вторая группа',
      selected: false,
    },
    {
      id: 'group3',
      name: 'Третья группа',
      selected: false,
    }
  ]

  const startColumn = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
    5: 'E',
  }

  const startString = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
  }

  const [descState, setDescState] = useState(descriptionArray)
  const [groupState, setGroupState] = useState(processingGroupArray)

  function chooseOption(options: IDescriptionFile[], id: string) {
    if(options[0].id === 'description1')setDescState(selectOption(options, id))
    if(options[0].id === 'group1')setGroupState(selectOption(options, id))
  }

  function selectOption(options: IDescriptionFile[], id: string) {
    return options.map((item) => {

      item.selected = id === item.id;
      return item;
    });
  }

  return (
    <>
      <div className="container">
        <Select
          options={descState}
          chooseOption={chooseOption}
          title={'Выбор файла описания:'}
        />
        <Select
          options={groupState}
          chooseOption={chooseOption}
          title={'Группа обработки:'}
        />
        <Radio />
        <div className='buttonsWrapper'>
          <StartButton value={startColumn} title={'Начальная колонка'}/>
          <StartButton value={startString} title={'Начальная строка'}/>
        </div>
      </div>
    </>
  );
};

export default Formalism;