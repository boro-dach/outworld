import { ApplicationStatus } from "./types";

export interface ApplicationProps {
  text: string;
  status: ApplicationStatus;
}

export interface AdminApplicationProps extends ApplicationProps {
  login: string;
  applicationId: string;
}
