import { ACTIONS } from "./actions.config";

export function changeStarsColor(payload: string) {
  return {
    type: ACTIONS.CONFIG.CHANGE_STARS_COLOR,
    payload,
  };
}
