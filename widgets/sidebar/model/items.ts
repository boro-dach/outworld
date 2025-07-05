import {
  Calendar,
  CarTaxiFront,
  FileUser,
  Globe,
  Scale,
  Truck,
  Wallet,
} from "lucide-react";

export const items = [
  {
    title: "Заявки",
    url: "/applications",
    icon: FileUser,
  },
  {
    title: "Новости",
    url: "/news",
    icon: Globe,
  },
  {
    title: "Ивенты",
    url: "/events",
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
