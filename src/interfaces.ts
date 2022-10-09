interface IDescriptionFile {
  id: string,
  name: string,
  selected: boolean,
}

interface ISelectProps {
  title: string
  options: IDescriptionFile[],
  chooseOption: (options: IDescriptionFile[], id: string) => void,
}

export type { ISelectProps, IDescriptionFile }