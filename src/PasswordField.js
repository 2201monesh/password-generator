import { MdOutlineContentCopy } from 'react-icons/md';

function PasswordField({generatedPassword}) {
  return (
    <div className="inner-box-up">
      <input className="input-field" type="text" value={generatedPassword} />
      <MdOutlineContentCopy className="icon-top" />
    </div>
  )
}

export default PasswordField;
