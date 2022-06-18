import './timeline-item.styles.scss';

const TimelineItem = () => {

  return(
    <div class="timeline-item">
      <div class="tl-icon">
        <i class="fas fa-briefcase"></i>
      </div>
      <p class="tl-duration">2010 - present</p>
      <h5>Web developer <span> - Microsoft</span></h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, aperiam?
      </p>
    </div>
  )
}

export default TimelineItem;