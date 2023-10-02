import CheckBox from "./CheckBox";
import { TbRectangleVertical } from 'react-icons/tb';
import { BsArrowRightShort } from 'react-icons/bs';

function PasswordForm() {
  return (
    <div className="inner-box-down">
      <div className="character-length">
        <h3>character length</h3>
        <h3>10</h3>
      </div>

        <CheckBox text="Include Uppercase Letters" />
        <CheckBox text="Include Lowercase Letters" />
        <CheckBox text="Include Numbers" />
        <CheckBox text="Include Symbols" />

        <div className="strength">
            <h3>STRENGTH</h3>
            <div className="strength-right">
                <TbRectangleVertical />
                <TbRectangleVertical />
                <TbRectangleVertical />
                <TbRectangleVertical />
            </div>
        </div>

        <div className="generate-button">
            <h3>Generate</h3>
            {/* <BsArrowRightShort /> */}
        </div>

    </div>
  )
}

export default PasswordForm
