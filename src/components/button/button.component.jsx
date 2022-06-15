import './button.styles.scss';

const Button = ({text}) => {

  return (
    <a className="btn-con" href='https://www.facebook.com'>
      <div className="main-btn">
        <span className="btn-text">{text}</span>
        <span className="btn-icon"><i className="fas fa-download"></i></span>
      </div>
    </a>
  )
}

export default Button;