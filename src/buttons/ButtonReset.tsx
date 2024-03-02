import { ButtonFilterProps } from "../types/Ttypes" 

const ButtonReset = ({ onClick, name }: ButtonFilterProps) => {
  return (
    <>
      <button id="button-reset" onClick={onClick} className="w3-bar-item w3-button">{name}</button>
    </>
  )
}

export default ButtonReset
