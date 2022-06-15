import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import './home.styles.scss';
import HomeImage from "../../components/home-image/home-image.component";
import Introduction from "../../components/introduction/introduction.component";
import { PageContainer } from "../../components/page-container/page-container.styles";
const Home = () => {

  return (
    <Fragment>
      <Outlet />
      <PageContainer>
        <div className="home-content">
          <div className="left-home-content">
            <HomeImage />
          </div>
          <div className="right-home-content">
            <Introduction />
          </div>
        </div>
      </PageContainer>
    </Fragment>
  )
}

export default Home;