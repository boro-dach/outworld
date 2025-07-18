import {
  Calendar,
  CarTaxiFront,
  FileUser,
  Globe,
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
    url: "#",
    icon: Wallet,
  },
  {
    title: "Суд",
    url: "#",
    icon: Scale,
  },
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
