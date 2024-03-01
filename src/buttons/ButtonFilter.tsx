import { ButtonFilterProps } from "../types/Ttypes" 

const ButtonFilter = ({ onClick, name }: ButtonFilterProps) => {
  return (
    <>
      <button id="button-filter" onClick={onClick} className="w3-bar-item w3-button">{name}</button>
    </>
  )
}

export default ButtonFilter
