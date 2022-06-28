import './timeline-item.styles.scss';

const TimelineItem = ({job}) => {
  const { start, end, role, organization, text } = job;
  
  return(
    <div class="timeline-item">
      <div class="tl-icon">
        <i class="fas fa-briefcase"></i>
      </div>
      <p class="tl-duration">{start} - {end}</p>
      <h5>{role} <span> - {organization}</span></h5>
      <p>
        {text}
      </p>
    </div>
  )
}

export default TimelineItem;