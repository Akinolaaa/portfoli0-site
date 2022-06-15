import './button.styles.scss';

const Button = ({text}) => {

  return (
    <a className="btn-con" href='https://www.facebook.com'>
      <div class="main-btn">
        <span class="btn-text">{text}</span>
        <span class="btn-icon"><i class="fas fa-download"></i></span>
      </div>
    </a>
  )
}

export default Button;