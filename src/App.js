import { useState } from "react";
import PasswordField from "./PasswordField";
import PasswordForm from "./PasswordForm";

function App() {

  const [generatedPassword, setGeneratedPassword] = useState('');

  const handlePasswordState = (password) => {
    setGeneratedPassword(password);
  }

  return (
    <div className="outer-box" >
      <div className="inner-box">
        <h3 className="heading">Password Generator</h3>
        <PasswordField generatedPassword={generatedPassword} />
        <PasswordForm onPasswordGeneration={handlePasswordState} />
      </div>
    </div>
  );
}

export default App;
