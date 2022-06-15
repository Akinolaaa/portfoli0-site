import { PageContainer } from '../../components/page-container/page-container.styles';
import Title from '../../components/title/title.component';
import PortfolioItems from '../../components/portfolio-items/portfolio-items.component';
//import PortfolioCard from '../../components/project-card/project-card.component'
import './portfolio.styles.scss'

const Portfolio = () => {

  return (
    <div >
    <PageContainer >
      <Title fronttxt={'My Portfolio'} backtxt={'Projects'} />
        <PortfolioItems />
      </PageContainer>
    </div>
  )
}
export default Portfolio;