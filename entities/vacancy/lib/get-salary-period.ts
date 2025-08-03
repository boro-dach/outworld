import { PaymentPeriod } from "../model/schema";

export const getSalaryPeriod = (period: PaymentPeriod) => {
  switch (period) {
    case "PER_DAY":
      return "в день";
    case "PER_HOUR":
      return "в час";
    case "PER_MONTH":
      return "в месяц";
    case "PER_TASK":
      return "за задание";
    case "PER_WEEK":
      return "в неделю";
    default:
      return "";
  }
};
