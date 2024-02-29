import { ButtonFilterProps } from "../types/Ttypes" 

const ButtonFilter = ({ onClick, name }: ButtonFilterProps) => {
  return (
    <>
      <button id="button-filter" onClick={onClick}>{name}</button>
    </>
  )
}

export default ButtonFilter
