import { useNavigate } from "react-router-dom";
import '../styles/App.css'

const Nav = () => {
  const navigate = useNavigate();

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate(e.currentTarget.name)
  };

  return (
    <div className='w3-container w3-teal'>
      <button type='button' name='/' onClick={handleButtonClick}>HOME</button>
      <button type='button' name='/search' onClick={handleButtonClick}>SEARCH</button>
    </div>
  )
}

export default Nav;
