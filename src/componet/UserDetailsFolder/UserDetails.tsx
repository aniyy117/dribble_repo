import React, { useEffect } from "react";
import { Button, Form, Input } from "semantic-ui-react";
import "./UserDetails.css";


interface UserDetailsProps {
  handleNextButton: any;
  step: number;
  userName?: string;
  workSpaceName?:string;
  webSiteValues?:string;
  handleFormData?:any
}

const UserDetails: React.FC<UserDetailsProps> = (props) => {
  
  const { handleNextButton, step , userName , handleFormData , workSpaceName ,webSiteValues} = props;

  const [inputValue, setInputValue] = React.useState<string>("");

  const [workSpaceValue, SetWorkSpaceValue] = React.useState<string>("");
  const [webSiteValue, setWebsiteValue] = React.useState<string>("");

  const [workValidation, setWorkValidation] = React.useState<boolean>(false);
  const [nameValidation, setNameValidation] = React.useState<boolean>(false);
  

  useEffect( () => {
    if(step === 1){
      setInputValue(userName ? userName : "");
    }
    else if(step === 2){
      SetWorkSpaceValue(workSpaceName ? workSpaceName:"");
      setWebsiteValue(webSiteValues ? webSiteValues:"");
    }
  },[userName ,workSpaceName ,webSiteValues] );

  
  const handleInputValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputType: string
  ) => {
    if (inputType === "userFrom") {
      setInputValue(e.target.value);
      setNameValidation(false);
      
    } 
    else if (inputType === "workSpace") {
      SetWorkSpaceValue(e.target.value);
      setWorkValidation(false);
      
    } 
    else {
      setWebsiteValue(e.target.value);
    }
  };

  //for handling validation and next button
  
  const handleButtonCLick = (formType: string) => {
    if (formType === "userFrom") {
      if (inputValue === "") setNameValidation(true);
      else {
        handleNextButton();
        handleFormData("userName",inputValue);}
    }
     else if (formType === "workSpace") {
      if (workSpaceValue === "") setWorkValidation(true);
      else{ 
        handleNextButton();
        handleFormData("workSpaceName",workSpaceValue);
        handleFormData("webSiteValue",webSiteValue);
      }
    }
  };

  const displayName:string = inputValue.substring(0, inputValue.indexOf(' ')); 


  return (
    <>
      {step === 1 ? (
        <div className="user_details">
          <div className="user_details_header">
            <h1>Welcome! First thing first...</h1>
            <p>You can always change them later</p>
          </div>
          <div className="user_details_form_container">
            <Form onSubmit={() => handleButtonCLick("userFrom")}>
              <Form.Field>
                <Form.Input
                  label="Full name"
                  placeholder="Full Name"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputValue(e, "userFrom")
                  }
                  value={inputValue}
                  error={nameValidation && "Please enter a Name"}
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  label="Display Name"
                  placeholder="Display Name"
                  value={displayName}
                  readOnly={true}
                />
              </Form.Field>
              <Button type="submit" className="user_details_button">
                {"Create Workspace"}
              </Button>
            </Form>
          </div>
        </div>
      ) : (
        //condition
        <div className="workshop_details">
          <div className="user_details_header">
            <h1>{"Let's set up a home for all your work"}</h1>
            <p>{"You can always create another workspace later"}</p>
          </div>
          <div className="user_details_form_container">
            <Form onSubmit={() => handleButtonCLick("workSpace")}>
              <Form.Field>
                <Form.Input
                  label={"Workspace Name"}
                  placeholder="Eden"
                  value={workSpaceValue}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputValue(e, "workSpace")
                  }
                  error={workValidation && "Please enter a Workspace Name"}
                />
              </Form.Field>
              <Form.Field>
                <label>
                  {" Workspace URL"}
                  <span>{"(optionl)"}</span>
                </label>
                <Input
                  label="www.eden.com/"
                  placeholder="Example"
                  value={webSiteValue}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputValue(e, "website")
                  }
                />
              </Form.Field>
              <Button type="submit" className="user_details_button">
                Create Workspace
              </Button>
            </Form>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDetails;
