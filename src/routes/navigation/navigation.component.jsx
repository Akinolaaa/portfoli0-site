import './navigation.styles.scss';
import NavButton from '../../components/nav-button/nav-button.component';

const navigations = {
  home: {
    id: 1,
    logo: "fas fa-home",
  },
  about: {
    id: 2,
    logo: "fas fa-user",
  },
  portfolio: {
    id: 3,
    logo: "fas fa-briefcase",
  },
  /* blogs: {
    id: 4,
    logo: "fas fa-newspaper",
  }, */
  contact: {
    id:5,
    logo: "fas fa-envelope-open",
  },
}

const Navigation = () => {
  <div className="nav-btns">
    <p>Why wiont you navigate</p>
    {
      Object.keys(navigations).map(button => {
        return (
          <NavButton 
            logo={navigations[button].logo}
            key={navigations[button].id}
            name={button==='home'? '': button}
          />
        )
      })
    }
  </div>
}

export default Navigation;