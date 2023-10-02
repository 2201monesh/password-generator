import CheckBox from "./CheckBox";
import { TbRectangleVertical } from 'react-icons/tb';
import { TbRectangleVerticalFilled } from 'react-icons/tb';
import { useState } from "react";
import PasswordGenerator from "./PasswordGenerator";

function PasswordForm({onPasswordGeneration}) {

    const[firstCheckbox, setFirstcheckbox] = useState(false);
    const[secondCheckbox, setSecondcheckbox] = useState(false);
    const[thirdCheckbox, setThirdcheckbox] = useState(false);
    const[fourthCheckbox, setFourthcheckbox] = useState(false);
    const [generatedPassword, setGeneratedPassword] = useState('');

    const toggleFirstCheckbox = () => {
        setFirstcheckbox(!firstCheckbox);
    }

    const toggleSecondCheckbox = () => {
        setSecondcheckbox(!secondCheckbox);
    }

    const toggleThirdCheckbox = () => {
        setThirdcheckbox(!thirdCheckbox);
    }

    const toggleFourthCheckbox = () => {
        setFourthcheckbox(!fourthCheckbox);
    }

    const handlePasswordGenerate = (password) => {
        setGeneratedPassword(password);
    }
    onPasswordGeneration(generatedPassword);

  return (
    <div className="inner-box-down">
      <div className="character-length">
        <h3>character length</h3>
        <h3>10</h3>
      </div>

        <CheckBox onClick={toggleFirstCheckbox} state={firstCheckbox} text="Include Uppercase Letters" />
        <CheckBox onClick={toggleSecondCheckbox} state={secondCheckbox} text="Include Lowercase Letters" />
        <CheckBox onClick={toggleThirdCheckbox} state={thirdCheckbox} text="Include Numbers" />
        <CheckBox onClick={toggleFourthCheckbox} state={fourthCheckbox} text="Include Symbols" />

        <div className="strength">
            <h3>STRENGTH</h3>
            <div className="strength-right">
                {firstCheckbox ? <TbRectangleVerticalFilled /> : <TbRectangleVertical />}
                {secondCheckbox ? <TbRectangleVerticalFilled /> : <TbRectangleVertical />}
                {thirdCheckbox ? <TbRectangleVerticalFilled /> : <TbRectangleVertical />}
                {fourthCheckbox ? <TbRectangleVerticalFilled /> : <TbRectangleVertical />}
            </div>
        </div>

        <div className="generate-button">
            <PasswordGenerator
             includeUppercase={firstCheckbox}
             includeLowercase={secondCheckbox}
             includeNumbers={thirdCheckbox}
             includeSymbols={fourthCheckbox}
             onPasswordGenerate={handlePasswordGenerate}
            />
        </div>

    </div>
  )
}

export default PasswordForm
