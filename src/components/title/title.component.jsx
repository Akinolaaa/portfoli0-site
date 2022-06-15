import './title.styles.scss'

const Title = ({fronttxt, backtxt}) => {
  const [A, B] = fronttxt.split(' ');
  return (
    <div class="main-title">
        <h2>
          {A} <span>{B}</span><span class="bg-text">{backtxt}</span>
        </h2>
      </div>
  )
}

export default Title;