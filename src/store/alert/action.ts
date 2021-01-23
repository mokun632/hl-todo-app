import actionCreaterFactory from "typescript-fsa";
import { Alert } from "../../domain/entity/alert";

const actionCraeter = actionCreaterFactory();

export type AlertPayload = Omit<Alert, "open">;

const alertActions = {
  openAlert: actionCraeter<AlertPayload>("OPEN_ALERT"),
  closeAlert: actionCraeter<{}>("CLOSE_ALERT")
};

export default alertActions;
