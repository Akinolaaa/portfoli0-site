import Title from '../../components/title/title.component';
import PortfolioItems from '../../components/portfolio-items/portfolio-items.component';

const Portfolio = () => {

  return (
    <div>
      <Title fronttxt={'My Portfolio'} backtxt={'Projects'} />
      <PortfolioItems />
    </div>
  )
}
export default Portfolio;