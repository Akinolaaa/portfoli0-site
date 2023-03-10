import './title.styles.scss'

const Title = ({fronttxt}) => {
  const [A, B] = fronttxt.split(' ');
  return (
    <div className="main-title">
      <div className='text'>
        <h2> {A} <span>{B}</span></h2>
      </div>
    </div>
  )
}

export default Title;