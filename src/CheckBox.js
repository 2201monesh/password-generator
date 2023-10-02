import { RiCheckboxBlankLine } from 'react-icons/ri';
import { RiCheckboxFill } from 'react-icons/ri';

function CheckBox(props) {
  return (
    <div className="checkbox-section">
      <RiCheckboxBlankLine className='checkbox-icon-blank' />
      <h3 className="checkbox-text">{props.text}</h3>
    </div>
  )
}

export default CheckBox
