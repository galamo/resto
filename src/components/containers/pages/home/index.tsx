import React, { useContext, useEffect } from "react";
import { MealsContext } from "App";
import axios from "axios";
import Meal, { IMeal } from "components/ui-components/meal";
import Button from "react-bootstrap/Button";
import { BagFill } from "react-bootstrap-icons";

export default function HomePage() {
  const [state, setState] = useContext(MealsContext);
  console.log(setState);
  console.log(state);
  console.log("state");
  console.log(state);
  async function getRecipesApi() {
    try {
      const result = await axios.get("http://localhost:5200/meals");
      setState({ ...state, meals: [...state?.meals, ...result.data] });
    } catch (ex) {}
  }
  //action(props)

  useEffect(() => {
    getRecipesApi();
  }, []);
  if (!state.meals) return <span> No Meals </span>;
  return (
    <div className="row">
      {state?.meals.map((meal: any) => {
        return (
          <Meal {...meal} actionComponent={<AddToCartButton meal={meal} />} />
        );
      })}
    </div>
  );
}

function AddToCartButton(props: any) {
  const [_, dispatch] = useContext(MealsContext);

  function addMeal() {
    dispatch({ type: "add", payload: props });
  }
  return (
    <Button variant={props.cls || "primary"} onClick={addMeal}>
      <BagFill />
    </Button>
  );
}
