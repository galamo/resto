import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { MealsContext } from "App";
import Rating from "components/ui-components/rating";

export interface IMeal {
  name: string;
  description: string;
  image: string;
  action?: Function;
  actionTitle?: string;
  cls: string;
  rating: number;
  actionComponent?: any;
}
export default function Meal(props: IMeal) {
  const { action, actionComponent } = props;

  return (
    <Card className="col-lg-4">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        {/* <Button variant={props.cls || "primary"} onClick={onAction}>
            {props.actionTitle}
          </Button> */}
        {actionComponent}
        <Rating stars={props.rating} />
      </Card.Body>
    </Card>
  );
}
