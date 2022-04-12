import "./styles.css";
import Stepper from "./componet/StepperFolder/Stepper";
import UserDetails from "./componet/UserDetailsFolder/UserDetails";
import CardForm from "./componet/CardFormComponet/CardForm";
import FinalPage from "./componet/FinalPageFolder/FinalPage";
import logo from "./Image/logo.png";
import { useState } from "react";


interface AppProps {}

const App:React.FC<AppProps> =(props) => {

  const [steps, setSteps] = useState<number>(1);
  const [userName, setUserName] = useState<string>("Steve jobs");
  const [workSpaceName, setWorkSpaceName] = useState<string>("Eden");
  const [webSiteValue, setWebSiteValue] = useState<string>("www.google.com");
  const [selectedCard, setsSelectedCard] = useState<string>("1");

  const handleNextButton = () => {
    if (steps < 4) setSteps(steps + 1);
  };

  const displayName:string = userName.substring(0, userName.indexOf(' ')); 

  const handleFormData = (type: string, value: string) => {
    if (type === "userName") {
      setUserName(value);
    } else if (type === "workSpaceName") {
      setWorkSpaceName(value);
    } else if (type === "webSiteValue") {
      setWebSiteValue(value);
    }else if(type === "selectedCard"){
      setsSelectedCard(value);
    }
  };

  const handleForm = (step: number) => {
    switch (step) {
      case 1:
        return (
          <UserDetails
            handleNextButton={handleNextButton}
            step={step}
            userName={userName}
            handleFormData={handleFormData}
          />
        );
      case 2:
        return (
          <UserDetails
            handleNextButton={handleNextButton}
            step={step}
            userName={userName}
            workSpaceName={workSpaceName}
            webSiteValues={webSiteValue}
            handleFormData={handleFormData}
          />
        );
      case 3:
        return <CardForm handleNextButton={handleNextButton} selectedCard={selectedCard}  handleFormData={handleFormData}/>;
      case 4:
        return <FinalPage displayName={displayName}/>;
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

export default App