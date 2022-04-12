import React from "react";
import { Button, Card, Grid, Icon } from "semantic-ui-react";
import "./CardForm.css";

interface CardFormProps {
  handleNextButton: any;
  selectedCard: string;
  handleFormData: any;
}

const CardForm = (props: CardFormProps) => {
  const { handleNextButton ,selectedCard, handleFormData} = props;
  const [card, setCard] = React.useState<string>(selectedCard);

  const handleButtonCLick = () => {
    handleNextButton();
    handleFormData("selectedCard", card);
  };

  const cardData: any = [
    {
      id: "1",
      iconName: "user",
      h3info: "For Myself",
      pinfo: "Write Better. Think More Clearly. Stay Oragnised"
    },
    {
      id: "2",
      iconName: "group",
      h3info: "With Team",
      pinfo: "Wikis, docs, tasks & project all in one place."
    }
  ];

  const handleCardLink = (id: string) => setCard(id);
  return (
    <div>
      <div className="user_details">
        <div className="user_details_header">
          <h1>{"How are you planning to use Eden?"}</h1>
          <p>{"Well streamline your setup experience accordingly"}</p>
        </div>
        <div className="user_details_form_container">
          <Grid divided="vertically">
            <Grid.Row columns={2}>
              {cardData &&
                cardData.map((cardinfo: any) => {
                  return (
                    <Grid.Column key={cardinfo.id}>
                      <div onClick={() => handleCardLink(cardinfo.id)}>
                        <Card
                          className={
                            card === cardinfo.id
                              ? "card_border active"
                              : "card_border"
                          }
                        >
                          <Card.Content>
                            <Icon name={cardinfo.iconName} className={card === cardinfo.id ?"card_icon active_icon":"card_icon"}/>
                            <h4>{cardinfo.h3info}</h4>
                            <p>{cardinfo.pinfo}</p>
                          </Card.Content>
                        </Card>
                      </div>
                    </Grid.Column>
                  );
                })}
            </Grid.Row>
          </Grid>
          <div className="button_div">
            <Button
              type="submit"
              className="user_details_button"
              onClick={handleButtonCLick}
            >
              Create Workspace
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardForm;
