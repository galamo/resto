import { ACTIONS } from "./actions.config";

export const initConfigState = {
  starsColor: "red",
};

interface IProps {
  type: string; // what am i doing
  payload: any; // what am i sending
}

export default function configReducer(state: any, action: IProps) {
  switch (action.type) {
    case ACTIONS.CONFIG.CHANGE_STARS_COLOR: {
      const { payload: color } = action;
      return { ...state, starsColor: color };
    }
    default: {
      return state;
    }
  }
}
