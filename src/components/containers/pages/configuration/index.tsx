import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ConfigurationContext } from "App";
import { changeStarsColor, changeImageSize } from "store/config.actions";

export default function ConfigurationPage() {
  const [stateConfig, dispatch] = useContext(ConfigurationContext);

  function onColorChange(color: string): void {
    dispatch(changeStarsColor(color));
  }

  const configButtonsColor = [
    "red",
    "green",
    "yellow",
    "blue",
    "pink",
    "orange",
    "salmon",
  ];

  return (
    <div>
      <h1 className="jumbotron"> Configuration </h1>
      <div className="row">
        <h2 style={{ color: stateConfig.starsColor }}> Selected color </h2>
        <div className="row mt-5">
          {configButtonsColor.map((color) => {
            return <ButtonWrapper color={color} />;
          })}
        </div>
      </div>

      <div className="row mt-5">
        <span> Image size </span>
        <div>
          <ImageRange
            action={(value: number) => {
              dispatch(changeImageSize(value));
            }}
            value={stateConfig.imageSize / 3}
          />
        </div>
      </div>
    </div>
  );

  interface IProps {
    action: Function;
    value: number;
  }
  function ImageRange(props: IProps) {
    return (
      <Form>
        <Form.Group controlId="formBasicRange">
          <Form.Label>Range</Form.Label>
          <Form.Control
            type="range"
            value={props.value}
            onChange={(event) => {
              props.action(event.target.value);
            }}
          />
        </Form.Group>
      </Form>
    );
  }

  function ButtonWrapper(props: { color: string }) {
    const { color } = props;
    return (
      <Button
        onClick={() => {
          onColorChange(color);
        }}
        variant="primary"
        size="lg"
        active
      >
        {color}
      </Button>
    );
  }
}
