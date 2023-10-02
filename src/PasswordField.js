import { MdOutlineContentCopy } from 'react-icons/md';
import clipboardCopy from 'clipboard-copy';

function PasswordField({generatedPassword}) {

   const handleCopyToClipboard = () => {
    clipboardCopy(generatedPassword)
      .then(() => {
        alert('Text copied to clipboard!');
      })
      .catch((error) => {
        console.error('Copy to clipboard failed:', error);
      });
  };

  return (
    <div className="inner-box-up">
      <input className="input-field" type="text" value={generatedPassword} />
      <MdOutlineContentCopy onClick={handleCopyToClipboard} className="icon-top" />
    </div>
  )
}

export default PasswordField;
