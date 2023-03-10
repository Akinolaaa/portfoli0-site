import './timeline-item.styles.scss';

const TimelineItem = ({job}) => {
  const { start, end, role, organization, text } = job;
  
  return(
    <div className="timeline-item">
      <div className="tl-icon">
        <i className="fas fa-briefcase"></i>
      </div>
      <p className="tl-duration">{start} - {end}</p>
      <h5>{role} <span> - {organization}</span></h5>
      <p>
        {text}
      </p>
    </div>
  )
}

export default TimelineItem;