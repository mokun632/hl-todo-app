import { reducerWithInitialState } from "typescript-fsa-reducers";
import { Alert } from "../../domain/entity/alert";
import alertActions from "./action";

const init: Alert = { open: false, message: "", severity: "error" };

const alertReducer = reducerWithInitialState(init)
  .case(
    alertActions.openAlert,
    (_state, payload) => ({
      ...payload,
      open: true
    })
  )
  .case(
    alertActions.closeAlert,
    state => ({
      ...state,
      message: "",
      open: false
    })
  );

export default alertReducer;
