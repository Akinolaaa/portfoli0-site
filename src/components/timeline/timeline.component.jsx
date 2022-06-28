import './timeline.styles.scss'
import { TIMELINE } from '../../information';
import TimelineItem from '../timeline-item/timeline-item.component'

const Timeline = () => {

  return (
    <div className='timeline-container'>
      {
        TIMELINE.map(job => 
          <TimelineItem job={job} /> )
      }
    </div>
  )
}

export default Timeline;