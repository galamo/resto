import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { ConfigurationContext } from "App";
import { changeStarsColor } from "store/config.actions";

export default function ConfigurationPage() {
  const [stateConfig, dispatch] = useContext(ConfigurationContext);

  function onColorChange(color: string): void {
    console.log(dispatch);
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
      <span style={{ color: stateConfig.starsColor }}> Selected color </span>

      <div>
        {configButtonsColor.map((color) => {
          return <ButtonWrapper color={color} />;
        })}
      </div>
    </div>
  );

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
