import './stack-item.styles.scss';

const StackItem = ({stack}) => {

  return(
    <div className="ic">
      <i className="fab fa-java"></i>
      <p>{stack}</p>
    </div>
  )
}

export default StackItem;