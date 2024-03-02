
import '../styles/App.css'
import ButtonNav from "../buttons/ButtonNav";

const Nav = () => {


  return (
    <div id='nav' className='w3-container w3-teal'>
      <ButtonNav name="/" title="HOME" />
      <ButtonNav name="/search" title="SEARCH" />
    </div>
  )
}

export default Nav;
