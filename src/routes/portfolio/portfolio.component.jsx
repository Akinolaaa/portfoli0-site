import { PageContainer } from '../../components/page-container/page-container.styles';
import Title from '../../components/title/title.component';
import PortfolioItems from '../../components/portfolio-items/portfolio-items.component';

const Portfolio = () => {

  return (
    <PageContainer>
      <Title fronttxt={'My Portfolio'} backtxt={'Projects'} />
      <PortfolioItems />
    </PageContainer>
  )
}
export default Portfolio;