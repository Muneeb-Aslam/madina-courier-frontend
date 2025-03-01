import { INavItems } from "@/types";

const GetNavItems = () => {
  const NavItems: INavItems[] = [
    {
      label: "Dashboard",
      value: "/dashboard",
      href: "/dashboard",
    },
    {
      label: "Users",
      value: "/dashboard/users",
      href: "/dashboard/users",
    },
    {
      label: "Shipments",
      value: "/dashboard/shipments",
      href: "/dashboard/shipments",
    },
  ];

  return NavItems;
};

export default GetNavItems;
