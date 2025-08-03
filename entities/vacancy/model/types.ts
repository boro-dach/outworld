import { Jobs, PaymentPeriod, SalaryType } from "./schema";

export interface ICompany {
  id: string;
  title: string;
  description: string;
}

export interface ISalary {
  id: string;
  type: SalaryType;
  period: PaymentPeriod;
  fixedAmount?: number;
  minAmount?: number;
  maxAmount?: number;
}

export interface IVacancy {
  id: string;
  title: string;
  description: string;
  occupation: Jobs;
  salary: ISalary;
  company: ICompany;

  createdAt: string;
  updatedAt: string;
}
