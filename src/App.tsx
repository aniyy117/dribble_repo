import "./styles.css";
import Stepper from "./componet/StepperFolder/Stepper";
import UserDetails from "./componet/UserDetailsFolder/UserDetails";
import CardForm from "./componet/CardFormComponet/CardForm";
import FinalPage from "./componet/FinalPageFolder/FinalPage";
import logo from "./Image/logo.png";
import { useState } from "react";
export default function App() {
  const [steps, setSteps] = useState<number>(1);

  const handleNextButton = () => {
    if (steps < 4) setSteps(steps + 1);
  };

  const handleForm = (step: number) => {
    switch (step) {
      case 1:
        return <UserDetails handleNextButton={handleNextButton} step={step} />;
      case 2:
        return <UserDetails handleNextButton={handleNextButton} step={step} />;
      case 3:
        return <CardForm handleNextButton={handleNextButton} />;
      case 4:
        return <FinalPage />;
      default:
        return "";
    }
  };

  const handleChildSteps = (steps: string) => {
    setSteps(Number(steps));
  };

  return (
    <div className="App">
      <div className="logo_container">
        <img src={logo} alt="hshs" draggable={false} className="logo_image" />
      </div>
      <div className="stepper_div">
        <Stepper handleChildSteps={handleChildSteps} step={steps} />
      </div>
      <div className="form_body">{handleForm(steps)}</div>
    </div>
  );
}
