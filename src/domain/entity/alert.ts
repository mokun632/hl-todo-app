export type Alert = {
  severity: AlertSeverity;
  message: string;
  open: boolean;
};

export type AlertSeverity = "error" | "success";
