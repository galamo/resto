import React, { useContext } from "react";
import { MealsContext } from "App";
import Meal from "components/ui-components/meal";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

export default function OrdersPage() {
  const [state, setState] = useContext(MealsContext);
  const { orders } = state;

  function removeMeal(meal: any) {
    const withoutDeleted = orders.filter(
      (order: any) => order.name !== meal.name
    );
    setState({ ...state, orders: [...withoutDeleted] });
  }

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
              action={removeMeal}
            />
          );
        })}
      </div>
    </div>
  );
}
