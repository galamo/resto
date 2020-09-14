import React, { useContext } from "react";
import { MealsContext } from "App";
import Meal from "components/ui-components/meal";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

export default function OrdersPage() {
  const [state, setState] = useContext(MealsContext);
  const { orders } = state;
  function getTotalCal() {
    const total = orders.reduce((total: number, order: any) => {
      console.log(parseInt(order.calories));
      if (isNaN(parseInt(order.calories))) return total;
      return total + parseInt(order.calories);
    }, 0);
    return total;
  }
  return (
    <div>
      <h1 className="jumbotron"> Orders </h1>

      <div className="row">
        <h2>
          {" "}
          Total Price: <Badge variant="secondary">{getTotalCal()} Cal</Badge>
        </h2>
        <Button
          onClick={() => {
            setState({ ...state, orders: [] });
          }}
          variant="danger"
          size="lg"
          active
        >
          Clear Orders
        </Button>
      </div>
      <div>
        {orders.map((meal: any) => {
          return (
            <Meal
              {...meal}
              cls="danger"
              actionTitle="Remove"
              btn={<DelBtn name={meal.name} />}
            />
          );
        })}
      </div>
    </div>
  );
}

function DelBtn(props: { name: string }) {
  const [state, setState] = useContext(MealsContext);
  const { orders } = state;

  return (
    <button
      onClick={() => {
        setState({ ...state, orders: [] });
      }}
    >
      delete
    </button>
  );
}
