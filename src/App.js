import PasswordField from "./PasswordField";
import PasswordForm from "./PasswordForm";

function App() {
  return (
    <div className="outer-box" >
      <div className="inner-box">
        <h3 className="heading">Password Generator</h3>
        <PasswordField />
        <PasswordForm />
      </div>
    </div>
  );
}

export default App;
