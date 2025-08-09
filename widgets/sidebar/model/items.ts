import {
  BriefcaseBusiness,
  Building2,
  Calendar,
  CarTaxiFront,
  FileUser,
  Globe,
  IdCardLanyard,
  Scale,
  Truck,
  User,
  Wallet,
} from "lucide-react";

export const items = [
  {
    title: "Заявки",
    url: "/dashboard/applications",
    icon: FileUser,
  },
  {
    title: "Новости",
    url: "/dashboard/news",
    icon: Globe,
  },
  {
    title: "Ивенты",
    url: "/dashboard/events",
    icon: Calendar,
  },
  {
    title: "Финансы",
    url: "/dashboard/bank",
    icon: Wallet,
  },
  {
    title: "Суд",
    url: "#",
    icon: Scale,
  },
  {
    title: "Компании",
    url: "/dashboard/companies",
    icon: Building2,
  },
  { title: "Вакансии", url: "/dashboard/vacancies", icon: IdCardLanyard },
  {
    title: "Профиль",
    url: "/dashboard/me",
    icon: User,
  },
  {
    title: "о!Доставка",
    url: "#",
    icon: Truck,
  },
  {
    title: "о!Такси",
    url: "#",
    icon: CarTaxiFront,
  },
];
