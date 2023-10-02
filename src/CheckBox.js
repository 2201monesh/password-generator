import { RiCheckboxBlankLine } from 'react-icons/ri';
import { RiCheckboxFill } from 'react-icons/ri';

function CheckBox(props) {
  return (
    <div className="checkbox-section">
      {props.state ? <RiCheckboxFill onClick={props.onClick} className='checkbox-icon-blank' /> : <RiCheckboxBlankLine onClick={props.onClick} className='checkbox-icon-blank' />}
      <h3 className="checkbox-text">{props.text}</h3>
    </div>
  )
}

export default CheckBox;