
const ContactItem = ({icon, left, right}) => {

  return(
    <tr>
      <td style={{padding: `.5rem`}}>
        <i className={icon}></i>
      </td>
      <td> 
        <span>{left}:</span>
      </td>
      <td>
        <span> {right}</span>
      </td>
    </tr>
  )
}

export default ContactItem;