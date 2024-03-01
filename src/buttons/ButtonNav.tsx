import { useNavigate } from "react-router-dom";
import { Switch } from "../utils/RouterSwitch";

const ButtonNav = ({ name, title }: { name: string, title: string}) => {
  const navigate = useNavigate();

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate(Switch(e.currentTarget.name))
  };
  return (
    <>
      <button type='button' name={name} onClick={handleButtonClick}>{title}</button>
    </>
  )
}

export default ButtonNav
