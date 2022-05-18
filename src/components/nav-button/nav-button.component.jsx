//import { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
//import { PageContext } from '../../contexts/page.context';
import './nav-button.styles.scss'

const NavButton = ({ logo, name }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  let className = pathname===`/${name}` ? "nav-btn active-btn active" : "nav-btn";

  function navHandler(event){
    navigate(`/${name}`)
  }
  return (
    <div className={className} data-id={name} onClick={navHandler}>
      <i className={logo}></i>
    </div>) 
}

export default NavButton;