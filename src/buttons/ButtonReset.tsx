import { ButtonFilterProps } from "../types/Ttypes" 

const ButtonReset = ({ onClick, name }: ButtonFilterProps) => {
  return (
    <>
      <button onClick={onClick}>{name}</button>
    </>
  )
}

export default ButtonReset
