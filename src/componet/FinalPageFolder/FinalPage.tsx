import { Button, Icon } from "semantic-ui-react";
import "./Final.css";

interface FinalPageProps {}

const FinalPage: React.FC<FinalPageProps> = (props) => {
  return (
    <div className="final_details">
      <div className="final_check">
        <Icon name="check" className="final_icon" />
      </div>
      <div className="user_details_header">
        <h1>Congratulations, Eren!</h1>
        <p>You have completed onboarding, you can start using the Eden!</p>
      </div>
      <div className="user_details_form_container">
        <Button type="submit" className="user_details_button">
          Create Workspace
        </Button>
      </div>
    </div>
  );
};

export default FinalPage;
