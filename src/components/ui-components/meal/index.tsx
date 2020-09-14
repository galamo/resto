import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { MealsContext } from "App";
import Rating from "components/ui-components/rating";

interface IMeal {
  name: string;
  description: string;
  image: string;
  action: Function;
  actionTitle: string;
  cls: string;
  rating: number;
}
export default function Meal(props: IMeal) {
  const [state, setState] = useContext(MealsContext);

  // we will change it next lesson
  // function addMeal() {
  //   setState({ ...state, orders: [...state.orders, props] });
  // }
  return (
    <Card className="col-lg-4">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        {/* <Button variant={props.cls || "primary"} onClick={addMeal}>
          {props.actionTitle}
        </Button> */}
        <Button
          variant={props.cls || "primary"}
          onClick={() => {
            props.action(props);
          }}
        >
          {props.actionTitle}
        </Button>
        <Rating stars={props.rating} />
      </Card.Body>
    </Card>
  );
}
