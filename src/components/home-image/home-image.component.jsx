import './home-image.styles.scss'

const HomeImage = () => {

  return(
    <div className='image-container'>
      <div className="h-shape"></div>
        <div className="image">
          <img src={require('../../me.jpg')} alt=""/>
        </div>
    </div>
  )
}

export default HomeImage;