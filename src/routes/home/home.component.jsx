import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import './home.styles.scss';
import HomeImage from "../../components/home-image/home-image.component";
import Introduction from "../../components/introduction/introduction.component";
const Home = () => {

  return (
    <Fragment>
      <Outlet />
      <div className="home-container active" id="home">
        <div className="home-content">
          <div className="left-home-content">
            <HomeImage />
          </div>
          <div className="right-home-content">
            <Introduction />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Home;