import { MdOutlineContentCopy } from 'react-icons/md';

function PasswordField() {
  return (
    <div className="inner-box-up">
      <input className="input-field" type="text" />
      <MdOutlineContentCopy className="icon-top" />
    </div>
  )
}

export default PasswordField;
